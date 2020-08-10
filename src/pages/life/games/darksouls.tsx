import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Dark Souls"
      directorWiki="https://www.wikiwand.com/en/Dark_Souls"
      films={[
        {
          title: 'FromSoftware',
          desc: (
            <span>
              Dark Souls is a 2011 action role-playing game developed by
              FromSoftware and published by Namco Bandai Games. A spiritual
              successor to FromSoftware's Demon's Souls, the game is the second
              instalment in the Souls series. Dark Souls takes place in the
              fictional kingdom of Lordran, where players assume the role of a
              cursed undead character who begins a pilgrimage to discover the
              fate of their kind.
              <br />
              <br />
              Dark Souls is a third-person action role-playing game. A core
              mechanic of the game is exploration. Players are encouraged by the
              game to proceed with caution, learn from past mistakes, or find
              alternative areas to explore. Dark Souls takes place in a large
              and continuous open world environment, connected through a central
              hub area. The player character can travel between areas and
              explore various paths at will, although prerequisites have to be
              met to unlock certain areas.
            </span>
          ),
          screen1: '/img/game/dark/screen1.jpg',
          screen2: '/img/game/dark/screen2.jpg',
          videoId: 'iTnQl9JAef8',
          cover: '/img/game/dark/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
