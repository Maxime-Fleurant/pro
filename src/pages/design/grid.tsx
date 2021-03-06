import { FunctionComponent } from 'react';
import Head from 'next/head';
import Zoom from 'react-reveal/Zoom';
import { useTheme } from 'emotion-theming';
import {
  quote,
  animeMainTextHeader,
  gridDemo,
  gridDemoCell,
  withinCell,
  wrapperCell,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../../common/components/Cell/SimpleCell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import { mainText } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { ITheme } from '../../common/components/Layout/Theme';

const Apollo: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <Head>
        <title>Grid</title>
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
                href: 'https://en.wikipedia.org/wiki/Grid_(graphic_design)',
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
          titleContent="Grid"
          logo={<span>📐</span>}
          desc="The use of the grid implies the will to cultivate objectivity instead of subjectivity."
          wiki="https://en.wikipedia.org/wiki/Grid_(graphic_design)"
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
          "The grid system is an aid, not a guarantee. It permits a number of
          possible uses and each designer can look for a solution appropriate to
          his personal style. But one must learn how to use the grid; it is an
          art that requires practice."
          <br />
          <br />
          Just as in nature systems of order govern the growth and structure of
          animate and inanimate matter, so human activity itself has, since the
          earliest times, been distinguished by the quest for order.
          <br />
          <br />
          The use of the grid implies
          <br />
          the will to systematize, to clarify
          <br />
          the will to penetrate to the essentials, to concentrate
          <br />
          the will to cultivate objectivity instead of subjectivity
          <br />
          the will to integrate elements of colour, form and material
          <br />
          the will to adopt a positive, forward-thinking attitude
          <br />
          <br />
          <span css={quote}>-Josef Müller-Brockmann</span>
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        relative
        ratio={1}
      >
        <div css={gridDemo}>
          <SimpleCell
            deskPos={{
              rowStart: 1,
              rowEnd: 5,
              columnStart: 1,
              columnEnd: 5,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 1,
              rowEnd: 3,
              columnStart: 5,
              columnEnd: 13,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 3,
              rowEnd: 7,
              columnStart: 5,
              columnEnd: 9,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 5,
              rowEnd: 7,
              columnStart: 1,
              columnEnd: 5,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 3,
              rowEnd: 5,
              columnStart: 9,
              columnEnd: 11,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 3,
              rowEnd: 5,
              columnStart: 11,
              columnEnd: 13,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 5,
              rowEnd: 9,
              columnStart: 9,
              columnEnd: 13,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 7,
              rowEnd: 11,
              columnStart: 5,
              columnEnd: 9,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 9,
              rowEnd: 13,
              columnStart: 1,
              columnEnd: 5,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 7,
              rowEnd: 9,
              columnStart: 1,
              columnEnd: 3,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 7,
              rowEnd: 9,
              columnStart: 3,
              columnEnd: 5,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 11,
              rowEnd: 13,
              columnStart: 5,
              columnEnd: 13,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: 9,
              rowEnd: 11,
              columnStart: 9,
              columnEnd: 13,
            }}
            relative
            extraCss={[wrapperCell]}
          >
            <Zoom duration={1500}>
              <div css={[gridDemoCell(theme), withinCell]} />
            </Zoom>
          </SimpleCell>
        </div>
      </SimpleCell>
    </>
  );
};

export default Apollo;
