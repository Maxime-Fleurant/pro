import { FunctionComponent, Fragment } from 'react';
import YouTube from 'react-youtube';
import ArticleNavigation from '../Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../Cell/SimpleCell';
import ArticleHead from '../Article/ArticleHead/ArticleHead';
import { mainText } from '../Article/ArticleHead/articleHeaderStyle';
import {
  videoWrap,
  anchorPos,
  coverImage,
  coverImageWrap,
  bookImageWrap,
} from '../Layout/style';

// TYPE
interface IFilm {
  title: string;
  desc: JSX.Element;

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
const NovelArticle: TFilmArticle = ({ director, directorWiki, films }) => {
  let deskStart = 16;
  let tabStart = 13;
  let mobilStart = 10;

  const filmList = films.map((film) => {
    const returnList = (
      <Fragment key={film.title}>
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
            rowEnd: deskStart + 2,
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
          extraCss={[bookImageWrap]}
        >
          <img src={film.cover} alt="" css={coverImage} />
        </SimpleCell>
      </Fragment>
    );

    deskStart += 4;
    tabStart += 4;
    mobilStart += 10;

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
        mobilPos={{ rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead titleContent={director} bigSub />
      </SimpleCell>

      {filmList}
    </>
  );
};

export default NovelArticle;
