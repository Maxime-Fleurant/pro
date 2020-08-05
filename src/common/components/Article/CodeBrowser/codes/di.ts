export const dimain = `
// container.ts
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


// service.ts
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


`;
