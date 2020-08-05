export const postgresMain = `
// model.ts
@Entity()
export class Character {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  nativeName: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  nativeImage: string;

  @Column({ type: 'varchar', nullable: true })
  largeImage: string;

  @Column({ type: 'varchar', nullable: true })
  mediumImage: string;

  @Column({ type: 'bigint' })
  animeId: number;

  @ManyToOne(
    () => Anime,
    anime => anime.characters,
  )
  @JoinColumn({ name: 'animeId' })
  anime: Anime;
}

`;

export const mainKnex = `
// migration.js
exports.up = knex => {
  return knex.schema
    .createTable('studios', table => {
      table.bigIncrements('id').primary();
      table
        .string('name')
        .notNullable()
        .unique();
    })
    .createTable('animes', table => {
      table
        .bigIncrements('id')
        .unique()
        .primary();
      table.string('romajiTitle');
      table.string('englishTitle');
      table.string('nativeTitle');
      table.text('description');
      table.string('trailer');
      table.string('xLargeCover');
      table.string('largeCover');
      table.string('mediumCover');
      table.integer('popularity');
      table.integer('nbEpisodes');
      table.date('startDate');
      table.date('endDate');
      table.specificType('avgScore', 'smallInt');
      table
        .bigInteger('studioId')
        .references('id')
        .inTable('public.studios')
        .onDelete('SET NULL');
    })
    .createTable('themes', table => {
      table.bigIncrements('id').primary();
      table.string('name').unique();
    })
    .createTable('genres', table => {
      table.bigIncrements('id').primary();
      table.string('name').unique();
    })
    .createTable('users', table => {
      table.bigIncrements('id').primary();
      table.string('email').unique();
      table.string('password');
    })
    .createTable('externalLinks', table => {
      table.bigIncrements('id').primary();
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .notNullable()
        .onDelete('CASCADE');
      table.string('site').notNullable();
      table.string('url').notNullable();
    })
    .createTable('reviews', table => {
      table.bigIncrements('id').primary();
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table.specificType('score', 'smallInt');
      table.text('body');
      table.text('summary');
    })
    .createTable('characters', table => {
      table.bigIncrements('id').primary();
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table.string('firstName');
      table.string('lastName');
      table.string('nativeName');
      table.string('largeImage');
      table.string('mediumImage');
      table.text('description');
    })
    .createTable('tags', table => {
      table.bigIncrements('id').primary();
      table.string('name').unique();
      table.text('description');
      table
        .bigInteger('themeId')
        .references('id')
        .inTable('themes')
        .onDelete('SET NULL');
    })
    .createTable('animes_tags', table => {
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table
        .bigInteger('tagId')
        .references('id')
        .inTable('tags')
        .onDelete('CASCADE');
    })
    .createTable('animes_genres', table => {
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table
        .bigInteger('genreId')
        .references('id')
        .inTable('genres')
        .onDelete('CASCADE');
    });
};

`;

export const objectionMain = `
// model.ts
class Anime extends Model {
  static get tableName() {
    return 'animes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        romajiTitle: { type: 'string' },
        englishTitle: { type: 'string' },
        nativeTitle: { type: 'string' },
        description: { type: 'string' },
        startDate: { type: 'date' },
        endDate: { type: 'date' },
        nbEpisodes: { type: 'number' },
        trailer: { type: 'string' },
        xLargeCover: { type: 'string' },
        largeCover: { type: 'string' },
        mediumCover: { type: 'string' },
        popularity: { type: 'number' },
        avgScore: { type: 'number' },
        studioId: { type: 'string' },
      },
      required: ['romajiTitle', 'description'],
    };
  }

  static get relationMappings() {
    return {
      genres: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'genre'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_genres.animeId',
            to: 'animes_genres.genreId',
          },
          to: 'genres.id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'tag'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_tags.animeId',
            to: 'animes_tags.tagId',
          },
          to: 'tags.id',
        },
      },
      studio: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'studio'),
        join: {
          from: 'animes.studioId',
          to: 'studios.id',
        },
      },
      externalLinks: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'externalLink'),
        join: {
          from: 'animes.id',
          to: 'externalLinks.animeId',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'review'),
        join: {
          from: 'animes.id',
          to: 'reviews.animeId',
        },
      },
      characters: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'character'),
        join: {
          from: 'animes.id',
          to: 'characters.animeId',
        },
      },
    };
  }
}

export default Anime;

`;

export const typeormMain = `
// entity.ts
@ObjectType()
@Entity()
export class Anime extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  englishTitle?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  romajiTitle?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  nativeTitle?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  desciption?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  bannerImage?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  xLargeCoverImage?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  largeCoverImage?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  mediumCoverImage?: string;

  @Field()
  @Column()
  trailer: string;

  @Field()
  @Column()
  status: string;

  @Field()
  @Column()
  format: string;

  @Field()
  @Column()
  popularity: number;

  @Field(() => Studio)
  @ManyToOne(() => Studio, (studio) => studio.animes, {
    onDelete: 'SET NULL',
    nullable: false,
  })
  studio: Studio;

  @RelationId((anime: Anime) => anime.studio)
  studioId: number;

  @Field(() => [Character], { nullable: 'items' })
  @OneToMany(() => Character, (character) => character.anime, { cascade: true })
  characters: Character[];

  @Field(() => [Review], { nullable: 'items' })
  @OneToMany(() => Review, (review) => review.anime, { cascade: true })
  reviews: Review[];

  @Field(() => [ExternalLink], { nullable: 'items' })
  @OneToMany(() => ExternalLink, (externalLink) => externalLink.anime, {
    cascade: true,
  })
  externalLinks: ExternalLink[];

  @Field(() => [Genre], { nullable: 'items' })
  @ManyToMany(() => Genre, (genre) => genre.animes)
  @JoinTable()
  genres: Genre[];

  @Field(() => [Tag], { nullable: 'items' })
  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}

`;
