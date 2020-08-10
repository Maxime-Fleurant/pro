import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Andrei Tarkovsky"
      directorWiki="https://www.wikiwand.com/en/Andrei_Tarkovsky"
      films={[
        {
          title: 'Mirror',
          desc: (
            <span>
              Mirror (Russian: Зеркало, romanized: Zerkalo; known in the United
              States as The Mirror) is a 1975 Russian art film directed by
              Andrei Tarkovsky. It is loosely autobiographical, unconventionally
              structured, and incorporates poems composed and read by the
              director's father, Arseny Tarkovsky. The film features Margarita
              Terekhova, Ignat Daniltsev, Alla Demidova, Anatoly Solonitsyn,
              Tarkovsky's wife Larisa Tarkovskaya and his mother Maria
              Vishnyakova. Innokenty Smoktunovsky provides voiceover and Eduard
              Artemyev the incidental music and sound effects.
              <br />
              <br />
              Mirror is structured in the form of a nonlinear narrative, with
              its main concept dating back to 1964 and undergoing multiple
              scripted versions by Tarkovsky and Aleksandr Misharin. It unfolds
              around memories recalled by a dying poet of key moments in his
              life and in Soviet culture. The film combines contemporary scenes
              with childhood memories, dreams, and newsreel footage. Its
              cinematography slips between color, black-and-white, and sepia.
              The film's loose flow of visually oneiric images has been compared
              with the stream of consciousness technique in modernist
              literature.
            </span>
          ),
          screen1: '/img/cinema/tarkovsky/mirror/screen1.jpg',
          screen2: '/img/cinema/tarkovsky/mirror/screen2.jpg',
          videoId: 'vMI_GlZIgRw',
          cover: '/img/cinema/tarkovsky/mirror/cover.jpg',
        },
        {
          title: 'Stalker',
          desc: (
            <span>
              Stalker (Russian: Сталкер, IPA: [ˈstaɫkʲɪr]) is a 1979 Soviet
              science fiction art film directed by Andrei Tarkovsky with a
              screenplay written by Boris and Arkady Strugatsky, loosely based
              on their 1972 novel Roadside Picnic. The film combines elements of
              science fiction with dramatic philosophical and psychological
              themes.
              <br />
              <br />
              The film tells the story of an expedition led by a figure known as
              the "Stalker" (Alexander Kaidanovsky), who takes his two clients—a
              melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a
              professor (Nikolai Grinko) seeking scientific discovery—to a
              mysterious restricted site known simply as the "Zone", where there
              supposedly exists a room which grants a person's innermost
              desires. The trio travel through unnerving areas filled with the
              debris of modern society while engaging in many arguments.
            </span>
          ),
          screen1: '/img/cinema/tarkovsky/stalker/screen1.jpg',
          screen2: '/img/cinema/tarkovsky/stalker/screen2.jpg',
          videoId: 'sMGA2wMuiP4',
          cover: '/img/cinema/tarkovsky/stalker/cover.jpg',
        },

        {
          title: 'The Sacrifice',
          desc: (
            <span>
              The Sacrifice (Swedish: Offret) is a 1986 drama film written and
              directed by Andrei Tarkovsky. Starring Erland Josephson, it
              centers on a middle-aged intellectual who attempts to bargain with
              God to stop an impending nuclear holocaust. The Sacrifice was
              Tarkovsky's third film as a Soviet expatriate, after Nostalghia
              and the documentary Voyage in Time, and was also his last, as he
              died shortly after its completion. Like 1972's Solaris, it won the
              Grand Prix at the Cannes Film Festival.
              <br />
              <br />
              The film opens on the birthday of Alexander (Erland Josephson), an
              actor who gave up the stage to work as a journalist, critic, and
              lecturer on aesthetics. He lives in a beautiful house with his
              actress wife Adelaide (Susan Fleetwood), stepdaughter Marta
              (Filippa Franzén), and young son, "Little Man", who is temporarily
              mute due to a throat operation. Alexander and Little Man plant a
              tree by the seaside, when Alexander's friend Otto, a part-time
              postman, delivers a birthday card to him. When Otto asks,
              Alexander mentions that his relationship with God is
              "nonexistent". After Otto leaves, Adelaide and Victor, a medical
              doctor and a close family friend who performed Little Man's
              operation, arrive at the scene and offer to take Alexander and
              Little Man home in Victor's car. However, Alexander prefers to
              stay behind and talk to his son. In his monologue, Alexander first
              recounts how he and Adelaide found this lovely house near the sea
              by accident, and how they fell in love with the house and
              surroundings, but then enters a bitter tirade against the state of
              modern man. As Tarkovsky wrote, Alexander is weary of "the
              pressures of change, the discord in his family, and his
              instinctive sense of the threat posed by the relentless march of
              technology"; in fact, he has "grown to hate the emptiness of human
              speech".
            </span>
          ),
          screen1: '/img/cinema/tarkovsky/sacrifice/screen1.jpg',
          screen2: '/img/cinema/tarkovsky/sacrifice/screen2.jpg',
          videoId: 'ODJb2-PLu7Y',
          cover: '/img/cinema/tarkovsky/sacrifice/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
