export const nestMain = `
// app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'anidb',
      password: 'test123',
      database: 'anidb',
      entities: [
        Studio,
        Theme,
        Genre,
        Tag,
        Anime,
        Review,
        Character,
        ExternalLink,
        User,
      ],
      synchronize: true,
    }),
    AnimesModule,
    StudiosModule,
    ReviewsModule,
    CharactersModule,
    ExternalLinksModule,
    TagsModule,
    AuthModule,
    UsersModule,
    SharedModule,
    FakeModuleModule,
  ],
  providers: [],
})
export class AppModule {}

// anime.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([Anime])],
  controllers: [AnimesController],
  providers: [
    AnimesService,
    SearchAnime,
    CreateAnimes,
    UpdateAnimes,
    DeleteAnimes,
  ],
})
export class AnimesModule {}


// anime.controller.ts
@Controller('animes')
export class AnimesController {
  constructor(private animeService: AnimesService) {}

  @Get()
  getAnimes(@Query() searchAnimeDto: SearchAnimeDto): Promise<Anime[]> {
    return this.animeService.getAnimes(searchAnimeDto);
  }

  @Get(':id')
  getAnime(@Param('id') id: number): Promise<Anime[]> {
    return this.animeService.getAnime(id);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Post()
  postAnime(@Body() createAnimeDto: CreateAnimeDto): Promise<object> {
    return this.animeService.postAnime(createAnimeDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimeDto: UpdateAnimeDto,
  ): Promise<object> {
    return this.animeService.update(id, updateAnimeDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<string> {
    return this.animeService.delete(id);
  }
}


// anime.service.ts
@Injectable()
export class AnimesService {
  constructor(
    private searchAnime: SearchAnime,
    private createAnime: CreateAnimes,
    private updateAnime: UpdateAnimes,
    private deleteAnime: DeleteAnimes,
  ) {}

  getAnimes(searchAnimeDto: SearchAnimeDto): Promise<Anime[]> {
    return this.searchAnime.find(searchAnimeDto);
  }

  getAnime(id: number): Promise<Anime[]> {
    return this.searchAnime.find({ id: id });
  }

  async postAnime(createAnimeDto: CreateAnimeDto): Promise<object> {
    return this.createAnime.create(createAnimeDto);
  }

  async update(id: string, updateAnimeDto: UpdateAnimeDto): Promise<object> {
    return this.updateAnime.update({ id, updateData: updateAnimeDto });
  }

  async delete(id: string): Promise<string> {
    return this.deleteAnime.delete(id);
  }
}


// create-anime.ts
@Injectable()
export class CreateAnimes {
  constructor(
    @InjectRepository(Anime) private animeRepository: Repository<Anime>,
    private connection: Connection,
  ) {}

  public async create(createAnimeDto: CreateAnimeDto): Promise<object> {
    const { tags, genres, ...createAnimeFields } = createAnimeDto;

    return await this.connection.transaction<object>(async manager => {
      const insertStage = await manager
        .createQueryBuilder()
        .insert()
        .into('anime')
        .values(createAnimeFields)
        .execute();

      if (tags)
        await manager
          .createQueryBuilder()
          .relation('anime', 'tags')
          .of(insertStage.identifiers[0].id)
          .add(tags);

      if (genres)
        await manager
          .createQueryBuilder()
          .relation('anime', 'genres')
          .of(insertStage.identifiers[0].id)
          .add(genres);

      return { id: insertStage.identifiers[0].id };
    });
  }
}

`;

export const nestModule = `
// xxxx.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([Anime])],
  controllers: [AnimesController],
  providers: [
    AnimesService,
    SearchAnime,
    CreateAnimes,
    UpdateAnimes,
    DeleteAnimes,
  ],
})
export class AnimesModule {}

`;

export const nestController = `
// xxxx.controller.ts
@Controller('animes')
export class AnimesController {
  constructor(private animeService: AnimesService) {}

  @Get()
  getAnimes(@Query() searchAnimeDto: SearchAnimeDto): Promise<Anime[]> {
    return this.animeService.getAnimes(searchAnimeDto);
  }

  @Get(':id')
  getAnime(@Param('id') id: number): Promise<Anime[]> {
    return this.animeService.getAnime(id);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Post()
  postAnime(@Body() createAnimeDto: CreateAnimeDto): Promise<object> {
    return this.animeService.postAnime(createAnimeDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimeDto: UpdateAnimeDto,
  ): Promise<object> {
    return this.animeService.update(id, updateAnimeDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<string> {
    return this.animeService.delete(id);
  }
}

`;

