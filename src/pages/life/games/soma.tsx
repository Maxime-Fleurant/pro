import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Soma"
      directorWiki="https://www.wikiwand.com/en/Soma_(video_game)"
      films={[
        {
          title: 'Frictional Games',
          desc: (
            <span>
              Soma (stylized as SOMA) is a survival horror video game developed
              and published by Frictional Games. The game was released on 22
              September 2015 for Microsoft Windows, OS X, Linux, PlayStation 4
              and on 1 December 2017 on Xbox One.
              <br />
              <br />
              Soma is a survival horror video game played from a first-person
              perspective. The player will encounter a number of creatures,
              which each embody an aspect of the game's themes. Soma primarily
              utilizes elements of psychological horror instead of conventional
              scares found in most video games within the genre. Throughout the
              game, the player will find a large array of clues, such as notes
              and audio tapes, which builds atmosphere and furthers the plot.
              Similar to most titles by Frictional Games, the player progresses
              through puzzle-solving, exploration, and the use of stealth; the
              player may die if they fail to avoid monsters, although two years
              after the initial release, a "Safe Mode" has been added that keeps
              the monsters but stops them from killing the player.
            </span>
          ),
          screen1: '/img/game/soma/screen1.jpg',
          screen2: '/img/game/soma/screen2.png',
          videoId: 'BZTfi1jv-EE',
          cover: '/img/game/soma/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
