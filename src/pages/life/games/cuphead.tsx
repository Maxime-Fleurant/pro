import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Cuphead"
      directorWiki="https://www.wikiwand.com/en/Cuphead"
      films={[
        {
          title: 'StudioMDHR',
          desc: (
            <span>
              Cuphead is a run and gun video game developed and published by the
              Canadian video game developer StudioMDHR in 2017. The game was
              inspired by the rubber hose style of animation used in cartoons of
              the 1930s, such as the work of Fleischer Studios and Walt Disney
              Animation Studios, and sought to emulate their subversive and
              surrealist qualities.
              <br />
              <br />
              Cuphead features one or two players taking control of animated
              characters Cuphead and his brother Mugman to fight through several
              levels that culminate in boss fights, in order to repay their debt
              to the devil. The game was praised for its art style and noted for
              its challenging difficulty. It was both a critical and commercial
              success, winning several awards and selling over six million
              copies within three years.
            </span>
          ),
          screen1: '/img/game/cup/screen1.jpg',
          screen2: '/img/game/cup/screen2.jpg',
          videoId: 'NN-9SQXoi50',
          cover: '/img/game/cup/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
