import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="F. Scott Fitzgerald"
      directorWiki="https://www.wikiwand.com/en/F._Scott_Fitzgerald"
      films={[
        {
          title: 'The Corrections',
          desc: (
            <span>
              Tender Is the Night is the fourth and final novel completed by
              American writer F. Scott Fitzgerald. It was first published in
              Scribner's Magazine between January and April 1934 in four issues.
              The title is taken from the poem "Ode to a Nightingale" by John
              Keats.
              <br />
              <br />
              In 1932, Fitzgerald's wife Zelda Sayre Fitzgerald was hospitalized
              for schizophrenia in Baltimore, Maryland. The author rented the La
              Paix estate in the suburb of Towson to be close to his wife; at
              this estate he would begin a novel on the rise and fall of Dick
              Diver, a promising young psychiatrist, and his wife, Nicole, who
              is also one of his patients. It was Fitzgerald's first novel in
              nine years and the last that he would complete. The early 1930s,
              when Fitzgerald conceived the book, were the darkest years of his
              life, and the novel's bleakness reflects his own experiences. The
              novel almost mirrors the events of Fitzgerald and Zelda's lives,
              as characters are pulled out of and put back into mental care, and
              the male figure, Dick Diver, starts his descent into alcoholism.
              While working on the book, Fitzgerald was beset with financial
              difficulties. He borrowed money from both his editor and his agent
              and wrote short stories for commercial magazines.
            </span>
          ),
          cover: '/img/books/fitz/te.jpg',
        },
      ]}
    />
  );
};

export default King;
