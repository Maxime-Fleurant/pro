import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="William Faulkner"
      directorWiki="https://www.wikiwand.com/en/William_Faulkner"
      films={[
        {
          title: 'The Sound and the Fury',
          desc: (
            <span>
              The Sound and the Fury is a novel by the American author William
              Faulkner. It employs several narrative styles, including stream of
              consciousness. Published in 1929, The Sound and the Fury was
              Faulkner's fourth novel, and was not immediately successful. In
              1931, however, when Faulkner's sixth novel, Sanctuary, was
              published—a sensationalist story, which Faulkner later said was
              written only for money—The Sound and the Fury also became
              commercially successful, and Faulkner began to receive critical
              attention.
              <br />
              <br />
              The Sound and the Fury is set in Jefferson, Mississippi, in the
              first third of the 20th century. The novel centers on the Compson
              family, former Southern aristocrats who are struggling to deal
              with the dissolution of their family and its reputation. Over the
              course of the 30 years or so related in the novel, the family
              falls into financial ruin, loses its religious faith and the
              respect of the town of Jefferson, and many of them die tragically.
              The novel is separated into four narratives. The first, April 7,
              1928, is written from the perspective of Benjamin "Benjy" Compson,
              an intellectually disabled 33-year-old man. Benjy's section is
              characterized by a highly disjointed narrative style with frequent
              chronological leaps. The second section, June 2, 1910, focuses on
              Quentin Compson, Benjy's older brother, and the events leading up
              to his suicide. This section is written in the stream of
              consciousness style and also contains frequent chronological
              leaps.
            </span>
          ),
          cover: '/img/books/fau/so.jpg',
        },
      ]}
    />
  );
};

export default King;
