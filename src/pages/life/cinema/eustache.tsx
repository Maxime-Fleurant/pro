import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Jean Eustache"
      directorWiki="https://www.wikiwand.com/en/Jean_Eustache"
      films={[
        {
          title: 'The Mother and the Whore',
          desc: (
            <span>
              The Mother and the Whore (French: La Maman et la Putain) is a 1973
              French film directed by Jean Eustache and starring Jean-Pierre
              Léaud, Bernadette Lafont and Françoise Lebrun. An examination of
              the relationships between three characters in a love triangle, it
              was Eustache's first feature film and is considered his
              masterpiece. Eustache wrote the screenplay drawing inspiration
              from his own relationships, and shot the film from May to July
              1972.
              <br />
              <br />
              In Paris, Alexandre, an unemployed young man with memories of the
              May 1968 events in France, attempts to persuade his former love,
              Gilberte, to marry him. Gilberte opts to instead marry another
              man. Alexandre is involved with a live-in girlfriend called Marie,
              and is interested in films such as The Working Class Goes to
              Heaven. One day, after an unsuccessful reconciliation with
              Gilberte at the highly popular Les Deux Magots café, he meets
              Veronika, a Polish French twenty-something nurse. In the midst of
              the sexual revolution, Veronika is highly promiscuous, and begins
              to make advances on Alexandre.
            </span>
          ),
          screen1: '/img/cinema/eustache/mom/screen1.jpg',
          screen2: '/img/cinema/eustache/mom/screen2.jpg',
          videoId: 'EipNl2lNuYA',
          cover: '/img/cinema/eustache/mom/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
