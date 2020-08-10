import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="John Cassavetes"
      directorWiki="https://www.wikiwand.com/en/John_Cassavetes"
      films={[
        {
          title: 'Shadows',
          desc: (
            <span>
              Shadows is a 1959 American independent drama film directed by John
              Cassavetes about race relations during the Beat Generation years
              in New York City. The film stars Ben Carruthers, Lelia Goldoni,
              and Hugh Hurd as three African-American siblings, though only one
              of them is dark-skinned. The film was initially shot in 1957 and
              shown in 1958, but a poor reception prompted Cassavetes to rework
              it in 1959. Promoted as a completely improvisational film, it was
              intensively rehearsed in 1957, and in 1959 it was fully scripted.
              <br />
              <br />
              The film depicts two weeks in the lives of three siblings on the
              margins of society: two brothers who are struggling jazz musicians
              and their light-skinned younger sister who goes through three
              relationships, one with an older white writer, one with a shallow
              white lover and finally one with a gentle young black admirer.
            </span>
          ),
          screen1: '/img/cinema/cassa/shadows/screen1.png',
          screen2: '/img/cinema/cassa/shadows/screen2.png',
          videoId: 'VZx-I0wJ_8s',
          cover: '/img/cinema/cassa/shadows/cover.jpg',
        },
        {
          title: 'Faces',
          desc: (
            <span>
              Faces is a 1968 American drama film written and directed by John
              Cassavetes. It stars John Marley, Gena Rowlands, Lynn Carlin (in
              her acting debut), Seymour Cassel, Fred Draper and Val Avery.
              <br />
              <br />
              The film, shot in cinéma vérité-style, depicts the final stages of
              the disintegrating marriage of a middle-aged couple (John Marley
              and Lynn Carlin). We are introduced to various groups and
              individuals the couple interacts with after the husband's sudden
              statement of his desire for a divorce. Afterwards, he spends the
              night in the company of brash businessmen and prostitutes, while
              the wife spends it with her middle-aged female friends and an
              aging, free-associating playboy they've picked up at a bar. The
              night proceeds as a series of tense conversations and
              confrontations occur.
            </span>
          ),
          screen1: '/img/cinema/cassa/faces/screen1.jpg',
          screen2: '/img/cinema/cassa/faces/screen2.jpg',
          videoId: 'PEH0bQy5BaE',
          cover: '/img/cinema/cassa/faces/cover.jpg',
        },

        {
          title: 'A Woman Under the Influence',
          desc: (
            <span>
              A Woman Under the Influence is a 1974 American drama film written
              and directed by John Cassavetes. The story follows a woman (Gena
              Rowlands) whose unusual behavior leads to conflict with her
              blue-collar husband (Peter Falk) and family. It received two
              Academy Award nominations for Best Actress and Best Director.
              <br />
              <br />
              Los Angeles housewife and mother Mabel loves her
              construction-worker husband Nick and desperately wants to please
              him, but the strange mannerisms and increasingly odd behavior she
              displays has him concerned. Convinced she has become a threat to
              herself and others, he reluctantly commits her to an institution,
              where she undergoes treatment for six months. Left alone with his
              three children, Nick proves to be neither wiser nor better than
              his wife in the way he relates to and interacts with them or
              accepts the role society expects him to play.
            </span>
          ),
          screen1: '/img/cinema/cassa/woman/screen1.jpg',
          screen2: '/img/cinema/cassa/woman/screen2.jpeg',
          videoId: 'b-8rvQek4n0',
          cover: '/img/cinema/cassa/woman/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
