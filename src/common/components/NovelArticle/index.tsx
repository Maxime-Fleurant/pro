import Head from 'next/head';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { FunctionComponent, Fragment } from 'react';
import ArticleNavigation from '../Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../Cell/SimpleCell';
import ArticleHead from '../Article/ArticleHead/ArticleHead';
import { mainText } from '../Article/ArticleHead/articleHeaderStyle';
import { anchorPos, coverImage, bookImageWrap } from '../Layout/style';

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
          <Flip top duration={1500}>
            <ArticleHead titleContent={film.title} film />
          </Flip>
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
          <Fade bottom duration={1500}>
            <div css={mainText}>
              <a id={film.title.split(' ').join('')} css={anchorPos} />
              {film.desc}
            </div>
          </Fade>
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
          <Fade bottom duration={1500}>
            <img src={film.cover} alt="" css={coverImage} />
          </Fade>
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
      <Head>
        <title>{director}</title>
      </Head>

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
        deskPos={{ rowStart: 9, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <Fade bottom duration={1500}>
          <ArticleHead titleContent={director} bigSub />
        </Fade>
      </SimpleCell>
      {filmList}
    </>
  );
};

export default NovelArticle;
