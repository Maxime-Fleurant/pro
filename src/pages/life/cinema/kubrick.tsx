import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Stanley Kubrick"
      directorWiki="https://www.wikiwand.com/en/Stanley_Kubrick"
      films={[
        {
          title: 'Paths of Glory',
          desc: (
            <span>
              Paths of Glory is a 1957 American anti-war film co-written and
              directed by Stanley Kubrick, based on the novel of the same name
              by Humphrey Cobb. Set during World War I, the film stars Kirk
              Douglas as Colonel Dax, the commanding officer of French soldiers
              who refuse to continue a suicidal attack, after which Dax attempts
              to defend them against a charge of cowardice in a court-martial.
              <br />
              <br />
              In 1992, the film was deemed "culturally, historically or
              aesthetically significant" by the Library of Congress and selected
              for preservation in the United States National Film Registry.
            </span>
          ),
          screen1: '/img/cinema/kubrick/glory/screen1.jpg',
          screen2: '/img/cinema/kubrick/glory/screen2.jpg',
          videoId: 'nmDA60X-f_A',
          cover: '/img/cinema/kubrick/glory/cover.jpg',
          coverRatio: 1.24,
        },
        {
          title: 'Lolita',
          desc: (
            <span>
              Lolita is a 1962 comedy-drama film directed by Stanley Kubrick,
              based on the 1955 novel of the same title by Vladimir Nabokov, who
              also wrote a version of the screenplay, though this was not used
              by Kubrick. It follows a middle-aged literature lecturer who
              becomes sexually obsessed with a young adolescent girl. The film
              stars James Mason as Humbert Humbert, Sue Lyon as Dolores Haze
              (Lolita), and Shelley Winters as Charlotte Haze, with Peter
              Sellers as Clare Quilty.
              <br />
              <br />
              Owing to the Motion Picture Association of America's (MPAA)
              restrictions at the time, the film toned down the most provocative
              aspects of the novel, sometimes leaving much to the audience's
              imagination. The actress who played Lolita, Sue Lyon, was 14 at
              the time of filming.
              <br />
              <br />
              Lolita polarized contemporary critics for its controversial
              depictions of child sexual abuse. Kubrick later commented,
              however, that if he had realized how severe the censorship
              limitations were going to be, he probably would never have made
              the film.
            </span>
          ),
          screen1: '/img/cinema/kubrick/lolita/screen1.jpg',
          screen2: '/img/cinema/kubrick/lolita/screen2.png',
          cover: '/img/cinema/kubrick/lolita/cover.jpg',
          videoId: 'ihZ-aIJj6-g',
          coverRatio: 1.54,
        },
        {
          title: '2001: A Space Odyssey',
          desc: (
            <span>
              2001: A Space Odyssey is a 1968 epic science fiction film produced
              and directed by Stanley Kubrick. The screenplay was written by
              Kubrick and Arthur C. Clarke, and was inspired by Clarke's 1951
              short story "The Sentinel" and other short stories by Clarke. A
              novel released after the film's premiere was in part written
              concurrently with the screenplay. The film, which follows a voyage
              to Jupiter with the sentient computer HAL after the discovery of
              an alien monolith affecting human evolution, deals with themes of
              existentialism, human evolution, technology, artificial
              intelligence, and the possibility of extraterrestrial life.
              <br />
              <br />
              The film is noted for its scientifically accurate depiction of
              space flight, pioneering special effects, and ambiguous imagery.
              Sound and dialogue are used sparingly and often in place of
              traditional cinematic and narrative techniques. The soundtrack
              incorporates numerous works of classical music, among them Also
              sprach Zarathustra by Richard Strauss, "The Blue Danube" by Johann
              Strauss II, and works by Aram Khachaturian and György Ligeti.
            </span>
          ),
          screen1: '/img/cinema/kubrick/2001/screen1.jpg',
          screen2: '/img/cinema/kubrick/2001/screen2.jpg',

          cover: '/img/cinema/kubrick/2001/cover.jpg',
          videoId: 'Z2UWOeBcsJI',
        },
      ]}
    />
  );
};

export default Carax;
