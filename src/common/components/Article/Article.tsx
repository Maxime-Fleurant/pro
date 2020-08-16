import { FunctionComponent, Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { css } from '@emotion/core';
import ArticleHead, { IArticleHeadContent } from './ArticleHead/ArticleHead';
import { SimpleCell } from '../Cell/SimpleCell';
import { mainText } from './ArticleHead/articleHeaderStyle';
import CodeBrowser, { ICodeBrowser } from './CodeBrowser/CodeBrowser';
import { animeMainTextHeader } from '../Layout/style';
import { useTheme } from 'emotion-theming';
import { ITheme } from '../Layout/Theme';

// TYPE
interface Content {
  header: IArticleHeadContent;
  content: JSX.Element;
  code: ICodeBrowser;
  extraSpace?: number;
}

interface IArticle {
  articleHeader: IArticleHeadContent;
  headerContent: JSX.Element;
  headerCode: ICodeBrowser;
  headerContentHeightExtra?: number;
  content: Content[];
}

type TArticle = FunctionComponent<IArticle>;

// REACT
const Article: TArticle = ({
  articleHeader,
  headerContent,
  headerCode,
  content,
  headerContentHeightExtra,
}) => {
  const theme = useTheme<ITheme>();

  let contentJsx: JSX.Element[];
  let deskRowStart = 15;
  let tabRowStart = 10;
  let mobilRowStart = 6;

  const mainExtraSpace = css`
    @media (min-width: 1023px) {
      margin-bottom: ${headerContentHeightExtra}rem;
    }
  `;

  if (content.length) {
    contentJsx = content.map((contentElem) => {
      const extraSpace = css`
        @media (min-width: 1023px) {
          margin-bottom: ${contentElem.extraSpace}rem;
        }
      `;

      const currentContentJSX = (
        <Fragment key={contentElem.header.titleContent as string}>
          <SimpleCell
            deskPos={{
              rowStart: deskRowStart,
              rowEnd: deskRowStart + 1,
              columnStart: 4,
              columnEnd: 13,
            }}
            tabPos={{
              rowStart: tabRowStart,
              rowEnd: tabRowStart + 1,
              columnStart: 1,
              columnEnd: 25,
            }}
            mobilPos={{
              rowStart: mobilRowStart,
              rowEnd: mobilRowStart + 1,
              columnStart: 1,
              columnEnd: 25,
            }}
          >
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOnce
              duration={1.5}
            >
              <ArticleHead
                sub
                logo={contentElem.header.logo}
                titleContent={contentElem.header.titleContent}
                official={contentElem.header.official}
              />
            </ScrollAnimation>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: deskRowStart + 1,
              rowEnd: deskRowStart + 2,
              columnStart: 4,
              columnEnd: 13,
            }}
            tabPos={{
              rowStart: tabRowStart + 1,
              rowEnd: tabRowStart + 2,
              columnStart: 1,
              columnEnd: 25,
            }}
            mobilPos={{
              rowStart: mobilRowStart + 1,
              rowEnd: mobilRowStart + 2,
              columnStart: 1,
              columnEnd: 25,
            }}
            extraCss={[extraSpace]}
          >
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOnce
              duration={1.5}
            >
              <div css={mainText}>{contentElem.content}</div>
            </ScrollAnimation>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: deskRowStart + 1,
              rowEnd: deskRowStart + 2,
              columnStart: 13,
              columnEnd: 22,
            }}
            tabPos={{
              rowStart: tabRowStart + 2,
              rowEnd: tabRowStart + 3,
              columnStart: 1,
              columnEnd: 25,
            }}
            mobilPos={{
              rowStart: mobilRowStart + 2,
              rowEnd: mobilRowStart + 3,
              columnStart: 1,
              columnEnd: 25,
            }}
            relative={!contentElem.code.heightAuto}
            ratio={contentElem.code.heightAuto ? undefined : 0.665}
          >
            <CodeBrowser
              language={contentElem.code.language}
              code={contentElem.code.code}
              heightAuto={contentElem.code.heightAuto}
            />
          </SimpleCell>
        </Fragment>
      );

      deskRowStart += 4;
      tabRowStart += 4;
      mobilRowStart += 5;

      return currentContentJSX;
    });
  }

  return (
    <>
      <SimpleCell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent={articleHeader.titleContent}
          logo={articleHeader.logo}
          desc={articleHeader.desc}
          npm={articleHeader.npm}
          official={articleHeader.official}
          git={articleHeader.git}
          wiki={articleHeader.wiki}
          detail={articleHeader.detail}
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
        extraCss={[mainExtraSpace]}
      >
        <div
          css={[mainText(theme), animeMainTextHeader]}
          className="animate__fadeInUp"
        >
          {headerContent}
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser
          language={headerCode.language}
          code={headerCode.code}
          heightAuto={headerCode.heightAuto}
        />
      </SimpleCell>

      {contentJsx}
    </>
  );
};

export default Article;
