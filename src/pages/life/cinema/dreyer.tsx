import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Carl Theodor Dreyer"
      directorWiki="https://www.wikiwand.com/en/Carl_Theodor_Dreyer"
      films={[
        {
          title: 'The Passion of Joan of Arc',
          desc: (
            <span>
              The Passion of Joan of Arc (French: La Passion de Jeanne d'Arc) is
              a 1928 silent French historical film based on the actual record of
              the trial of Joan of Arc. The film was directed by Carl Theodor
              Dreyer and stars Renée Jeanne Falconetti as Joan. It is widely
              regarded as a landmark of cinema, especially for its production,
              Dreyer's direction and Falconetti's performance, which is often
              listed as one of the finest in cinema history. The film summarizes
              the time that Joan of Arc was a captive of England, depicting her
              trial and execution.
              <br />
              <br />
              Danish film director Dreyer was invited to make a film in France
              by the Société Générale des Films and chose to make a film about
              Joan of Arc due to her renewed popularity in France. Dreyer spent
              over a year researching Joan of Arc and the transcripts of her
              trial before writing the script. Dreyer cast stage actress
              Falconetti as Joan in her only major film role. Falconetti's
              performance and devotion to the role during filming have become
              legendary among film scholars. The film was shot on one huge
              concrete set modeled on medieval architecture in order to
              realistically portray the Rouen prison. The film is known for its
              cinematography and use of close-ups. Dreyer also didn't allow the
              actors to wear make-up and used lighting designs that made the
              actors look more grotesque.
            </span>
          ),
          screen1: '/img/cinema/dreyer/arc/screen1.jpg',
          screen2: '/img/cinema/dreyer/arc/screen2.png',
          videoId: 'IQAchMdy__8',
          cover: '/img/cinema/dreyer/arc/cover.jpg',
        },
        {
          title: 'Ordet',
          desc: (
            <span>
              Ordet , is a 1955 Danish drama film, directed by Carl Theodor
              Dreyer. It is based on a play by Kaj Munk, a Danish Lutheran
              priest, first performed in 1932. The film won the Golden Lion at
              the 16th Venice International Film Festival, and was the only film
              by Dreyer to be both a critical and financial success.
              <br />
              <br />
              The film centers around the Borgen family in rural Denmark during
              the autumn of 1925. The devout widower Morten, patriarch of the
              family, prominent member of the community, and patron of the local
              parish church, has three sons. Mikkel, the eldest, who has no
              faith, is happily married to the pious Inger, who is pregnant with
              their third child. Johannes, who went insane studying Søren
              Kierkegaard, believes himself to be Jesus Christ and wanders the
              farm condemning the age's lack of faith, including that of his
              family and the modern-minded new pastor of the village. The
              youngest son, Anders, is lovesick for the daughter of the leader
              of a local Inner Mission sect.
            </span>
          ),
          screen1: '/img/cinema/dreyer/ordet/screen1.jpg',
          screen2: '/img/cinema/dreyer/ordet/screen2.jpeg',
          videoId: 'mhbv-eLJURM',
          cover: '/img/cinema/dreyer/ordet/cover.jpg',
        },

        {
          title: 'Gertrud',
          desc: (
            <span>
              Gertrud is a 1964 Danish drama film directed by Carl Theodor
              Dreyer; it is based on the 1906 play of the same name by Hjalmar
              Söderberg. The title role of Gertrud Kanning is played by Nina
              Pens Rode, with Bendt Rothe as her husband, Gustav Kanning, and
              Baard Owe as her lover, Erland Jansson. Gertrud was Dreyer's final
              film. It is notable for its many long takes, one of which is a
              nearly ten-minute take of Gertrud and her ex-lover, Gabriel,
              talking about their pasts. The film opened to divided responses
              but is now considered one of Dreyer's major works.
              <br />
              <br />
              Gertrud, a former opera singer in Stockholm in the early 20th
              century, is married to the lawyer and politician Gustav Kanning.
              Gertrud tells her husband that he has become more in love with his
              career and status than with her. She also tells him that she has
              met another man who loves her more than anything else, and that
              she therefore prefers him to her husband and wants a divorce.
            </span>
          ),
          screen1: '/img/cinema/dreyer/gertrud/screen1.jpg',
          screen2: '/img/cinema/dreyer/gertrud/screen2.jpg',
          videoId: 'D7vmXtcQsmA',
          cover: '/img/cinema/dreyer/gertrud/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