export const nestProvider = `
// xxxx.service.ts
@Injectable()
export class AnimesService {
  constructor(
    private searchAnime: SearchAnime,
    private createAnime: CreateAnimes,
    private updateAnime: UpdateAnimes,
    private deleteAnime: DeleteAnimes,
  ) {}

  getAnimes(searchAnimeDto: SearchAnimeDto): Promise<Anime[]> {
    return this.searchAnime.find(searchAnimeDto);
  }

  getAnime(id: number): Promise<Anime[]> {
    return this.searchAnime.find({ id: id });
  }

  async postAnime(createAnimeDto: CreateAnimeDto): Promise<object> {
    return this.createAnime.create(createAnimeDto);
  }

  async update(id: string, updateAnimeDto: UpdateAnimeDto): Promise<object> {
    return this.updateAnime.update({ id, updateData: updateAnimeDto });
  }

  async delete(id: string): Promise<string> {
    return this.deleteAnime.delete(id);
  }
}


// searchService.ts
@Injectable()
export class SearchAnime {
  constructor(
    @InjectRepository(Anime) private animeRepository: Repository<Anime>,
  ) {}

  public find(searchAnimeDto: SearchAnimeDto): Promise<Anime[]> {
    const {
      id,
      romajiTitle,
      englishTitle,
      nativeTitle,
      avgScore,
      popularity,
      studioId,
      tags,
      genres,
    } = searchAnimeDto;

    const searchQuery = this.animeRepository
      .createQueryBuilder('anime')
      .leftJoinAndSelect('anime.studio', 'studio');

    if (id) searchQuery.where(\`anime.id = :id\`, { id: id });
    if (romajiTitle)
      searchQuery.andWhere(\`anime.romajiTitle = :romajiTitle\`, {
        romajiTitle: romajiTitle,
      });
    if (englishTitle)
      searchQuery.andWhere(\`anime.englishTitle = :englishTitle\`, {
        englishTitle: englishTitle,
      });
    if (nativeTitle)
      searchQuery.andWhere(\`anime.nativeTitle = :nativeTitle\`, {
        nativeTitle: nativeTitle,
      });
    if (avgScore)
      searchQuery.andWhere(\`anime.avgScore >= :avgScore\`, {
        avgScore: avgScore,
      });
    if (popularity)
      searchQuery.andWhere(\`anime.popularity >= :popularity\`, {
        popularity: popularity,
      });
    if (studioId)
      searchQuery.andWhere(\`anime.studioId = :studioId\`, {
        studioId: studioId,
      });
    if (tags)
      searchQuery
        .innerJoinAndSelect('anime.tags', 'tags')
        .andWhere(\`tags.id IN (:...tags)\`, { tags: tags });
    if (genres)
      searchQuery
        .innerJoinAndSelect('anime.genres', 'genres')
        .andWhere(\`genres.id IN (:...genres)\`, { genres: genres });

    return searchQuery.getMany();
  }
}

`;

export const nestDto = `
// xxxx.dto.ts
export class CreateAnimeDto {
  @IsString()
  romajiTitle: string;

  @IsString()
  englishTitle: string;

  @IsString()
  nativeTitle: string;

  @IsString()
  description: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsNumber()
  nbEpisodes: number;

  @IsString()
  trailer: string;

  @IsString()
  @IsOptional()
  xLargeCover?: string;

  @IsString()
  @IsOptional()
  largeCover?: string;

  @IsString()
  @IsOptional()
  mediumCover?: string;

  @IsNumber()
  avgScore: number;

  @IsNumber()
  popularity: number;

  @IsNumber()
  studioId: number;

  @IsString({ each: true })
  tags?: string[];

  @IsString({ each: true })
  genres?: string[];
}

`;

export const nestGenericCrud = `
// genericServiceCreator.ts
export interface IGenericServiceOrchestrator<REPO, CREATE_DTO, UPDATE_DTO> {
  findOneOrchestration: (id: number) => Promise<REPO[]>;
  postOrchestration: (dto: CREATE_DTO) => Promise<object>;
  putOrchestration: (id: number, dto: UPDATE_DTO) => Promise<object>;
  deleteOrchestration: (id: number) => Promise<string>;
}

export type TSOFactory = <REPO, CREATE_DTO, UPDATE_DTO>(
  repository: Type<REPO>,
) => Type<IGenericServiceOrchestrator<REPO, CREATE_DTO, UPDATE_DTO>>;

export const GenericServiceOrchestratorFactory: TSOFactory = repository => {
  class GenericServiceOrchestrator<REPO, CREATE_DTO, UPDATE_DTO> {
    @InjectRepository(repository) private repository: Repository<REPO>;

    @Inject() private createService: GenericCreate<REPO, CREATE_DTO>;
    @Inject() private updateService: GenericUpdate<REPO, UPDATE_DTO>;
    @Inject() private deleteService: GenericDelete<REPO>;
    @Inject() private searchService: GenericSearch<REPO>;

    findOneOrchestration(id: number): Promise<REPO[]> {
      return this.searchService.find(this.repository, id);
    }

    async postOrchestration(createDto): Promise<object> {
      return this.createService.create(this.repository, createDto);
    }

    async putOrchestration(id, updateDto): Promise<object> {
      return this.updateService.update(this.repository, id, updateDto);
    }

    async deleteOrchestration(id): Promise<string> {
      return this.deleteService.delete(this.repository, id);
    }
  }

  return GenericServiceOrchestrator;
};


// mainService.ts
@Injectable()
export class CharactersService extends GenericServiceOrchestratorFactory<
  Character,
  CreateCharacterDto,
  UpdateCharacterDto
>(Character) {
  constructor(private searchCharacterProvider: SearchCharacters) {
    super();
  }

  getCharacters(searchCharacterDto: SearchCharacterDto): Promise<Character[]> {
    return this.searchCharacterProvider.find(searchCharacterDto);
  }
}

`;

export const nestAuth = `
// authService.ts
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { userId: user.id, admin: user.admin, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}


// adminGuard.ts
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { admin } = context.switchToHttp().getRequest().user;
    return admin;
  }
}


// guardedController.ts
@Controller('animes')
export class AnimesController {
  constructor(private animeService: AnimesService) {}

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Post()
  postAnime(@Body() createAnimeDto: CreateAnimeDto): Promise<object> {
    return this.animeService.postAnime(createAnimeDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimeDto: UpdateAnimeDto,
  ): Promise<object> {
    return this.animeService.update(id, updateAnimeDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<string> {
    return this.animeService.delete(id);
  }
}

`;
