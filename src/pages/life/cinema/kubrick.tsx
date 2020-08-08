import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Stanley Kubrick"
      directorWiki="https://www.wikiwand.com/en/Stanley_Kubrick"
      films={[
        {
          title: 'Paths of Glory',
          desc: (
            <span>
              Paths of Glory is a 1957 American anti-war film based on the novel
              of the same name by Humphrey Cobb. Set during World War I, the
              film stars Kirk Douglas as Colonel Dax, the commanding officer of
              French soldiers who refuse to continue a suicidal attack.
            </span>
          ),
          screen1: '/img/cinema/kubrick/glory/screen1.jpg',
          screen2: '/img/cinema/kubrick/glory/screen2.jpg',
          videoId: 'nmDA60X-f_A',
          cover: '/img/cinema/kubrick/glory/cover.jpg',
          coverRatio: 1.24,
        },
        {
          title: 'Lolita',
          desc: (
            <span>
              Lolita is a 1962 comedy-drama film directed by Stanley Kubrick,
              based on the 1955 novel of the same title by Vladimir Nabokov, who
              also wrote a version of the screenplay, though this was not used
              by Kubrick. It follows a middle-aged literature lecturer who
              becomes sexually obsessed with a young adolescent girl.
            </span>
          ),
          screen1: '/img/cinema/kubrick/lolita/screen1.jpg',
          screen2: '/img/cinema/kubrick/lolita/screen2.jpg',
          cover: '/img/cinema/kubrick/lolita/cover.jpg',
          videoId: 'ihZ-aIJj6-g',
          coverRatio: 1.54,
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
          screen1: '/img/cinema/kubrick/glory/screen1.jpeg',
          screen2: '/img/cinema/kubrick/glory/screen2.jpeg',

          cover: '/img/cinema/kubrick/glory/cover.jpg',
          videoId: '947EZoZ10aQ',
        },
      ]}
    />
  );
};

export default Carax;
