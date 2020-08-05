export const typeDi = `
// diLoader.ts
@Service()
export class Loaders {
  constructor(
    private characterLoader: CharacterLoader,
    private studioLoader: StudioLoader,
    private animeLoaders: AnimeLoaders,
    private reviewLoaders: ReviewLoaders,
    private externalLinkLoaders: ExternalLinkLoaders
  ) {}

  createLoaders() {
    return {
      characterLoaders: this.characterLoader.createLoaders(),
      studioLoaders: this.studioLoader.createLoaders(),
      animeLoaders: this.animeLoaders.createLoaders(),
      reviewLoaders: this.reviewLoaders.createLoaders(),
      externalLinkLoaders: this.externalLinkLoaders.createLoaders(),
    };
  }
}


// someServiceLoaded.ts
@Resolver(() => Review)
export class ReviewResolver extends createGenericResolver('Review', Review) {
  constructor(
    @InjectRepository(Review) private reviewRepo: Repository<Review>
  ) {
    super();
  }

  @Mutation(() => Review)
  async createReview(
    @Arg('input') { summary, score, body, animeId, userId }: CreateReviewInput
  ): Promise<Review> {
    const newReview = this.reviewRepo.create({
      summary,
      score,
      body,
      anime: { id: animeId },
      user: { id: userId },
    });

    const savedReview = await this.reviewRepo.save(newReview);

    return savedReview;
  }

  @Authorized()
  @Mutation(() => Review)
  async updateReview(
    @Arg('id') id: number,
    @Arg('input') input: UpdateReviewInput,
    @Ctx() context: IContext
  ): Promise<Review | undefined> {
    const review = await this.reviewRepo.findOne(id);

    if (!review) {
      return undefined;
    }

    if (context.user?.id !== review.userId) {
      return undefined;
    }

    await this.reviewRepo.update(id, { ...input });

    const updatedReview = (await this.reviewRepo.findOne(id)) as Review;

    return updatedReview;
  }
}

`;
