export const mainDataload = `
// loader.ts
@Service()
export class CharacterLoader {
  constructor(
    @InjectRepository(Character) private characterRepo: Repository<Character>
  ) {}

  batchFindbyAnime: (
    keys: readonly number[]
  ) => Promise<Character[][]> = async (keys) => {
    const characters = await this.characterRepo
      .createQueryBuilder('character')
      .where('character.anime in (:...animeIds)', { animeIds: keys })
      .getMany();

    const formatedCharacters = keys.map((key) =>
      characters.filter((character) => {
        return character.animeId === key;
      })
    );

    return formatedCharacters;
  };

  createLoaders = () => {
    return {
      batchFindbyAnime: new DataLoader<number, Character[]>((keys) =>
        this.batchFindbyAnime(keys)
      ),
    };
  };
}

// fieldResolver.ts
@FieldResolver()
async characters(
  @Root() parent: Anime,
  @Ctx() context: IContext
): Promise<Character[]> {
  const result = await context.loaders.characterLoaders.batchFindbyAnime.load(
    parent.id
  );

  return result;
}

`;
