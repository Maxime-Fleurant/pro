import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Don DeLillo"
      directorWiki="https://www.wikiwand.com/en/Don_DeLillo"
      films={[
        {
          title: 'Americana',
          desc: (
            <span>
              Americana (1971) is American novelist Don DeLillo's first book.
              DeLillo conceived the novel while traveling through Maine with
              friends. In 1989, DeLillo revised the text, excising several pages
              from the original.
              <br />
              <br />
              The book is narrated by David Bell, a former television executive
              turned avant-garde filmmaker. Beginning with an exploration of the
              malaise of the modern corporate man, the novel turns into an
              interrogation of film's power to misrepresent reality as Bell
              creates an autobiographical road-movie. The story addresses roots
              of American pathology and introduces themes DeLillo expanded upon
              in The Names (1982), White Noise (1985), and Libra (1988). The
              first half of the novel can be viewed as a critique of the
              corporate world while the second half articulates the fears and
              dilemmas of contemporary American life.
            </span>
          ),
          cover: '/img/books/delillo/am.jpg',
        },

        {
          title: 'White Noise',
          desc: (
            <span>
              White Noise is the eighth novel by Don DeLillo, published by
              Viking Press in 1985. It won the U.S. National Book Award for
              Fiction. White Noise is an example of postmodern literature. It is
              widely considered DeLillo's "breakout" work and brought him to the
              attention of a much larger audience. Time included the novel in
              its list of "Best English-language Novels from 1923 to 2005".
              DeLillo originally wanted to call the book Panasonic, but the
              Panasonic Corporation objected.
              <br />
              <br />
              Set at a bucolic mid-western college known only as
              The-College-on-the-Hill, White Noise follows a year in the life of
              Jack Gladney, a professor who has made his name by pioneering the
              field of Hitler studies (though he has not taken German lessons
              until this year). He has been married five times to four women and
              rears a brood of children and stepchildren (Heinrich, Denise,
              Steffie, Wilder) with his current wife, Babette. Jack and Babette
              are both extremely afraid of death; they frequently wonder which
              of them will be the first to die. The first part of White Noise,
              called "Waves and Radiation", is a chronicle of contemporary
              family life combined with academic satire.
            </span>
          ),
          cover: '/img/books/delillo/wh.jpg',
        },
      ]}
    />
  );
};

export default King;
