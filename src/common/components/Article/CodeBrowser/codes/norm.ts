export const normMain = `
// animeModel.ts
@Entity()
export class Anime {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', unique: true })
  romajiTitle: string;

  @Column({ type: 'varchar' })
  englishTitle: string;

  @Column({ type: 'varchar' })
  nativeTitle: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'smallint' })
  nbEpisodes: number;

  @Column({ type: 'varchar' })
  trailer: string;

  @Column({ type: 'varchar', nullable: true })
  xLargeCover: string;

  @Column({ type: 'varchar', nullable: true })
  largeCover: string;

  @Column({ type: 'varchar', nullable: true })
  mediumCover: string;

  @Column({ type: 'smallint' })
  avgScore: number;

  @Column({ type: 'int' })
  popularity: number;

  @Column({ type: 'bigint', nullable: true })
  studioId: number;

  @ManyToOne(
    () => Studio,
    studio => studio.animes,
  )
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @ManyToMany(
    () => Tag,
    tag => tag.animes,
    { nullable: true },
  )
  @JoinTable()
  tags: Tag[];

  @ManyToMany(
    () => Genre,
    genre => genre.animes,
  )
  @JoinTable()
  genres: Tag[];

  @OneToMany(
    () => Review,
    review => review.anime,
  )
  reviews: Review[];

  @OneToMany(
    () => Character,
    character => character.anime,
  )
  characters: Character[];

  @OneToMany(
    () => ExternalLink,
    externalLink => externalLink.animes,
  )
  externalLinks: ExternalLink[];
}


// characterModel.ts
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


// reviewModel.ts
@Entity()
export class Review {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'smallint' })
  score: number;

  @Column({ type: 'text' })
  summary: string;

  @Column({ type: 'text' })
  body: string;

  @Column('bigint', { nullable: false })
  animeId: number;

  @Column('bigint', { nullable: false })
  userId: number;

  @ManyToOne(
    () => User,
    user => user.reviews,
  )
  @JoinColumn({ name: 'userId' })
  users: User[];

  @ManyToOne(
    () => Anime,
    anime => anime.reviews,
  )
  @JoinColumn({ name: 'animeId' })
  anime: Anime[];
}

`;
