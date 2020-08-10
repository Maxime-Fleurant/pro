import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Wim Wenders"
      directorWiki="https://www.wikiwand.com/en/Wim_Wenders"
      films={[
        {
          title: 'Alice in the Cities',
          desc: (
            <span>
              Alice in the Cities (German: Alice in den Städten) is a 1974
              German road movie directed by Wim Wenders. It is the first part of
              Wenders' "Road Movie trilogy", also which includes The Wrong Move
              (1975) and Kings of the Road (1976). The film is shot in black and
              white by Robby Müller with several long scenes without dialogue.
              The film's theme foreshadows Wenders' later film Paris, Texas.
              <br />
              <br />
              West German writer Philip Winter has missed his publisher's
              deadline for writing an article about the United States.
              Attempting to book a flight from New York City back to West
              Germany, he meets a German woman, Lisa, and her young daughter,
              Alice, who are also trying to return home. After Lisa leaves Alice
              temporarily in Philip's care, she disappears to deal with a
              relationship she has recently terminated. Philip and Alice take a
              flight to Amsterdam on the expectation that they will meet Lisa
              there, only to find she never arrived at the airport.
            </span>
          ),
          screen1: '/img/cinema/wenders/alice/screen1.jpeg',
          screen2: '/img/cinema/wenders/alice/screen2.jpg',
          videoId: 'lrpiVZmh4xQ',
          cover: '/img/cinema/wenders/alice/cover.jpg',
        },
        {
          title: 'Paris, Texas',
          desc: (
            <span>
              Paris, Texas is a 1984 road movie directed by Wim Wenders and
              starring Harry Dean Stanton, Dean Stockwell, Nastassja Kinski, and
              Hunter Carson. The screenplay was written by L. M. Kit Carson and
              playwright Sam Shepard, while the musical score was composed by Ry
              Cooder. The film was a co-production between companies in France
              and West Germany, and was shot in the United States by Robby
              Müller.
              <br />
              <br />
              The plot focuses on a vagabond named Travis (Stanton) who, after
              mysteriously wandering out of the desert in a dissociative fugue,
              attempts to reunite with his brother (Stockwell) and
              seven-year-old son (Carson). After reconnecting with his son,
              Travis and the boy end up embarking on a voyage through the
              American Southwest to track down Travis' long-missing wife
              (Kinski).
              <br />
              <br />
            </span>
          ),
          screen1: '/img/cinema/wenders/paris/screen1.jpg',
          screen2: '/img/cinema/wenders/paris/screen2.jpg',
          videoId: '9e590FeeGCM',
          cover: '/img/cinema/wenders/paris/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
