import { FunctionComponent } from 'react';
import ArticleHead, { IArticleHeadContent } from './ArticleHead/ArticleHead';
import { SimpleCell } from '../Cell/SimpleCell';
import { mainText } from './ArticleHead/articleHeaderStyle';
import CodeBrowser, { ICodeBrowser } from './CodeBrowser/CodeBrowser';

// TYPE
interface Content {
  header: IArticleHeadContent;
  content: JSX.Element;
  code: ICodeBrowser;
}

interface IArticle {
  articleHeader: IArticleHeadContent;
  headerContent: JSX.Element;
  headerCode: ICodeBrowser;
  content: Content[];
}

type TArticle = FunctionComponent<IArticle>;

// REACT
const Article: TArticle = ({
  articleHeader,
  headerContent,
  headerCode,
  content,
}) => {
  let contentJsx: JSX.Element[];
  let deskRowStart = 13;
  let tabRowStart = 10;
  let mobilRowStart = 6;

  if (content.length) {
    contentJsx = content.map((contentElem) => {
      const currentContentJSX = (
        <>
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
            <ArticleHead
              sub
              logo={contentElem.header.logo}
              titleContent={contentElem.header.titleContent}
              official={contentElem.header.official}
            />
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
          >
            <div css={mainText}>{contentElem.content}</div>
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
          >
            <CodeBrowser
              language={contentElem.code.language}
              code={contentElem.code.code}
              heightAuto={contentElem.code.heightAuto}
            />
          </SimpleCell>
        </>
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
        deskPos={{ rowStart: 9, rowEnd: 10, columnStart: 4, columnEnd: 13 }}
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
          detail={articleHeader.detail}
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 11, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>{headerContent}</div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 11, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language={headerCode.language} code={headerCode.code} />
      </SimpleCell>

      {contentJsx}
    </>
  );
};

export default Article;
