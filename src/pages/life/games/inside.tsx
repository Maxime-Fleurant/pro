import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Inside"
      directorWiki="https://www.wikiwand.com/en/Inside_(video_game)"
      films={[
        {
          title: 'Playdead',
          desc: (
            <span>
              Inside (stylized as INSIDE) is a puzzle-platformer adventure game
              developed and published by Playdead in 2016 for PlayStation 4,
              Xbox One and Microsoft Windows. The game was released for iOS in
              December 2017 and Nintendo Switch in June 2018. The player
              controls a boy in a dystopic world, solving environmental puzzles
              and avoiding death. It is the spiritual successor to Playdead's
              2010 game Limbo, and features similar 2.5D gameplay.
              <br />
              <br />
              Inside is a puzzle platformer. The player character is an unnamed
              boy who explores a surreal and mostly monochromatic environment
              presented as a 2.5D platform game. The game is dark, with color
              used sparingly to highlight both the player and certain parts of
              the environment. The game is also mostly silent, with the
              exception of occasional musical cues, the boy's vocals, dogs
              barking, equipment and sound effects. The player controls the boy
              who walks, runs, swims, climbs, and uses objects to overcome
              obstacles and progress in the game. The boy gains the ability to
              control bodies to complete certain puzzles, a mechanic that IGN's
              Marty Sliva compared to a similar mechanic in The Swapper.[13] At
              various points in the game, the player may discover hidden rooms
              containing glowing orbs. If all the orbs are deactivated during a
              playthrough, the player unlocks the game's alternate ending.
            </span>
          ),
          screen1: '/img/game/inside/screen1.png',
          screen2: '/img/game/inside/screen2.png',
          videoId: 'yDm6PAgNohU',
          cover: '/img/game/inside/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
