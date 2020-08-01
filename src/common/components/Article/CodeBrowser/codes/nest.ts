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
