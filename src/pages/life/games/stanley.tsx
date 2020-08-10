import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="The Stanley Parable"
      directorWiki="https://www.wikiwand.com/en/The_Stanley_Parable"
      films={[
        {
          title: 'Galactic Cafe',
          desc: (
            <span>
              The Stanley Parable is an interactive drama and walking simulator
              designed by American developer Davey Wreden. The game was
              originally released on July 31, 2011 as a free mod for Half-Life
              2. Together with William Pugh, Wreden later released a stand-alone
              remake using the Source engine under the Galactic Cafe studio
              name. The remake included new story elements and upgraded
              graphics. It was announced and approved via Steam Greenlight in
              2012, and was released on October 17, 2013, for Microsoft Windows.
              Later updates to the game added support for OS X on December 19,
              2013, and for Linux on September 9, 2015. A further expanded
              edition entitled The Stanley Parable: Ultra Deluxe is scheduled
              for release in 2020. It will be available on consoles and include
              additional content.
              <br />
              <br />
              The game has no combat or other action-based sequences. Instead,
              the gameplay involves guiding a silent protagonist named Stanley
              alongside narration by British actor Kevan Brighting. As the story
              progresses, the player is confronted with diverging pathways. The
              player may disobey the narrator's suggestions, which will then be
              incorporated into the story. Depending on the choices made, the
              player will encounter different endings before the game restarts.
              The remake recreated many of the original mod's choices while
              adding new areas and story pathways. Both the original mod and the
              remake have received critical praise from journalists. Critics
              praised the game's narrative and commentary on player choice and
              decision-making.
            </span>
          ),
          screen1: '/img/game/stanley/screen1.jpg',
          screen2: '/img/game/stanley/screen2.jpg',
          videoId: 'Z1S796fXtl4',
          cover: '/img/game/stanley/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
