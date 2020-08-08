import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Leos Carax"
      directorWiki="https://www.wikiwand.com/en/Leos_Carax"
      films={[
        {
          title: 'The lovers on the bridge',
          desc: (
            <span>
              {' '}
              Set around the Pont Neuf, Paris's oldest bridge, while it was
              closed for repairs, Les Amants du Pont-Neuf depicts a love story
              between two young vagrants Alex (Denis Lavant) and Michèle
              (Juliette Binoche).
              <br />
              <br />
              Alex is a street performer addicted to alcohol and sedatives and
              Michèle a painter driven to a life on the streets because of a
              failed relationship and a disease which is slowly destroying her
              sight. <br />
              <br /> The film portrays their harsh existence living on the
              bridge with Hans (Klaus Michael Grüber), an older vagrant. As her
              vision deteriorates Michèle becomes increasingly dependent on
              Alex. When a possible treatment becomes available, Michèle's
              family use street posters and radio appeals to trace her.
              <br />
              <br /> Fearing that she will leave him if she receives the
              treatment, Alex tries to keep Michèle from becoming aware of her
              family's attempts to find her. The streets, skies and waterways of
              Paris are used as a backdrop for the story in a series of
              set-pieces set during the French Bicentennial celebrations in
              1989.
            </span>
          ),
          screen1: '/img/cinema/carax/screen1.jpg',
          screen2: '/img/cinema/carax/screen2.jpg',
          screen3: '/img/cinema/carax/screen3.jpg',
          videoId: 'tgxUjVBj2ic',
        },
        {
          title: 'The lovers on the qs',
          desc: (
            <span>
              {' '}
              Set around the Pont Neuf, Paris's oldest bridge, while it was
              closed for repairs, Les Amants du Pont-Neuf depicts a love story
              between two young vagrants Alex (Denis Lavant) and Michèle
              (Juliette Binoche).
              <br />
              <br />
              Alex is a street performer addicted to alcohol and sedatives and
              Michèle a painter driven to a life on the streets because of a
              failed relationship and a disease which is slowly destroying her
              sight. <br />
              <br /> The film portrays their harsh existence living on the
              bridge with Hans (Klaus Michael Grüber), an older vagrant. As her
              vision deteriorates Michèle becomes increasingly dependent on
              Alex. When a possible treatment becomes available, Michèle's
              family use street posters and radio appeals to trace her.
              <br />
              <br /> Fearing that she will leave him if she receives the
              treatment, Alex tries to keep Michèle from becoming aware of her
              family's attempts to find her. The streets, skies and waterways of
              Paris are used as a backdrop for the story in a series of
              set-pieces set during the French Bicentennial celebrations in
              1989.
            </span>
          ),
          screen1: '/img/cinema/carax/screen1.jpg',
          screen2: '/img/cinema/carax/screen2.jpg',
          screen3: '/img/cinema/carax/screen3.jpg',
          videoId: 'tgxUjVBj2ic',
        },
      ]}
    />
  );
};

export default Carax;
