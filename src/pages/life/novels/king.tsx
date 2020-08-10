import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Stephen King"
      directorWiki="https://www.wikiwand.com/en/Stephen_King"
      films={[
        {
          title: 'Pet Sematary',
          desc: (
            <span>
              Pet Sematary is a 1983 horror novel by American writer Stephen
              King. The novel was nominated for a World Fantasy Award for Best
              Novel in 1986, and adapted into two films: one in 1989 and another
              in 2019. In November 2013, PS Publishing released Pet Sematary in
              a limited 30th-anniversary edition.
              <br />
              <br />
              'When Dr. Louis Creed takes a new job and moves his family to the
              idyllic rural town of Ludlow, Maine, this new beginning seems too
              good to be true. Despite Ludlow’s tranquility, an undercurrent of
              danger exists here. <br />
              <br />
              Those trucks on the road outside the Creed’s beautiful old home
              travel by just a little too quickly, for one thing…as is evidenced
              by the makeshift graveyard in the nearby woods where generations
              of children have buried their beloved pets. Then there are the
              warnings to Louis both real and from the depths of his nightmares
              that he should not venture beyond the borders of this little
              graveyard where another burial ground lures with seductive
              promises and ungodly temptations. <br />
              <br />A blood-chilling truth is hidden there—one more terrifying
              than death itself, and hideously more powerful. As Louis is about
              to discover for himself sometimes, dead is better…'
            </span>
          ),
          cover: '/img/books/king/pet.jpg',
        },

        {
          title: 'Carrie',
          desc: (
            <span>
              Carrie is an epistolary horror novel by American author Stephen
              King. It was his first published novel, released on April 5, 1974,
              with a first print-run of 30,000 copies. Set primarily in the
              then-future year of 1979, it revolves around the eponymous Carrie
              White, an unpopular friendless misfit and bullied high-school girl
              from an abusive religious household who uses her newly discovered
              telekinetic powers to exact revenge on those who torment her.
              During the process, she causes one of the worst local disasters
              the town has ever had. King has commented that he finds the work
              to be "raw" and "with a surprising power to hurt and horrify." It
              is one of the most frequently banned books in United States
              schools, because of Carrie’s violence, cursing, underage sex and
              negative view of religion. Much of the book uses newspaper
              clippings, magazine articles, letters, and excerpts from books to
              tell how Carrie destroyed the fictional town of Chamberlain, Maine
              while exacting revenge on her sadistic classmates and her own
              mother Margaret.
              <br />
              <br />
              Carrie White may be picked on by her classmates, but she has a
              gift. She can move things with her mind. Doors lock. Candles fall.
              This is her power and her problem. Then, an act of kindness, as
              spontaneous as the vicious taunts of her classmates, offers Carrie
              a chance to be a normal...until an unexpected cruelty turns her
              gift into a weapon of horror and destruction that no one will ever
              forget.
            </span>
          ),
          cover: '/img/books/king/carrie.jpg',
        },

        {
          title: 'The Long Walk',
          desc: (
            <span>
              The Long Walk is a dystopian horror novel by American writer
              Stephen King, published in 1979, under the pseudonym Richard
              Bachman. It was collected in 1985 in the hardcover omnibus The
              Bachman Books, and has seen several reprints since, as both
              paperback and hardback.
              <br />
              <br />
              In the near future, when America has become a police state, one
              hundred boys are selected to enter an annual contest where the
              winner will be awarded whatever he wants for the rest of his life.
              Among them is sixteen-year-old Ray Garraty, and he knows the
              rules—keep a steady walking pace of four miles per hour without
              stopping. Three warnings and you’re out—permanently.
            </span>
          ),
          cover: '/img/books/king/walk.jpg',
        },
      ]}
    />
  );
};

export default King;
