import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Abel Ferrara "
      directorWiki="https://www.wikiwand.com/en/Abel_Ferrara"
      films={[
        {
          title: 'Bad Lieutenant',
          desc: (
            <span>
              Bad Lieutenant is a 1992 American neo-noir crime drama film
              directed by Abel Ferrara. The film stars Harvey Keitel as the
              titular "bad lieutenant" as well as Victor Argo and Paul Calderón.
              The screenplay was co-written by Ferrara with actor-writer Paul
              Calderón and actress-model Zoë Lund, both of whom appear in the
              film. John.
              <br />
              <br />
              After dropping off his two young sons at Catholic school, an
              unnamed NYPD police lieutenant (Harvey Keitel) uses cocaine and
              drives to the scene of a double murder in The Bronx. The
              Lieutenant finds a drug dealer and gives him a bag of drugs from a
              crime scene, smoking crack during the exchange; the dealer
              promises to give him the money he makes from selling the drugs in
              a few days. At an apartment, the Lieutenant gets drunk and engages
              in a threesome with two women. Meanwhile, a nun is raped inside a
              church by two young hoodlums.
            </span>
          ),
          screen1: '/img/cinema/ferrara/bad/screen1.jpg',
          screen2: '/img/cinema/ferrara/bad/screen2.jpg',
          videoId: 'oFvGeMDW7bw',
          cover: '/img/cinema/ferrara/bad/cover.png',
        },
        {
          title: 'New Rose Hotel',
          desc: (
            <span>
              New Rose Hotel is a 1998 American cyberpunk erotic drama film
              co-written and directed by Abel Ferrara and starring Christopher
              Walken, Willem Dafoe and Asia Argento. It is based on William
              Gibson's story of the same name.
              <br />
              <br />
              Fox (Walken) and X (Dafoe) are corporate extraction specialists,
              half headhunters, half kidnappers, who specialize in helping R&D
              scientists relocate from corporations who would rather see them
              dead than working for their competitors. Fox is obsessed with one
              Hiroshi (Yoshitaka Amano) a paradigm-shattering super-genius who
              is currently working for Maas, the corporation (Gibson employs the
              pre-World War II term zaibatsu) who crippled him. To that end, Fox
              and X employ Sandii (Argento), a "Shinjuku-girl", or small-time
              hustler/call girl, to help "persuade" Hiroshi to defect to Hosaka,
              another zaibatsu to which Fox is somewhat warmer. Fox is
              responsible for brokering the deal with Hosaka, Sandii for getting
              Hiroshi to fall in love with her and defect to a Hosaka lab in
              Marrakech (Fox and X are based in Tokyo, hence their ability to
              pick up a Shinjuku girl), and X is responsible for teaching Sandii
              how to make Hiroshi melt. Sandii disappears, Fox is killed, and X
              retreats to the safest place he knows, the New Rose Hotel, a
              derelict capsule hotel.
            </span>
          ),
          screen1: '/img/cinema/ferrara/rose/screen1.jpg',
          screen2: '/img/cinema/ferrara/rose/screen2.jpg',
          videoId: 'C1bei1SoGoE',
          cover: '/img/cinema/ferrara/rose/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
