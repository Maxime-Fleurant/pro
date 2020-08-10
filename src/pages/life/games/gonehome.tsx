import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Gone Home"
      directorWiki="https://www.wikiwand.com/en/Gone_Home"
      films={[
        {
          title: 'The Fullbright Company',
          desc: (
            <span>
              Gone Home is a first-person exploration video game developed and
              published by The Fullbright Company. Gone Home was first released
              for Microsoft Windows, OS X, and Linux computers in August 2013,
              followed by console releases for the PlayStation 4 and Xbox One in
              January 2016, the Nintendo Switch in September 2018, and iOS in
              December 2018.
              <br />
              <br />
              Set in the year 1995, Gone Home puts the player in the role of a
              young woman returning from overseas to her rural Oregon family
              home to find her family currently absent and the house empty,
              leaving her to piece together recent events. Gone Home does not
              feature much interactivity, but instead has the player explore the
              house at their own pace and determine what has transpired by
              examining items, journals, and other items left around the various
              rooms. The Fullbright team, having had previously worked on
              BioShock 2: Minerva's Den, took concepts and ideas from that game
              to craft an exploration game to engage the player into uncovering
              the narration by non-linear progression in their searching of the
              house, while keeping the project manageable for their small team.
            </span>
          ),
          screen1: '/img/game/gone/screen1.jpg',
          screen2: '/img/game/gone/screen2.jpg',
          videoId: 'DMDaMK-9Tzc',
          cover: '/img/game/gone/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
