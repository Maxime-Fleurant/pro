import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="George Orwell"
      directorWiki="https://www.wikiwand.com/en/George_Orwell"
      films={[
        {
          title: 'Nineteen Eighty-Four',
          desc: (
            <span>
              Nineteen Eighty-Four: A Novel, often published as 1984, is a
              dystopian novel by English novelist George Orwell. It was
              published on 8 June 1949 by Secker & Warburg as Orwell's ninth and
              final book completed in his lifetime. Thematically, Nineteen
              Eighty-Four centres on the consequences of government over-reach,
              totalitarianism, mass surveillance, and repressive regimentation
              of all persons and behaviours within society. More broadly, it
              examines the role of truth and facts within politics and their
              manipulation.
              <br />
              <br />
              To Winston Smith, a young man who works in the Ministry of Truth
              (Minitru for short), come two people who transform this life
              completely. One is Julia, whom he meets after she hands him a slip
              reading, "I love you." The other is O'Brien, who tells him, "We
              shall meet in the place where there is no darkness." The way in
              which Winston is betrayed by the one and, against his own desires
              and instincts, ultimately betrays the other, makes a story of
              mounting drama and suspense.
            </span>
          ),
          cover: '/img/books/orwell/nine.jpg',
        },
      ]}
    />
  );
};

export default King;
