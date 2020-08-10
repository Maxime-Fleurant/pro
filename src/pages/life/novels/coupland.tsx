import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Douglas Coupland"
      directorWiki="https://www.wikiwand.com/en/Douglas_Coupland"
      films={[
        {
          title: 'Generation X: Tales for an Accelerated Culture',
          desc: (
            <span>
              Generation X: Tales for an Accelerated Culture is the first novel
              by Douglas Coupland, published by St. Martin's Press in 1991. The
              novel popularized the term Generation X, and is a framed
              narrative, in which a group of youths exchange heartfelt stories
              about themselves and fantastical stories of their creation.
              <br />
              <br />
              Generation X is a framed narrative, like Chaucer's The Canterbury
              Tales or The Decameron by Boccaccio. The framing story is that of
              three friends—Dag, Claire, and the narrator, Andy—are living
              together in the Coachella Valley in southern California. The tales
              are told by the various characters in the novel, which is arranged
              into three parts. Each chapter is separately titled rather than
              numbered, with titles such as "I Am Not a Target Market" and
              "Adventure Without Risk Is Disneyland". The novel was set circa
              1990, in the then-rapidly growing and economic
              booming-turned-into-depressed communities of Palm Springs and the
              Inland Empire region. Some characters were born and raised in Los
              Angeles and suburban Orange County.
            </span>
          ),
          cover: '/img/books/coupland/ge.jpg',
        },

        {
          title: 'All Families Are Psychotic',
          desc: (
            <span>
              All Families Are Psychotic is the seventh novel by Douglas
              Coupland, published in 2001. The novel is the fictional story of
              the dysfunctional Drummond family and their adventures on a trip
              to see their daughter's space shuttle launch.
              <br />
              <br />
              The novel is the tale of the Drummond family from Vancouver
              gathering together to watch Sarah Drummond's space shuttle blast
              off at the Kennedy Space Center. The Drummonds are a group of
              misfits with a wide array of personal foibles and intricacies. The
              novel's plot is the tale of events that reunite the Drummond
              family after many years of estrangement. Several plot points of
              the book include geriatric HIV, armed robbery, death in Walt
              Disney World, pharmaceutical drug lords, black market baby sales,
              Daytona Beach, and suicide attempts. Early in the book the men of
              the family travel to nearby Walt Disney World where they receive a
              package destined for the Bahamas containing a letter written by
              Prince William stolen from Princess Diana's casket. The men start
              to travel to the Bahamas to deliver their package, but everything
              and anything happens to them on the way.
            </span>
          ),
          cover: '/img/books/coupland/psy.jpg',
        },
      ]}
    />
  );
};

export default King;
