import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="David Lynch"
      directorWiki="https://www.wikiwand.com/en/David_Lynch"
      films={[
        {
          title: 'Eraserhead',
          desc: (
            <span>
              Eraserhead is a 1977 American experimental body horror film
              written, directed, produced, and edited by David Lynch. The film's
              score and sound design were also created by Lynch, with pieces by
              a variety of other musicians also featured. Shot in black and
              white, Eraserhead is Lynch's first feature-length effort following
              several short films. Starring Jack Nance, Charlotte Stewart,
              Jeanne Bates, Judith Anna Roberts, Laurel Near, and Jack Fisk, it
              tells the story of a man who is left to care for his grossly
              deformed child in a desolate industrial landscape.
              <br />
              <br />
              Eraserhead was produced with the assistance of the American Film
              Institute (AFI) during Lynch's time studying there. The film
              nonetheless spent several years in principal photography because
              of funding difficulties; donations from Fisk and his wife Sissy
              Spacek kept production afloat. It was shot on several locations
              owned by the AFI in California, including Greystone Mansion and a
              set of disused stables in which Lynch lived. Lynch and sound
              designer Alan Splet spent a year working on the film's audio after
              their studio was soundproofed. The soundtrack features organ music
              by Fats Waller and includes the song "In Heaven", written for the
              film by Peter Ivers.
            </span>
          ),
          screen1: '/img/cinema/lynch/erase/screen1.jpg',
          screen2: '/img/cinema/lynch/erase/screen2.png',
          videoId: 'J0Eq5GtCYdA',
          cover: '/img/cinema/lynch/erase/cover.jpg',
        },
        {
          title: 'Blue Velvet',
          desc: (
            <span>
              Blue Velvet is a 1986 American neo-noir mystery thriller film
              written and directed by David Lynch. Blending psychological horror
              with film noir, the film stars Kyle MacLachlan, Isabella
              Rossellini, Dennis Hopper, and Laura Dern, and is named after
              Bobby Vinton's 1963 song of the same name. The film concerns a
              young college student who, returning home to visit his ill father,
              discovers a severed human ear in a field that leads to his
              uncovering a vast criminal conspiracy and entering a romantic
              relationship with a troubled lounge singer.
              <br />
              <br />
              The screenplay of Blue Velvet had been passed around multiple
              times in the late 1970s and early 1980s, with several major
              studios declining it due to its strong sexual and violent content.
              After the failure of his 1984 film Dune, Lynch made attempts at
              developing a more "personal story", somewhat characteristic of the
              surrealist style displayed in his first film Eraserhead (1977).
              The independent studio De Laurentiis Entertainment Group, owned at
              the time by Italian film producer Dino De Laurentiis, agreed to
              finance and produce the film.
            </span>
          ),
          screen1: '/img/cinema/lynch/blue/screen1.jpg',
          screen2: '/img/cinema/lynch/blue/screen2.jpg',
          cover: '/img/cinema/lynch/blue/cover.jpg',
          videoId: 'k_BybDB_phY',
        },
        {
          title: 'Wild at Heart',
          desc: (
            <span>
              Wild at Heart is a 1990 American black comedy romantic crime film
              written and directed by David Lynch and starring Nicolas Cage,
              Laura Dern, Diane Ladd, Willem Dafoe, Harry Dean Stanton, and
              Isabella Rossellini. It is based on Barry Gifford's 1989 novel of
              the same name. The book and the film concern Sailor Ripley (Cage)
              and Lula Pace Fortune (Dern), a young couple from Cape Fear, North
              Carolina, who go on the run from her domineering mother and the
              gangsters she hires to kill Sailor.
              <br />
              <br />
              Lynch was going to produce but after reading Gifford's book,
              decided to write and direct as well. He did not like the ending of
              the novel and decided to change it to fit his vision of the main
              characters. Wild at Heart is a road movie which includes allusions
              to The Wizard of Oz and Elvis Presley and his movies.
            </span>
          ),
          screen1: '/img/cinema/lynch/wild/screen1.jpg',
          screen2: '/img/cinema/lynch/wild/screen2.jpg',

          cover: '/img/cinema/lynch/wild/cover.jpg',
          videoId: 'QCQwumNQL9E',
        },

        {
          title: 'Mulholland Dr.',
          desc: (
            <span>
              Mulholland Drive (stylized as Mulholland Dr.) is a 2001 surreal
              neo-noir mystery film written and directed by David Lynch and
              starring Naomi Watts, Laura Harring, Justin Theroux, Ann Miller,
              Mark Pellegrino and Robert Forster. It tells the story of an
              aspiring actress named Betty Elms (Watts), newly arrived in Los
              Angeles, who meets and befriends an amnesiac woman (Harring)
              recovering from a car accident. The story follows several other
              vignettes and characters, including a Hollywood film director
              (Theroux).
              <br />
              <br />
              The American-French co-production was originally conceived as a
              television pilot, and a large portion of the film was shot in 1999
              with Lynch's plan to keep it open-ended for a potential series.
              After viewing Lynch's cut, however, television executives rejected
              it. Lynch then provided an ending to the project, making it a
              feature film. The half-pilot, half-feature result, along with
              Lynch's characteristic style, has left the general meaning of the
              film's events open to interpretation. Lynch has declined to offer
              an explanation of his intentions for the narrative, leaving
              audiences, critics, and cast members to speculate on what
              transpires. He gave the film the tagline "A love story in the city
              of dreams".
            </span>
          ),
          screen1: '/img/cinema/lynch/drive/screen1.png',
          screen2: '/img/cinema/lynch/drive/screen2.jpg',

          cover: '/img/cinema/lynch/drive/cover.jpg',
          videoId: 'jbZJ487oJlY',
        },
      ]}
    />
  );
};

export default Carax;
