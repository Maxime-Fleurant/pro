import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Undertale"
      directorWiki="https://www.wikiwand.com/en/Undertale"
      films={[
        {
          title: 'Toby Fox',
          desc: (
            <span>
              Undertale is a role-playing video game created by indie developer
              Toby Fox. The player controls a child who has fallen into the
              Underground: a large, secluded region under the surface of the
              Earth, separated by a magic barrier. The player meets various
              monsters during the journey back to the surface. Some monsters
              might engage the player in a fight. The combat system involves the
              player navigating through mini-bullet hell attacks by the
              opponent. They can opt to pacify or subdue monsters in order to
              spare them instead of killing them. These choices affect the game,
              with the dialogue, characters, and story changing based on
              outcomes.
              <br />
              <br />
              Undertale is a role-playing game that uses a top-down perspective.
              In the game, players control a child and complete objectives in
              Players explore an underground world filled with towns and caves,
              and are required to solve numerous puzzles on their journey. The
              underground world is the home of monsters, many of whom challenge
              the player in combat; players decide whether to kill, flee, or
              befriend them. Choices made by the player radically affect the
              plot and general progression of the game, with the player's
              morality acting as the cornerstone for the game's development.
            </span>
          ),
          screen1: '/img/game/under/screen1.png',
          screen2: '/img/game/under/screen2.jpg',
          videoId: '1Hojv0m3TqA',
          cover: '/img/game/under/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
