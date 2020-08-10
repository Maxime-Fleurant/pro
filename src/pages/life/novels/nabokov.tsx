import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Vladimir Nabokov"
      directorWiki="https://www.wikiwand.com/en/Vladimir_Nabokov"
      films={[
        {
          title: 'Lolita',
          desc: (
            <span>
              Lolita is a 1955 novel written by Russian-American novelist
              Vladimir Nabokov. The novel is notable for its controversial
              subject: the protagonist and unreliable narrator, a middle-aged
              literature professor under the pseudonym Humbert Humbert, is
              obsessed with a 12-year-old girl, Dolores Haze, with whom he
              becomes sexually involved after he becomes her stepfather.
              "Lolita" is his private nickname for Dolores. The novel was
              originally written in English and first published in Paris in 1955
              by Olympia Press. Later it was translated into Russian by Nabokov
              himself and published in New York City in 1967 by Phaedra
              Publishers.
              <br />
              <br />
              Humbert Humbert - scholar, aesthete and romantic - has fallen
              completely and utterly in love with Lolita Haze, his landlady's
              gum-snapping, silky skinned twelve-year-old daughter. Reluctantly
              agreeing to marry Mrs Haze just to be close to Lolita, Humbert
              suffers greatly in the pursuit of romance; but when Lo herself
              starts looking for attention elsewhere, he will carry her off on a
              desperate cross-country misadventure, all in the name of Love.
              Hilarious, flamboyant, heart-breaking and full of ingenious word
              play, Lolita is an immaculate, unforgettable masterpiece of
              obsession, delusion and lust.
            </span>
          ),
          cover: '/img/books/nabo/lolita.jpg',
        },
      ]}
    />
  );
};

export default King;
