import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Terrence Malick"
      directorWiki="https://www.wikiwand.com/en/Terrence_Malick"
      films={[
        {
          title: 'Badlands',
          desc: (
            <span>
              Badlands is a 1973 American neo-noir period crime drama film
              written, produced and directed by Terrence Malick, in his
              directorial debut. Starring Martin Sheen, Sissy Spacek, Warren
              Oates and Ramon Bieri, the story, though fictional, is loosely
              based on the real-life murder spree of Charles Starkweather and
              his girlfriend, Caril Ann Fugate, in 1958, though that basis was
              not acknowledged when the film was released. Like many of Malick's
              films, Badlands is notable for its lyrical photography, and its
              music, which includes pieces by Carl Orff. The film is the
              on-screen debut of Sheen's sons Charlie Sheen and Emilio Estevez,
              as uncredited extras.
              <br />
              <br />
              Badlands is often cited by film critics as one of the greatest and
              most influential films of all time. In 1993, four years after the
              United States National Film Registry was established, it was
              selected for preservation by the Library of Congress for being
              "culturally, historically, or aesthetically significant".
            </span>
          ),
          screen1: '/img/cinema/malick/badlands/screen1.png',
          screen2: '/img/cinema/malick/badlands/screen2.jpg',
          videoId: 'qKykxE7CBbc',
          cover: '/img/cinema/malick/badlands/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
