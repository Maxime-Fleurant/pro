export const typegraphMain = `
// schema.ts
@Service()
export class SchemaMaker {
  private customAuthChecker: AuthChecker<IContext> = (
    { root, args, context: { user }, info },
    roles
  ) => {
    if (!user) {
      return false;
    }

    if (roles.length && !roles.includes(user.role)) {
      return false;
    }

    return true;
  };

  async create() {
    const schema = await buildSchema({
      resolvers: [
        AnimeResolver,
        CharacterResolver,
        StudioResolver,
        UserResolver,
        ReviewResolver,
      ],
      container: Container,
      emitSchemaFile: {
        path: path.resolve(__dirname, '../common/api.graphql'),
      },
      authChecker: this.customAuthChecker,
    });

    return schema;
  }
}


// model.ts
@ObjectType()
@Entity()
export class Studio extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Anime, (anime) => anime.studio)
  animes: Anime[];
}


// resolver.ts
@Resolver(() => Studio)
export class StudioResolver extends createGenericResolver('Studio', Studio) {
  constructor(
    @InjectRepository(Studio) private studioRepository: Repository<Studio>
  ) {
    super();
  }

  @Authorized(['admin'])
  @Mutation(() => Studio)
  async createStudio(@Arg('studioName') studioName: string): Promise<Studio> {
    const newStudio = this.studioRepository.save(
      this.studioRepository.create({ name: studioName })
    );

    return newStudio;
  }
}

`;

export const typegraphSchema = `
// type.ts
@ObjectType()
@Entity()
export class Review {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Field()
  @Column({ type: 'text' })
  summary: string;

  @Field()
  @Column({ type: 'text' })
  body: string;

  @Column({ type: 'int' })
  score: number;

  @ManyToOne(() => Anime, (anime) => anime.reviews, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  anime: Anime;

  @Field(() => ID)
  @RelationId((review: Review) => review.anime)
  animeId: number;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: 'SET NULL' })
  user: User;

  @RelationId((review: Review) => review.user)
  userId: number;
}

`;

export const typegraphResolvers = `
// resolver.ts
@Resolver(() => Character)
export class CharacterResolver extends createGenericResolver(
  'Character',
  Character
) {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>
  ) {
    super();
  }

  @FieldResolver()
  async anime(
    @Root() parent: Character,
    @Ctx() context: IContext
  ): Promise<Anime | undefined> {
    const anime = await context.loaders.animeLoaders.batchFindById.load(
      parent.animeId
    );

    return anime;
  }

  @Authorized(['admin'])
  @Mutation(() => Character)
  async createCharacter(
    @Arg('characterData') characterData: CharacterInput
  ): Promise<Character> {
    const { animeId, ...formatedCharacterData } = {
      ...characterData,
      anime: { id: characterData.animeId },
    };

    const newCharacter = this.characterRepository.save(
      this.characterRepository.create(formatedCharacterData)
    );

    return newCharacter;
  }

  @Authorized(['admin'])
  @Mutation(() => Character)
  async updateCharacter(
    @Arg('characterId') characterId: number,
    @Arg('characterData') characterData: UpdateCharacterInput
  ): Promise<Character | undefined> {
    await this.characterRepository.update(characterId, characterData);

    const updatedCharacter = await this.characterRepository.findOne(
      characterId
    );

    return updatedCharacter;
  }
}

// input-type.ts
@InputType()
export class BaseCharacterInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  largeImg: string;

  @Field()
  mediumImg: string;
}

@InputType()
export class CharacterInput extends BaseCharacterInput {
  @Field()
  animeId: number;
}

@InputType()
export class UpdateCharacterInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;
}

`;

export const graphGenericResolv = `
// genericResolver.ts
export function createGenericResolver<T extends ClassType>(
  suffix: string,
  objectTypeCls: T
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @InjectRepository(objectTypeCls) private genericRepo: Repository<T>;

    @Query(() => [objectTypeCls], {
      name: \`\${suffix}s\`,
    })
    async getAll(): Promise<T[]> {
      return this.genericRepo.find();
    }

    @Query(() => objectTypeCls, { name: \`\${suffix}\` })
    async getOne(@Arg('id', () => ID) id: number): Promise<T | undefined> {
      return this.genericRepo.findOne(id);
    }

    @Authorized(['admin'])
    @Mutation(() => String, { name: \`delete\${suffix}\` })
    async delete(@Arg('id') id: string): Promise<string> {
      await this.genericRepo.delete(id);

      return 'deleted';
    }
  }

  return BaseResolver;
}

`;

export const graphAuth = `
// apolloConfig.ts
const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    let user: Pick<User, 'id' | 'role'> | null;

    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];

      user = this.jwt.jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as Pick<User, 'id' | 'role'>;
    } else {
      user = null;
    }

    const context: IContext = {
      user: user ? { id: user.id, role: user.role } : null,
      loaders,
    };

    return context;
  },
  debug: false,
});



// authChecker.ts
private customAuthChecker: AuthChecker<IContext> = (
  { root, args, context: { user }, info },
  roles
) => {
  if (!user) {
    return false;
  }

  if (roles.length && !roles.includes(user.role)) {
    return false;
  }

  return true;
};

// resolver.ts
@Authorized(['admin'])
@Mutation(() => Anime)
async addGenreFromAnime(
  @Arg('animeId') animeId: number,
  @Arg('genreIds', () => [Number]) genreIds: number[]
): Promise<Anime | undefined> {
  await this.animeRepository
    .createQueryBuilder()
    .relation(Anime, 'genres')
    .of(animeId)
    .add(genreIds);

  return this.animeRepository.findOne(animeId);
}

`;

export const graphValidation = `
// inputType.ts
@InputType()
export class SearchAnimeInput {
  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  format?: string;

  @Field(() => [String], { nullable: true })
  tagsIn?: string[];

  @Field(() => [String], { nullable: true })
  genresIn?: string[];

  @Field()
  @Max(50)
  limit?: number;

  @Field()
  skip?: number;
}

`;

export const graphComplexity = `
// apolloServerConfig.ts
const apolloServer = new ApolloServer({
  schema,
  plugins: [
    {
      requestDidStart: () => ({
        didResolveOperation({ request, document }) {
          const complexity = getComplexity({
            schema,
            operationName: request.operationName,
            query: document,
            variables: request.variables,
            estimators: [
              fieldExtensionsEstimator(),
              simpleEstimator({ defaultComplexity: 1 }),
            ],
          });

          if (complexity > 100) {
            throw new Error(
              \`Sorry, too complicated query! \${complexity} is
               over 20 that is the max allowed complexity.\`
            );
          }
        },
      }),
    },
  ],
});

`;
