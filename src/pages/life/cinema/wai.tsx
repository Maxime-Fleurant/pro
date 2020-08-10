import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Wong Kar-wai"
      directorWiki="https://www.wikiwand.com/en/Wong_Kar-wai"
      films={[
        {
          title: 'Days of Being Wild',
          desc: (
            <span>
              Days of Being Wild is a 1990 Hong Kong drama film directed by Wong
              Kar-wai. The film stars some of the best-known actors and
              actresses in Hong Kong, including Leslie Cheung, Andy Lau, Maggie
              Cheung, Carina Lau, Jacky Cheung and Tony Leung Chiu-wai. Days of
              Being Wild also marks the first collaboration between Wong and
              cinematographer Christopher Doyle, with whom he has since made six
              more films.
              <br />
              <br />
              The movie is set in Hong Kong and the Philippines in 1960–61.
              Yuddy, or 'York' in English (Leslie Cheung), is a playboy in Hong
              Kong and is well known for stealing girls' hearts and breaking
              them. His first lover in the film is Li-zhen (Maggie Cheung), who
              suffers emotional and mental depression as a result of Yuddy's
              wayward attitude. Li-zhen eventually seeks much-needed solace from
              a sympathetic policeman named Tide (Andy Lau). Their near-romance
              is often hinted at but never materializes.
            </span>
          ),
          screen1: '/img/cinema/wai/days/screen1.jpg',
          screen2: '/img/cinema/wai/days/screen2.jpg',
          videoId: '2VLWIx9TwiM',
          cover: '/img/cinema/wai/days/cover.jpg',
        },
        {
          title: 'Chungking Express',
          desc: (
            <span>
              Chungking Express is a 1994 Hong Kong comedy-drama film written
              and directed by Wong Kar-wai. The film consists of two stories
              told in sequence, each about a lovesick Hong Kong policeman
              mulling over his relationship with a woman. The first story stars
              Takeshi Kaneshiro as a cop obsessed with his breakup with a woman
              named May, and his encounter with a mysterious drug smuggler
              (Brigitte Lin). The second stars Tony Leung as a police officer
              roused from his gloom over the loss of his flight attendant
              girlfriend (Valerie Chow) by the attentions of a quirky snack bar
              worker (Faye Wong).
              <br />
              <br />
              "Chungking" in the title refers to Chungking Mansions in Tsim Sha
              Tsui, Hong Kong, where Wong grew up in the 1960s. "Express" refers
              to the food stand Midnight Express, located in Lan Kwai Fong, an
              area in Central, Hong Kong.
            </span>
          ),
          screen1: '/img/cinema/wai/express/screen1.jpeg',
          screen2: '/img/cinema/wai/express/screen2.jpg',
          videoId: 'kTgeMUWBEQ8',
          cover: '/img/cinema/wai/express/cover.jpg',
        },
        {
          title: 'Fallen Angels',
          desc: (
            <span>
              Fallen Angels is a 1995 Hong Kong drama film written and directed
              by Wong Kar-wai, starring Leon Lai, Michelle Reis, Takeshi
              Kaneshiro, Charlie Yeung, and Karen Mok.
              <br />
              <br />
              The movie is composed of two stories that have little to do with
              each other except for a few casual run-ins when some of the
              characters happen to be in the same place at the same time. Both
              stories take place in Hong Kong.
            </span>
          ),
          screen1: '/img/cinema/wai/fallen/screen1.jpg',
          screen2: '/img/cinema/wai/fallen/screen2.jpg',
          videoId: 'dtum6XVH3HI',
          cover: '/img/cinema/wai/fallen/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
