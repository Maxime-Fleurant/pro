import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Michelangelo Antonioni"
      directorWiki="https://www.wikiwand.com/en/Michelangelo_Antonioni"
      films={[
        {
          title: "L'Avventura",
          desc: (
            <span>
              L'Avventura (English: "The Adventure") is a 1960 Italian film
              directed by Michelangelo Antonioni. Developed from a story by
              Antonioni with co-writers Elio Bartolini and Tonino Guerra, the
              film is about the disappearance of a young woman (Lea Massari)
              during a boating trip in the Mediterranean, and the subsequent
              search for her by her lover (Gabriele Ferzetti) and her best
              friend (Monica Vitti). It was filmed on location in Rome, the
              Aeolian Islands, and Sicily in 1959 under difficult financial and
              physical conditions. The film is noted for its unusual pacing,
              which emphasizes visual composition, mood, and character over
              traditional narrative development.
              <br />
              <br />
              L'Avventura was nominated for numerous awards and was awarded the
              Jury Prize at the 1960 Cannes Film Festival. The film made Monica
              Vitti an international star. According to an Antonioni obituary,
              the film "systematically subverted the filmic codes, practices and
              structures in currency at its time." L'Avventura is the first film
              of a trilogy by Antonioni, followed by La Notte (1961) and
              L'Eclisse (1962).
            </span>
          ),
          screen1: '/img/cinema/antonioni/av/screen1.jpg',
          screen2: '/img/cinema/antonioni/av/screen2.jpg',
          videoId: 'FgkrMniCkOw',
          cover: '/img/cinema/antonioni/av/cover.jpg',
        },
        {
          title: 'La Notte',
          desc: (
            <span>
              La Notte is a 1961 Italian drama film directed by Michelangelo
              Antonioni and starring Marcello Mastroianni, Jeanne Moreau and
              Monica Vitti (with Umberto Eco appearing in a cameo). Filmed on
              location in Milan, the film is the relationship between a
              disillusioned novelist and his frustrated wife as it follows a
              single day and night where they confront their alienation from
              each other and the empty Milan circles they travel. The film
              continues Antonioni's tradition of abandoning traditional
              storytelling in favor of visual composition, mood and character.
              <br />
              <br />
              Giovanni Pontano (Marcello Mastroianni), a distinguished writer
              and his beautiful wife Lidia (Jeanne Moreau), visit their dying
              friend Tommaso Garani (Bernhard Wicki) in a hospital in Milan.
              Giovanni's new book, La stagione (The Season), has just been
              published and Tommaso praises his friend's work. They drink
              champagne but Tommaso is unable to hide his severe pain. Shaken by
              the sight of her dying friend, Lidia leaves saying she'll visit
              tomorrow. Giovanni stays behind and as he leaves his friend's
              room, a sick and uninhibited young woman attempts to seduce him,
              and he goes into her room and reciprocates even though it is clear
              the woman is not in her right mind, until they are interrupted by
              the nurses.
            </span>
          ),
          screen1: '/img/cinema/antonioni/notte/screen1.jpg',
          screen2: '/img/cinema/antonioni/notte/screen2.jpg',
          videoId: 'yEEmVghrypo',
          cover: '/img/cinema/antonioni/notte/cover.jpg',
        },

        {
          title: 'Blow up',
          desc: (
            <span>
              Blowup (sometimes styled as Blow-up or Blow Up) is a 1966 mystery
              thriller film directed by Michelangelo Antonioni and produced by
              Carlo Ponti. It was Antonioni's first entirely English-language
              film, and stars David Hemmings as a London fashion photographer
              who believes he has unwittingly captured a murder on film. The
              film also stars Vanessa Redgrave, Sarah Miles, John Castle, Jane
              Birkin, Tsai Chin, Peter Bowles, and Gillian Hills, as well as
              1960s model Veruschka. The film's plot was inspired by Julio
              Cortázar's short story "Las babas del diablo" (1959). The
              screenplay was by Antonioni and Tonino Guerra, with English
              dialogue by British playwright Edward Bond.[4] The cinematographer
              was Carlo di Palma. The film's non-diegetic music was scored by
              jazz pianist Herbie Hancock, while rock group the Yardbirds also
              feature. The film is set within the mod subculture of 1960s
              Swinging London.
              <br />
              <br />
              The narrative covers a day in the life of a glamorous fashion
              photographer, Thomas (Hemmings), the character's creation being
              inspired by the life of an actual "Swinging London" photographer,
              David Bailey,[10] and contemporaries such as Terence Donovan,
              David Montgomery and John Cowan.
            </span>
          ),
          screen1: '/img/cinema/antonioni/blow/screen1.jpg',
          screen2: '/img/cinema/antonioni/blow/screen2.jpg',
          videoId: 'PRENEOHlcbw',
          cover: '/img/cinema/antonioni/blow/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
