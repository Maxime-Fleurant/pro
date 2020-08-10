import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Jim Jarmusch"
      directorWiki="https://www.wikiwand.com/en/Jim_Jarmusch"
      films={[
        {
          title: 'Permanent Vacation',
          desc: (
            <span>
              Permanent Vacation is a 1980 film directed, written and produced
              by Jim Jarmusch. It was the director's first release, and was shot
              on 16 mm film shortly after he dropped out of film school.
              <br />
              <br />
              The main character, an alienated troubled hipster (Chris Parker),
              wanders around a dingy New York atmosphere and is confronted by a
              number of intriguing characters as he ponders the questions of
              life and searches for a better place at Adventures Unlimited in
              Milton, FL.
            </span>
          ),
          screen1: '/img/cinema/jim/vac/screen1.jpg',
          screen2: '/img/cinema/jim/vac/screen2.jpg',
          videoId: 'As6xGoF0uzM',
          cover: '/img/cinema/jim/vac/cover.jpg',
        },
        {
          title: 'Stranger Than Paradise',
          desc: (
            <span>
              Stranger Than Paradise is a 1984 American black-and-white
              absurdist/deadpan comedy film, written, directed, and co-edited by
              Jim Jarmusch and starring jazz musician John Lurie, former Sonic
              Youth drummer-turned-actor Richard Edson, and Hungarian-born
              actress and violinist Eszter Balint. The film features a
              minimalist plot in which the main character, Willie, has a cousin
              from Hungary named Eva. Eva stays with him for ten days before
              going to Cleveland. Willie and his friend Eddie eventually go to
              Cleveland to visit Eva, and the three then take a trip to Florida.
              This film is shot entirely in single long takes with no standard
              coverage.
              <br />
              <br />
              The film is a three-act story about Willie (John Lurie), who lives
              in Brooklyn, and his interactions with the two other main
              characters, his cousin Eva (Eszter Balint) and friend Eddie
              (Richard Edson).
            </span>
          ),
          screen1: '/img/cinema/jim/stranger/screen1.jpg',
          screen2: '/img/cinema/jim/stranger/screen2.jpg',
          cover: '/img/cinema/jim/stranger/cover.jpg',
          videoId: 'MwefGellnhk',
        },
      ]}
    />
  );
};

export default Carax;
