import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Jean-Luc Godard"
      directorWiki="https://www.wikiwand.com/en/Jean-Luc_Godard"
      films={[
        {
          title: 'Breathless',
          desc: (
            <span>
              Breathless (French: À bout de souffle; "out of breath") is a 1960
              French crime and drama film written and directed by Jean-Luc
              Godard about a wandering criminal (Jean-Paul Belmondo) and his
              American girlfriend (Jean Seberg). It was Godard's first
              feature-length work and represented Belmondo's breakthrough as an
              actor.
              <br />
              <br />
              Breathless was one of the early, more influential examples of
              French New Wave (nouvelle vague) cinema.[4] Along with François
              Truffaut's The 400 Blows and Alain Resnais's Hiroshima, Mon Amour,
              both released a year earlier, it brought international attention
              to new styles of French filmmaking. At the time, the film
              attracted much attention for its bold visual style, which included
              unconventional use of jump cuts.
            </span>
          ),
          screen1: '/img/cinema/godard/bout/screen1.png',
          screen2: '/img/cinema/godard/bout/screen2.jpg',
          videoId: '2K-0JGUo0qA',
          cover: '/img/cinema/godard/bout/cover.jpg',
        },
        {
          title: 'My Life to Live',
          desc: (
            <span>
              My Life to Live (French: Vivre sa vie : film en douze tableaux; To
              Live Her Life: A Film in Twelve Scenes) is a 1962 French New Wave
              drama film directed by Jean-Luc Godard. It was released as My Life
              to Live in North America and as It's My Life in United Kingdom.
              The DVD releases use the original French title.
              <br />
              <br />
              Nana (Anna Karina), a beautiful Parisian in her early twenties,
              leaves her husband and infant son hoping to become an actress.
              Without money, beyond what she earns as a shopgirl, and unable to
              enter acting, she elects to earn better money as a prostitute.
              Soon she has a pimp, Raoul, who after an unspecified period agrees
              to sell Nana to another pimp. During the exchange, the pimps argue
              and Nana is killed in a gun battle. Nana's short life on film is
              told in 12 brief episodes, each preceded by a written intertitle.
            </span>
          ),
          screen1: '/img/cinema/godard/vie/screen1.jpeg',
          screen2: '/img/cinema/godard/vie/screen2.jpg',
          videoId: 'LskuFWBukbA',
          cover: '/img/cinema/godard/vie/cover.jpg',
        },
        {
          title: 'A Woman Is a Woman',
          desc: (
            <span>
              A Woman Is a Woman (French: Une femme est une femme) is a 1961
              French film directed by Jean-Luc Godard, featuring Anna Karina,
              Jean-Paul Belmondo and Jean-Claude Brialy. It is a tribute to
              American musical comedy and associated with the French New Wave.
              It is Godard's third feature film (the release of his second, Le
              Petit Soldat, was delayed by censorship), and his first in color
              and Cinemascope.
              <br />
              <br />
              The film centers on the relationship of exotic dancer Angéla
              (Karina) and her lover Émile (Brialy). Angéla wants to have a
              child, but Émile isn't ready. Émile's best friend Alfred
              (Belmondo) also says he loves Angéla, and keeps up a gentle
              pursuit. Angéla and Émile argue about the matter; at one point
              they decide not to speak to each other, so continue their argument
              by pulling books from the shelf and pointing to the titles. Since
              Émile stubbornly refuses her request for a child, Angéla finally
              decides to accept Alfred's plea and sleeps with him. This proves
              that she will do what she must to have a child. She and Émile
              finally make up, so he has a chance to become the father. The two
              have sex, then engage in a bit of wordplay that gives the film its
              title: an exasperated Émile says "Angéla, tu es infâme" ("Angela,
              you are horrid"), and she retorts, "Non, je suis une femme" ("No,
              I am a woman").
            </span>
          ),
          screen1: '/img/cinema/godard/femme/screen1.jpg',
          screen2: '/img/cinema/godard/femme/screen2.jpg',
          videoId: 'RS95bLuEl9I',
          cover: '/img/cinema/godard/femme/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
