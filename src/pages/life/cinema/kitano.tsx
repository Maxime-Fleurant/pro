import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Takeshi Kitano"
      directorWiki="https://www.wikiwand.com/en/Takeshi_Kitano"
      films={[
        {
          title: 'Violent Cop',
          desc: (
            <span>
              Violent Cop (その男、凶暴につき, Sono otoko, kyōbō ni tsuki, Lit.
              'That man, being violent'), also known as Warning: This Man is
              Wild and So No Otoko Kyobo Ni Tsuki, is a 1989 Japanese film
              directed by and starring Takeshi Kitano. It was Kitano's
              directorial debut, and marked the beginning of his career as a
              filmmaker.
            </span>
          ),
          screen1: '/img/cinema/kitano/violentcop/screen1.jpg',
          screen2: '/img/cinema/kitano/violentcop/screen2.jpg',

          videoId: 'hSjLAj1SWRc',
          cover: '/img/cinema/kitano/violentcop/cover.jpg',
        },
        {
          title: 'Sonatine',
          desc: (
            <span>
              Sonatine (Japanese: ソナチネ, Hepburn: Sonachine) is a 1993
              Japanese yakuza film directed, written and edited by Takeshi
              Kitano, who also stars in the film. It won numerous awards and
              became one of Kitano's most successful and praised films,
              garnering him a sizable international fan base.
            </span>
          ),
          screen1: '/img/cinema/kitano/sonatine/screen1.jpg',
          screen2: '/img/cinema/kitano/sonatine/screen2.jpg',

          cover: '/img/cinema/kitano/sonatine/cover.jpg',
          videoId: 'hFQTU8CFkm4',
        },
        {
          title: 'Hana-Bi',
          desc: (
            <span>
              Hana-bi (はなび, Hana-bi), released in the United States as
              Fireworks, is a 1997 Japanese crime drama film written, directed
              and edited by Takeshi Kitano, who also stars in it. The film's
              score was composed by Joe Hisaishi in his fourth collaboration
              with Kitano. Hana-bi (花火, Hanabi) is the Japanese word for
              "fireworks."
            </span>
          ),
          screen1: '/img/cinema/kitano/hanabi/screen1.jpg',
          screen2: '/img/cinema/kitano/hanabi/screen2.jpg',
          coverRatio: 1.3,
          cover: '/img/cinema/kitano/hanabi/cover.jpg',
          videoId: 'PwTWtAE3ylY',
        },
      ]}
    />
  );
};

export default Carax;
