import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Dan Simmons"
      directorWiki="https://www.wikiwand.com/en/Dan_Simmons"
      films={[
        {
          title: 'Hyperion',
          desc: (
            <span>
              Hyperion is a Hugo Award-winning 1989 science fiction novel by
              American writer Dan Simmons. It is the first book of his Hyperion
              Cantos. The plot of the novel features multiple time-lines and
              characters. It follows a similar structure to The Canterbury Tales
              by Geoffrey Chaucer. The next book in the series was The Fall of
              Hyperion, published in 1990.
              <br />
              <br />
              In the 29th century, the Hegemony of Man comprises thousands of
              planets connected by farcaster portals. The Hegemony maintains an
              uneasy alliance with the TechnoCore, a civilisation of AIs.
              Modified humans known as Ousters live in space stations between
              stars and are engaged in conflict with the Hegemony. Numerous
              "Outback" planets have no farcasters and cannot be accessed
              without incurring significant time dilation. One of these planets
              is Hyperion, home to structures known as the Time Tombs, which are
              moving backwards in time and guarded by a legendary creature known
              as the Shrike. On the eve of an Ouster invasion of Hyperion, a
              final pilgrimage to the Time Tombs has been organized. The
              pilgrims decide that they will each tell their tale of how they
              were chosen for the pilgrimage.
            </span>
          ),
          cover: '/img/books/simmons/hy.jpg',
        },

        {
          title: 'Carrion Comfort',
          desc: (
            <span>
              Carrion Comfort is a science fiction/horror novel by American
              writer Dan Simmons, published in 1989 in hard cover by Dark
              Harvest and in 1990 in paperback by Warner Books. It won the Bram
              Stoker Award, the Locus Poll Award for Best Horror Novel, and the
              August Derleth Award for Best Novel. It is based on a novella of
              the same title, published in 1983 in the magazine Omni. The first
              half of the novella makes up chapter 1 of the novel, while the
              second half forms chapter 3.
              <br />
              <br />
              The novel portrays a tiny fraction of humanity that has immense
              psychic powers, which they refer to as "The Ability". These powers
              can be used to completely control people from a distance to commit
              any physical action, including murder. This Ability has been used
              throughout history to have a direct or indirect influence, via the
              perceived charisma of world leaders or the actions of more covert
              individuals, on everything from individual senseless murders to
              the Holocaust. Across multiple timelines, the novel mostly follows
              two groups of amoral people in 1980, some with aspirations of
              world domination, as their clashing involves a group of
              investigators. These non-psychic investigators follow a series of
              bizarre murders to the conclusion that a cabal of powerful
              psychics must be stopped.
            </span>
          ),
          cover: '/img/books/simmons/ec.jpg',
        },
      ]}
    />
  );
};

export default King;
