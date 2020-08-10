import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Outer Wilds"
      directorWiki="https://www.wikiwand.com/en/Outer_Wilds"
      films={[
        {
          title: '	Mobius Digital',
          desc: (
            <span>
              Outer Wilds is a 2019 action-adventure game developed by Mobius
              Digital and published by Annapurna Interactive for Microsoft
              Windows, Xbox One, and PlayStation 4. The game features the player
              character exploring a solar system stuck in a 22-minute time loop,
              which ends as the sun goes supernova. The player continually
              repeats this cycle by gaining knowledge, which is retained, that
              can help them on later loops. The game received critical acclaim
              and won several awards, including for game of the year.
              <br />
              <br />
              Outer Wilds features an unnamed astronaut player character
              exploring a solar system that is stuck in a 22 minute time loop,
              resetting after the sun goes supernova. Thus, the player is
              encouraged to learn why by following secrets of an extinct alien
              race known as the Nomai, who previously visited the solar system
              thousands of years ago.[2] For example, in order to use the ship,
              the player must guide the astronaut to a local observatory, where
              the launch codes are located. Once the player has done this once,
              that information will not change in subsequent ones, which allows
              the player to bypass the observatory and immediately launch the
              ship with the known codes.
            </span>
          ),
          screen1: '/img/game/outer/screen1.jpg',
          screen2: '/img/game/outer/screen2.jpeg',
          videoId: 'd6LGnVCL1_A',
          cover: '/img/game/outer/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
