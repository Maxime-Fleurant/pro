import { FunctionComponent } from 'react';
import Head from 'next/head';
import Zoom from 'react-reveal/Zoom';
import { useTheme } from 'emotion-theming';
import {
  quote,
  animeMainTextHeader,
  twrapf,
  typoPostWrap,
  wrapTypoWrap,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../../common/components/Cell/SimpleCell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import { mainText } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { ITheme } from '../../common/components/Layout/Theme';
import {
  helveticaCondensedBold,
  textLineHeight,
  helveticaBold,
  helveticaMedium,
  helveticaRegular,
  helveticaLight,
  helveticaThin,
  font64,
  font104,
  font89,
} from '../../common/globalStyle';

const Apollo: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <Head>
        <title>Typography</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Typography',
                outside: true,
              },
            ],
          },
        ]}
      />

      <SimpleCell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Typography"
          logo={<span>🖋</span>}
          desc="The whole point with type is for you not to be aware it is there. If you remember the shape of a spoon with which you just ate some soup, then the spoon had a poor shape."
          official="http://www.gt-america.com/"
          wiki="https://en.wikipedia.org/wiki/Typography"
          detail="Design | Type"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div
          css={[mainText(theme), animeMainTextHeader]}
          className="animate__fadeInUp"
        >
          "Typography has one plain duty before it and that is to convey
          information in writing. No argument or consideration can absolve
          typography from this duty. A printed work which cannot be read becomes
          a product without purpose."
          <br />
          <span css={quote}>-Emil Ruder</span>
          <br />
          <br />
          "The material of typography is the black, and it is the designer’s
          task with the help of this black to capture space, to create
          harmonious whites inside the letters as well as between them."
          <br />
          <span css={quote}>-Adrian Frutiger</span>
          <br />
          <br />
          "There are people who think that the type should be expressive—they
          have a different point of view from mine. I don’t think type should be
          expressive at all. I can write the word ‘dog’ with any typeface, and
          it doesn’t have to look like a dog. But there are people who, when
          they write ‘dog’ think it should bark."
          <br />
          <span css={quote}>-Massimo Vignelli</span>
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        extraCss={[twrapf(theme)]}
      >
        <Zoom cascade duraction={1500}>
          <div css={wrapTypoWrap}>
            <div css={typoPostWrap}>
              <div css={[helveticaBold, textLineHeight, font89]}>Design</div>
              <div css={[helveticaMedium, textLineHeight, font89]}>Design</div>
              <div css={[helveticaRegular, textLineHeight, font89]}>Design</div>
              <div css={[helveticaLight, textLineHeight, font89]}>Design</div>
              <div css={[helveticaThin, textLineHeight, font89]}>Design</div>
            </div>
            <div css={typoPostWrap}>
              <div css={[helveticaThin, textLineHeight, font89]}>Compute</div>
              <div css={[helveticaLight, textLineHeight, font89]}>Compute</div>
              <div css={[helveticaRegular, textLineHeight, font89]}>
                Compute
              </div>
              <div css={[helveticaMedium, textLineHeight, font89]}>Compute</div>
              <div css={[helveticaBold, textLineHeight, font89]}>Compute</div>
            </div>
          </div>
        </Zoom>
      </SimpleCell>
    </>
  );
};

export default Apollo;
