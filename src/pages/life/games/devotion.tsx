import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Devotion"
      directorWiki="https://www.wikiwand.com/en/Devotion_(video_game)"
      films={[
        {
          title: 'Red Candle Games',
          desc: (
            <span>
              Devotion (Chinese: 還願; lit.: 'Fulfill a vow') is a first-person
              psychological horror video game created and developed by Taiwanese
              game developer Red Candle Games for Steam. It is set in Taiwan in
              the 1980s, with a majority of the game happening in an apartment
              complex in Taipei. The game also incorporates elements based on
              Taiwanese culture and folk religion. The game was released on
              February 19, 2019, but was removed from Steam shortly afterward on
              February 26 in the face of a controversy involving unintended art
              assets.
              <br />
              <br />
              Players, for the most part, control the troubled screenwriter Du
              Feng Yu (杜豐于) through a Taipei apartment complex with rooms
              that represent various years in the lives of the Du family during
              the 1980s. The family consists of Feng Yu, his wife Gong Li Fang
              (鞏莉芳), a retired songstress, and their daughter Du Mei Shin
              (杜美心), an aspiring child singer. Feng Yu's screenwriting career
              has stagnated while Mei Shin begins to show signs of a mysterious
              illness. As the family's financial situation deteriorates, Li Fang
              has frequent arguments with Feng Yu about whether she should come
              out of her retirement to help support the family.
            </span>
          ),
          screen1: '/img/game/dev/screen1.jpg',
          screen2: '/img/game/dev/screen2.jpg',
          videoId: 'IbQlBGniUQQ',
          cover: '/img/game/dev/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
