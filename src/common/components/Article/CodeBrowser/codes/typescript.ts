export const typescriptMain = `
// type.ts
export type Anime = {
  __typename?: 'Anime';
  bannerImage?: Maybe<Scalars['String']>;
  characters: Array<Maybe<Character>>;
  desciption?: Maybe<Scalars['String']>;
  englishTitle?: Maybe<Scalars['String']>;
  externalLinks: Array<Maybe<ExternalLink>>;
  format: Scalars['String'];
  genres: Array<Maybe<Genre>>;
  id: Scalars['ID'];
  largeCoverImage?: Maybe<Scalars['String']>;
  mediumCoverImage?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  popularity: Scalars['Float'];
  reviews: Array<Maybe<Review>>;
  romajiTitle?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  studio: Studio;
  tags: Array<Maybe<Tag>>;
  trailer: Scalars['String'];
  xLargeCoverImage?: Maybe<Scalars['String']>;
};

export type BaseAnimeInput = {
  bannerImage?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  englishTitle?: Maybe<Scalars['String']>;
  format: Scalars['String'];
  genreIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  largeCoverImage?: Maybe<Scalars['String']>;
  nativeTitle?: Maybe<Scalars['String']>;
  popularity: Scalars['Float'];
  romajiTitle?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  studioId: Scalars['Float'];
  tagIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  trailer: Scalars['String'];
  xLargeCoverImage?: Maybe<Scalars['String']>;
};

`;

export const typeInterface = `
// interface.ts
// TYPE
export interface IArticleHeadContent {
  titleContent: string;
  logo?: JSX.Element;
  desc?: string;
  wiki?: string;
  npm?: string;
  official?: string;
  git?: string;
  detail?: string;
  sub?: boolean;
}

type TArticleHead = FunctionComponent<IArticleHeadContent>;


`;

export const typeGeneric = `
// generic.ts
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


`;

export const typeDecorator = `
// decorator.ts
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

@Authorized(['admin'])
@Mutation(() => Anime)
async removeGenreFromAnime(
  @Arg('animeId') animeId: number,
  @Arg('genreIds', () => [Number]) genreIds: number[]
): Promise<Anime | undefined> {
  await this.animeRepository
    .createQueryBuilder()
    .relation(Anime, 'genres')
    .of(animeId)
    .remove(genreIds);

  return this.animeRepository.findOne(animeId);
}


`;
