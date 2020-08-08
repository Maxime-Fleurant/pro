import { FunctionComponent } from 'react';
import YouTube from 'react-youtube';
import ArticleNavigation from '../Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../Cell/SimpleCell';
import ArticleHead from '../Article/ArticleHead/ArticleHead';
import { mainText } from '../Article/ArticleHead/articleHeaderStyle';
import { videoWrap, anchorPos } from '../Layout/style';

// TYPE
interface IFilm {
  title: string;
  desc: JSX.Element;
  screen1: string;
  screen2: string;
  videoId: string;
  cover: string;
  coverRatio?: number;
}

interface IFilmArticle {
  director: string;
  directorWiki: string;
  films: IFilm[];
}

type TFilmArticle = FunctionComponent<IFilmArticle>;

// REACT
const FilmArticle: TFilmArticle = ({ director, directorWiki, films }) => {
  let deskStart = 16;
  let tabStart = 13;
  let mobilStart = 13;

  const filmList = films.map((film) => {
    const returnList = (
      <>
        <SimpleCell
          deskPos={{
            rowStart: deskStart,
            rowEnd: deskStart + 1,
            columnStart: 4,
            columnEnd: 15,
          }}
          tabPos={{
            rowStart: tabStart,
            rowEnd: tabStart + 1,
            columnStart: 1,
            columnEnd: 25,
          }}
          mobilPos={{
            rowStart: mobilStart,
            rowEnd: mobilStart + 1,
            columnStart: 1,
            columnEnd: 25,
          }}
        >
          <ArticleHead titleContent={film.title} film />
        </SimpleCell>

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 1,
            rowEnd: deskStart + 2,
            columnStart: 4,
            columnEnd: 15,
          }}
          tabPos={{
            rowStart: tabStart + 1,
            rowEnd: tabStart + 2,
            columnStart: 1,
            columnEnd: 13,
          }}
          mobilPos={{
            rowStart: mobilStart + 1,
            rowEnd: mobilStart + 2,
            columnStart: 1,
            columnEnd: 25,
          }}
        >
          <div css={mainText}>
            <a name={film.title.split(' ').join('')} css={anchorPos} />
            {film.desc}
          </div>
        </SimpleCell>

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 1,
            rowEnd: deskStart + 4,
            columnStart: 15,
            columnEnd: 22,
          }}
          tabPos={{
            rowStart: tabStart + 1,
            rowEnd: tabStart + 2,
            columnStart: 13,
            columnEnd: 25,
          }}
          mobilPos={{
            rowStart: mobilStart + 3,
            rowEnd: mobilStart + 4,
            columnStart: 1,
            columnEnd: 25,
          }}
          // relative
          // allRatio={film.coverRatio ? film.coverRatio : 1.5}
          // backgroundImg={film.cover}
        >
          <img src={film.cover} />
        </SimpleCell>

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 4,
            rowEnd: deskStart + 5,
            columnStart: 4,
            columnEnd: 13,
          }}
          tabPos={{
            rowStart: tabStart + 3,
            rowEnd: tabStart + 4,
            columnStart: 1,
            columnEnd: 25,
          }}
          mobilPos={{
            rowStart: mobilStart + 5,
            rowEnd: mobilStart + 6,
            columnStart: 1,
            columnEnd: 25,
          }}
          relative
          allRatio={0.6}
          backgroundImg={film.screen1}
        />

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 4,
            rowEnd: deskStart + 5,
            columnStart: 13,
            columnEnd: 22,
          }}
          tabPos={{
            rowStart: tabStart + 4,
            rowEnd: tabStart + 5,
            columnStart: 1,
            columnEnd: 25,
          }}
          mobilPos={{
            rowStart: mobilStart + 7,
            rowEnd: mobilStart + 8,
            columnStart: 1,
            columnEnd: 25,
          }}
          relative
          allRatio={0.6}
          backgroundImg={film.screen2}
        />

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 3,
            rowEnd: deskStart + 4,
            columnStart: 4,
            columnEnd: 15,
          }}
          tabPos={{
            rowStart: tabStart + 5,
            rowEnd: tabStart + 6,
            columnStart: 1,
            columnEnd: 25,
          }}
          mobilPos={{
            rowStart: mobilStart + 9,
            rowEnd: mobilStart + 10,
            columnStart: 1,
            columnEnd: 25,
          }}
          relative
          allRatio={0.6}
        >
          <div css={videoWrap}>
            <YouTube
              videoId={film.videoId}
              opts={{ height: '100%', width: '100%' }}
            />
          </div>
        </SimpleCell>
      </>
    );

    deskStart += 7;
    tabStart += 9;
    mobilStart += 16;

    return returnList;
  });

  return (
    <>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',

            items: films.map((film) => {
              return {
                name: film.title,
                href: `#${film.title.split(' ').join('')}`,
              };
            }),
          },
          {
            name: 'Ressources',
            items: [
              {
                name: director,
                href: directorWiki,
                outside: true,
              },
            ],
          },
        ]}
      />
      <SimpleCell
        deskPos={{ rowStart: 11, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead titleContent={director} bigSub />
      </SimpleCell>

      {filmList}
    </>
  );
};

export default FilmArticle;
