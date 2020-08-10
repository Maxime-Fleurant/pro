import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Divinity: Original Sin II"
      directorWiki="https://www.wikiwand.com/en/Divinity:_Original_Sin_II"
      films={[
        {
          title: 'Larian Studios',
          desc: (
            <span>
              Divinity: Original Sin II is a role-playing video game developed
              and published by Larian Studios. The sequel to 2014's Divinity:
              Original Sin, it was released for Microsoft Windows in September
              2017, for PlayStation 4 and Xbox One in August 2018, for macOS in
              January 2019, and Nintendo Switch in September 2019. The game
              received universal acclaim, with many critics citing it as one of
              the best role-playing games of all time, with praise given to its
              complexity and interactivity. It was also a commercial success,
              selling over a million copies in two months.
              <br />
              <br />
              As with Divinity: Original Sin, players can play solo or with up
              to three others in their party. Several pre-made characters with
              backstories are available to the player. Players are also able to
              create a custom character and choose their stats, race, gender,
              and origin story at the start of the game. Unlike the original
              game, players are also given the possibility to create an undead
              character of one of the available races. They can recruit up to
              three companions to assist them although mods in the Steam
              Workshop exist which increase the maximum number of party
              companions. Companions in your party are fully playable, and will
              potentially have different interactions with the environment and
              NPCs than the player character. Players are able to split up and
              individually control their party members, leading to potentially
              complex battle tactics and role-playing opportunities. The game
              features both on-line and local multiplayer modes, both
              competitive and cooperative. A skill crafting system allows
              players to mix and change their skills. The game also features a
              competitive multiplayer mode, where players are divided into two
              different teams and fight against each other in an arena map.
            </span>
          ),
          screen1: '/img/game/div/screen1.jpg',
          screen2: '/img/game/div/screen2.jpg',
          videoId: '6jVM6R1hdDU',
          cover: '/img/game/div/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
