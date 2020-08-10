import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="The Witness"
      directorWiki="wikiwand.com/en/The_Witness_(2016_video_game)"
      films={[
        {
          title: 'Thekla, Inc.',
          desc: (
            <span>
              The Witness is a 2016 puzzle video game developed and published by
              Thekla, Inc. Inspired by Myst, the game involves the exploration
              of an open world island filled with natural and man-made
              structures. The player progresses by solving puzzles, which are
              based on interactions with grids presented on panels around the
              island or paths hidden within the environment. The game provides
              no direct instructions for how these puzzles are to be solved,
              requiring the player to identify the meaning of symbols in the
              puzzles. A central design element to the game was how these
              puzzles are presented so that the player can achieve a moment of
              inspiration through trial and error and gain that comprehension
              themselves.
              <br />
              <br />
              The Witness is a first-person puzzle video game. The player, as an
              unnamed character, explores an island with numerous structures and
              natural formations. The island is roughly divided into eleven
              regions, arranged around a mountain that represents the ultimate
              goal for the player. The regions are differentiated from one
              another by changes in vegetation, and the puzzles within each
              region are similar to one another (e.g. their solutions may all
              involve symmetry). Throughout the island are yellow boxes housing
              turrets. These can be activated once the puzzles within the box's
              region have been solved. When activated, the turrets emerge to
              shine a light toward the top of the mountain, indicating that a
              section of the game is complete. Several such turrets need to be
              activated to unlock access to the inside of the mountain and
              ultimately reach the game's final goal. Additional puzzles can be
              discovered if all eleven turrets are activated.
            </span>
          ),
          screen1: '/img/game/wit/screen1.jpg',
          screen2: '/img/game/wit/screen2.jpg',
          videoId: 'ul7kNFD6noU',
          cover: '/img/game/wit/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
