import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Nier: Automata"
      directorWiki="https://www.wikiwand.com/en/Divinity:_Original_Sin_II"
      films={[
        {
          title: '	PlatinumGames',
          desc: (
            <span>
              Nier: Automata is a 2017 action role-playing video game developed
              by PlatinumGames and published by Square Enix. It is a sequel to
              the 2010 video game Nier, itself a spin-off and sequel of the
              Drakengard series. The game originally released for the
              PlayStation 4 and Windows via Steam, with an Xbox One port being
              published the following year.
              <br />
              <br />
              Set during a proxy war between alien-created machines and
              human-crafted androids, the story follows the trials of a combat
              android, her companion, and a fugitive prototype. The story
              requires multiple playthroughs, each unlocking additional story
              elements. Gameplay combines role-playing elements with
              action-based hack and slash combat, and features switches between
              video game genres similar to that of Nier with elements ranging
              from shoot 'em up to text adventure.
            </span>
          ),
          screen1: '/img/game/nier/screen1.jpg',
          screen2: '/img/game/nier/screen2.jpg',
          videoId: 'wJxNhJ8fjFk',
          cover: '/img/game/nier/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
