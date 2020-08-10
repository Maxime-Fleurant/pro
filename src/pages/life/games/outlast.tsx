import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Outlast"
      directorWiki="https://www.wikiwand.com/en/Dark_Souls"
      films={[
        {
          title: 'Red Barrels',
          desc: (
            <span>
              Outlast is a first-person survival horror video game developed and
              published by Red Barrels. The game revolves around a freelance
              investigative journalist, Miles Upshur, who decides to investigate
              a remote psychiatric hospital named Mount Massive Asylum, located
              deep in the mountains of Lake County, Colorado.
              <br />
              <br />
              In Outlast, the player assumes the role of investigative
              journalist Miles Upshur, as he navigates a dilapidated psychiatric
              hospital in Leadville, Colorado that is overrun by homicidal
              patients. The game is played from a first-person perspective and
              features some stealth gameplay mechanics. The player can walk,
              run, crouch, jump, climb ladders and vault over objects. Unlike
              most games, however, the player doesn't have a visible health bar
              on the screen and is unable to attack enemies. The player must
              instead rely on stealth tactics such as hiding in lockers,
              sneaking past enemies, staying in the shadows and hiding behind or
              under things in order to survive. Alternatively, the player can
              attempt to outrun their pursuer. If the player dies, the game will
              reset to the most recent checkpoint.
            </span>
          ),
          screen1: '/img/game/outlast/screen1.jpg',
          screen2: '/img/game/outlast/screen2.jpg',
          videoId: 'MKrUZ36IVAY',
          cover: '/img/game/outlast/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
