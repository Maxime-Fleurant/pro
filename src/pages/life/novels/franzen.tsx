import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Jonathan Franzen"
      directorWiki="https://www.wikiwand.com/en/Jonathan_Franzen"
      films={[
        {
          title: 'The Corrections',
          desc: (
            <span>
              The Corrections is a 2001 novel by American author Jonathan
              Franzen. It revolves around the troubles of an elderly Midwestern
              couple and their three adult children, tracing their lives from
              the mid-20th century to "one last Christmas" together near the
              turn of the millennium. The novel was awarded the National Book
              Award in 2001 and the James Tait Black Memorial Prize in 2002.
              <br />
              <br />
              The Corrections was published to wide acclaim from literary
              critics. The sense of anxiety and apprehension found in its
              characters has been compared with those of Americans following the
              September 11 terrorist attacks, despite the novel's release having
              preceded that event by ten days. Many have interpreted The
              Corrections as having prescient insight into the major concerns of
              post-9/11 American life, and it has been listed in multiple
              publications as one of the greatest novels of the 21st century.
            </span>
          ),
          cover: '/img/books/franzen/co.jpg',
        },
      ]}
    />
  );
};

export default King;
