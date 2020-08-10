import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Alain Resnais"
      directorWiki="https://www.wikiwand.com/en/Alain_Resnais"
      films={[
        {
          title: 'Hiroshima mon amour',
          desc: (
            <span>
              Hiroshima mon amour is a 1959 French New Wave romantic drama film
              directed by French film director Alain Resnais, with a screenplay
              by Marguerite Duras. It's Resnais' first feature-length work. It
              is the documentation of an intensely personal conversation between
              a French-Japanese couple about memory and forgetfulness. It was a
              major catalyst for the Left Bank Cinema, making use of miniature
              flashbacks to create a nonlinear storyline. It brought
              international attention to the new movement in French cinema,
              along with films like Breathless and The 400 Blows. The film
              features Resnais' innovative use of brief flashbacks sequences to
              suggest a flash of memories. The movie is widely considered to be
              one of the influential movies of the French New Wave. In 2012,
              director Roy Andersson chose it as one of the greatest movies of
              all time.
              <br />
              <br />
              Hiroshima mon amour concerns a series of conversations (or one
              enormous conversation) over a 36-hour long period between a French
              actress (Emmanuelle Riva), referred to as Her, and a Japanese
              architect (Eiji Okada), referred to as Him. They have had a brief
              relationship and are now separating. The two debate memory and
              forgetfulness as She prepares to depart, comparing failed
              relationships with the bombing of Hiroshima and the perspectives
              of people inside and outside the incidents. The early part of the
              film recounts, in the style of a documentary but narrated by the
              so far unidentified characters, the effects of the Hiroshima bomb
              on August 6, 1945, in particular the loss of hair and the complete
              anonymity of the remains of some victims. He had been conscripted
              into the Imperial Japanese Army, and his family was in Hiroshima
              on that day.
            </span>
          ),
          screen1: '/img/cinema/resnais/amour/screen1.png',
          screen2: '/img/cinema/resnais/amour/screen2.jpg',
          videoId: 'CLts830aLlw',
          cover: '/img/cinema/resnais/amour/cover.jpg',
        },
        {
          title: 'Last Year at Marienbad',
          desc: (
            <span>
              L'Année dernière à Marienbad (released in the US as Last Year at
              Marienbad and in the UK as Last Year in Marienbad) is a 1961
              French-Italian Left Bank film directed by Alain Resnais from a
              screenplay by Alain Robbe-Grillet.
              <br />
              <br />
              Set in a palace in a park that has been converted into a luxury
              hotel, it stars Delphine Seyrig and Giorgio Albertazzi as a woman
              and a man who may have met the year before and may have
              contemplated or started an affair, with Sacha Pitoëff as a second
              man who may be the woman's husband. The characters are unnamed.
              The film is famous for its enigmatic narrative structure, in which
              time and space are fluid, with no certainty over what is happening
              to the characters, what they are remembering, and what they are
              imagining. Its dreamlike nature has both fascinated and baffled
              viewers; many have hailed the work as a masterpiece, although
              others have found it incomprehensible.
            </span>
          ),
          screen1: '/img/cinema/resnais/mar/screen1.jpg',
          screen2: '/img/cinema/resnais/mar/screen2.jpeg',
          videoId: 'p3Tvl1Fuxt8',
          cover: '/img/cinema/resnais/mar/cover.png',
        },
      ]}
    />
  );
};

export default Carax;
