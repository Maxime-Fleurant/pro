import { FunctionComponent, Fragment } from 'react';
import Flip from 'react-reveal/Flip';
import Head from 'next/head';
import Fade from 'react-reveal/Fade';
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
  screenImage,
  reactRevail,
} from '../Layout/style';

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
          extraCss={[coverImageWrap]}
        >
          <Fade bottom duration={1500}>
            <img src={film.cover} alt="" css={coverImage} />
          </Fade>
        </SimpleCell>

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 4,
            rowEnd: deskStart + 5,
            columnStart: 4,
            columnEnd: 13,
          }}
          tabPos={{
            rowStart: tabStart + 2,
            rowEnd: tabStart + 3,
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
          extraCss={[reactRevail]}
        >
          <Fade bottom duration={1500}>
            <div
              css={[screenImage, { backgroundImage: `url(${film.screen1})` }]}
            />
          </Fade>
        </SimpleCell>

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 4,
            rowEnd: deskStart + 5,
            columnStart: 13,
            columnEnd: 22,
          }}
          tabPos={{
            rowStart: tabStart + 3,
            rowEnd: tabStart + 4,
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
          extraCss={[reactRevail]}
        >
          <Fade bottom duration={1500}>
            <div
              css={[screenImage, { backgroundImage: `url(${film.screen2})` }]}
            />
          </Fade>
        </SimpleCell>

        <SimpleCell
          deskPos={{
            rowStart: deskStart + 3,
            rowEnd: deskStart + 4,
            columnStart: 4,
            columnEnd: 15,
          }}
          tabPos={{
            rowStart: tabStart + 4,
            rowEnd: tabStart + 5,
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
            <Fade bottom duration={1500}>
              <iframe
                title="fldk"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${film.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Fade>
          </div>
        </SimpleCell>
      </Fragment>
    );

    deskStart += 7;
    tabStart += 8;
    mobilStart += 16;

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

export default FilmArticle;
