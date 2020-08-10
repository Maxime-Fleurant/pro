import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Pillars of Eternity"
      directorWiki="https://www.wikiwand.com/en/Pillars_of_Eternity"
      films={[
        {
          title: 'Obsidian Entertainment',
          desc: (
            <span>
              Pillars of Eternity is a role-playing video game developed by
              Obsidian Entertainment and published by Paradox Interactive. It
              was released for Microsoft Windows, OS X, and Linux on March 26,
              2015. The game is a spiritual successor to the Baldur's Gate and
              Icewind Dale series, along with Planescape: Torment. Obsidian
              started a crowdfunding campaign on Kickstarter for it in September
              2012. The campaign raised over US$4 million, which was the highest
              funded video game at the time. The game uses the Unity engine.
              <br />
              <br />
              The game takes place in the fantasy world of Eora, mainly inside
              the nation of Dyrwood. The infants in the Dyrwood are plagued by a
              recent phenomenon in which they become "hollowborn" upon birth,
              meaning they are born with no soul. During the beginning of the
              game, the protagonist experiences an awakening of power due to a
              disastrous supernatural event, discovering they are a "Watcher": a
              person who can see past lives and interact with souls. The
              objective of the game is to find out what caused their awakening
              and how to solve the hollowborn problem.
            </span>
          ),
          screen1: '/img/game/pillars/screen1.jpg',
          screen2: '/img/game/pillars/screen2.jpg',
          videoId: 'zAw4v6JbCBI',
          cover: '/img/game/pillars/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
