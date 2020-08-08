import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Éric Rohmer"
      directorWiki="https://www.wikiwand.com/en/%C3%89ric_Rohmer"
      films={[
        {
          title: 'La Collectionneuse',
          desc: (
            <span>
              La Collectionneuse (The Collector) is a 1967 film directed by Éric
              Rohmer. The third entry in his Six Moral Tales series, it is his
              first film in colour. Set on the south coast of France in August,
              it portrays the shifting relationships between four very different
              characters who, as in the comedies of Marivaux, play games of love
              and chance. The girl, who seduces two of the men and is resisted
              by the third, is called the collectionneuse.
            </span>
          ),
          screen1: '/img/cinema/rohmer/collec/screen1.jpg',
          screen2: '/img/cinema/rohmer/collec/screen2.jpg',
          videoId: 'HMcPo-S1v-k',
          cover: '/img/cinema/rohmer/collec/cover.jpg',
          coverRatio: 1.3,
        },
        {
          title: 'The Green Ray',
          desc: (
            <span>
              The Green Ray (French: Le Rayon vert) is a 1986 film by Éric
              Rohmer. It was released as The Green Ray in the UK and as Summer
              in North America, but is not part of Rohmer's Four Seasons series.
              Rather, it is the fifth film of his Comedies and Proverbs. The
              film was inspired by the novel of the same name by Jules Verne. It
              was shot in France on 16mm film and much of the dialogue is
              improvised.
            </span>
          ),
          screen1: '/img/cinema/rohmer/rayon/screen1.jpg',
          screen2: '/img/cinema/rohmer/rayon/screen2.jpg',

          cover: '/img/cinema/rohmer/rayon/cover.jpg',
          videoId: 'D7mPj2AkFfI',
          coverRatio: 1.3,
        },
        {
          title: 'Full Moon in Paris',
          desc: (
            <span>
              Full Moon in Paris (French: Les nuits de la pleine lune) is a 1984
              French film directed and written by Éric Rohmer. The film stars
              Pascale Ogier, Tchéky Karyo and Fabrice Luchini. The score is by
              Elli et Jacno.
            </span>
          ),
          screen1: '/img/cinema/rohmer/lune/screen1.jpeg',
          screen2: '/img/cinema/rohmer/lune/screen2.jpeg',

          cover: '/img/cinema/rohmer/lune/cover.jpg',
          videoId: '947EZoZ10aQ',
          coverRatio: 1.3,
        },
      ]}
    />
  );
};

export default Carax;
