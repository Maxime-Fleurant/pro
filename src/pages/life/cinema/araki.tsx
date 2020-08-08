import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Gregg Araki"
      directorWiki="https://www.wikiwand.com/en/Gregg_Araki"
      films={[
        {
          title: 'Totally F***ed Up',
          desc: (
            <span>
              Totally F***ed Up is a 1993 American drama film written and
              directed by Gregg Araki. The first installment of Araki's Teenage
              Apocalypse Trilogy, it is considered a seminal entry in the New
              Queer Cinema genre.
            </span>
          ),
          screen1: '/img/cinema/araki/fuck/screen1.jpg',
          screen2: '/img/cinema/araki/fuck/screen2.jpg',
          videoId: 'Q6eLzb4EpEY',
          cover: '/img/cinema/araki/fuck/cover.jpg',
        },
        {
          title: 'The Doom Generation',
          desc: (
            <span>
              The Doom Generation is a 1995 black comedy thriller film written
              and directed by Gregg Araki. It stars James Duval, Rose McGowan,
              and Johnathon Schaech. The film follows two troubled teenage
              lovers, Amy Blue (McGowan) and Jordan White (Duval), who pick up a
              young handsome drifter named Xavier Red (Schaech). After Xavier
              accidentally kills a store clerk, the trio embarks on a journey
              full of sex, violence, and people from Amy's past.
            </span>
          ),
          screen1: '/img/cinema/araki/doom/screen1.jpg',
          screen2: '/img/cinema/araki/doom/screen2.jpg',

          cover: '/img/cinema/araki/doom/cover.jpeg',
          videoId: 'agRzpnS_FGw',
        },
        {
          title: 'Mysterious Skin',
          desc: (
            <span>
              Mysterious Skin is a 2004 coming-of-age drama film directed by
              Gregg Araki, who also wrote the screenplay based on Scott Heim's
              1995 novel of the same name. The film is Araki's eighth,
              premiering at the 61st Venice International Film Festival in 2004,
              although it was not more widely distributed until 2005.
            </span>
          ),
          screen1: '/img/cinema/araki/mysterious/screen1.jpg',
          screen2: '/img/cinema/araki/mysterious/screen2.jpeg',
          coverRatio: 1.3,
          cover: '/img/cinema/araki/mysterious/cover.jpg',
          videoId: '5Lp5v4oQZRw',
        },
      ]}
    />
  );
};

export default Carax;
