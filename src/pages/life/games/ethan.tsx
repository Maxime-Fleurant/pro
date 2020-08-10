import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="The Vanishing of Ethan Carter"
      directorWiki="https://www.wikiwand.com/en/The_Vanishing_of_Ethan_Carter"
      films={[
        {
          title: 'The Astronauts',
          desc: (
            <span>
              The Vanishing of Ethan Carter is a 2014 horror adventure video
              game developed and published by The Astronauts for Microsoft
              Windows, PlayStation 4, Xbox One and Nintendo Switch.
              <br />
              <br />
              The Vanishing of Ethan Carter is set in an open world environment,
              in which the player can roam around and explore at will; in its
              opening the game notes that it "does not hold [the player's]
              hand", and as such features very little by way of explanation to
              the mechanics. To piece together the story, the player must solve
              the deaths of the Carter family. Upon finding a dead body, the
              player can use paranormal abilities in order to recreate the
              events: first it must sense where important objects are located
              and restore the scene to its original state, and then reassemble
              the timeline of events tied to a certain death. The game also
              features additional "stories" that must be fully uncovered for the
              game to receive its final ending; some of these are puzzles,
              others are more akin to a stealth game which cause the game to be
              over if the player fails.
            </span>
          ),
          screen1: '/img/game/ethan/screen1.jpg',
          screen2: '/img/game/ethan/screen2.jpg',
          videoId: 'Zo8izdq7638',
          cover: '/img/game/ethan/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
