import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Return of the Obra Dinn"
      directorWiki="https://www.wikiwand.com/en/Return_of_the_Obra_Dinn"
      films={[
        {
          title: 'Lucas Pope',
          desc: (
            <span>
              Return of the Obra Dinn is a puzzle video game created by Lucas
              Pope. It was his second commercial game, following 2013's Papers,
              Please, and was released for macOS and Microsoft Windows in
              October 2018, and with ports for the Nintendo Switch, PlayStation
              4, and Xbox One releasing a year later.
              <br />
              <br />
              Return of the Obra Dinn is played as an insurance inspector for
              the East India Company in 1807. The fictional Obra Dinn, a ghost
              ship missing for five years, has suddenly reappeared with all
              hands missing or dead. The player is sent to board the ship and
              perform an appraisal, identifying all sixty crew members,
              determining their causes of death, and when applicable, naming
              their killer. This is accomplished through the use of a "Memento
              Mortem", a stopwatch that transports the user to a corpse's moment
              of death. The game, played from the first-person view, uses a
              "1-bit" monochromatic graphical style inspired by games on early
              Macintosh computers.
            </span>
          ),
          screen1: '/img/game/obra/screen1.png',
          screen2: '/img/game/obra/screen2.jpeg',
          videoId: 'ILolesm8kFY',
          cover: '/img/game/obra/cover.png',
        },
      ]}
    />
  );
};

export default Carax;
