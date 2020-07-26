import { Cell } from '../../common/components/Cell/cell';
import {
  title,
  titleDesc,
  titleLink,
  titlewrap,
  upTitleWrap,
  mainText,
  linkWrap,
  sideInfo,
  video,
  insideLink,
  subTitle,
  subTitleWrap,
  subTitleCell,
} from '../../common/components/ArticleHead/articleHeaderStyle';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  bigSideLink,
  rightSideLink,
  sideLink,
  sideWrap,
} from '../../common/components/Layout/style';

const Apollo = () => {
  return (
    <>
      <Cell deskPos={{ rowStart: 6, columnStart: 21, columnEnd: 25 }} autoRow extraCss={[sideWrap]}>
        <div css={[bigSideLink, rightSideLink]}>
          <a>Navigation</a>
        </div>

        <div css={[sideLink, rightSideLink]}>
          <a href="#test">Navigation</a>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 5, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
      >
        <div css={titlewrap}>
          <div css={upTitleWrap}>
            <div css={title}>
              Apollo&nbsp;
              <span className="icon-a" />
            </div>

            <div css={titleDesc}>
              Simplify app development by combining APIs, databases, and microservices into a single
              data graph that you can query with GraphQL
            </div>
          </div>

          <div css={linkWrap}>
            <div css={titleLink}>
              <a href="https://www.apollographql.com/" target="_blank" rel="noreferrer">
                <span className="icon-a" />
              </a>
              <a
                href="https://github.com/apollographql/apollo-server"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-github-filled" />
              </a>
              <a
                href="https://www.npmjs.com/package/apollo-server"
                target="_blank"
                rel="noreferrer"
              >
                <NpmIcon />
              </a>
            </div>
            <span css={sideInfo}>Api | GraphQL</span>
          </div>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 15, columnStart: 5, columnEnd: 13 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Apollo Server is an open-source, spec compliant
          <a css={insideLink}>
            {` GraphQL `} <span className="icon-graphql" />{' '}
          </a>
          server that's compatible with any GraphQL client, including Apollo Client. It's the best
          way to build a production ready, self-documenting GraphQL API that can use data from any
          source. server that's compatible with any GraphQL client, including Apollo Client
          <br />
          <br />I am using
          <a css={insideLink}>
            {` Apollo `} <span className="icon-a" />{' '}
          </a>
          server in conjunction with
          <a css={insideLink}>
            {` ExpressJS `} <span className="icon-expressjs-icon" />{' '}
          </a>
          using the
          <a css={insideLink}>
            {` apollo-server-express `} <NpmIcon />{' '}
          </a>
          package as well as
          <a css={insideLink}>
            {` Typegraphql `} <TypegraphqlIcon />{' '}
          </a>
          for its
          <a css={insideLink}>
            {` Typescript `} <TypescriptIcon />{' '}
          </a>
          implementation and
          <a css={insideLink}>
            {` TypeDi `} <span>⚙️</span>{' '}
          </a>
          for its dependency injection capability. <br />
          <br /> You can find examples of my code using Apollo server in the
          <a css={insideLink}>
            {` Anime `} <span>👁</span>{' '}
          </a>
          demo project
          <a css={insideLink}>
            {` Github `} <span className="icon-github-filled" />{' '}
          </a>
          repository
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 13, columnStart: 13, columnEnd: 21 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
      >
        <video autoPlay muted loop css={video}>
          <source src="/video/apollo/main.mp4" />
        </video>
      </Cell>

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 17, columnStart: 5, columnEnd: 13 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
        extraCss={[subTitleCell]}
      >
        <div css={[linkWrap, subTitleWrap]}>
          <span css={subTitle}>Stitching</span>
          <div css={titleLink}>
            <a href="https://www.apollographql.com/" target="_blank" rel="noreferrer">
              <span className="icon-a" />
            </a>
            <a
              href="https://github.com/apollographql/apollo-server"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-github-filled" />
            </a>
            <a href="https://www.npmjs.com/package/apollo-server" target="_blank" rel="noreferrer">
              <NpmIcon />
            </a>
          </div>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 17, rowEnd: 24, columnStart: 5, columnEnd: 13 }}
        tabPos={{ rowStart: 13, rowEnd: 14, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Apollo Server is an open-source, spec compliant
          <a css={insideLink}>
            {` GraphQL `} <span className="icon-graphql" />{' '}
          </a>
          server that's compatible with any GraphQL client, including Apollo Client. It's the best
          way to build a production ready, self-documenting GraphQL API that can use data from any
          source. server that's compatible with any GraphQL client, including Apollo Client
          <br />
          <br />I am using
          <a css={insideLink}>
            {` Apollo `} <span className="icon-a" />{' '}
          </a>
          server in conjunction with
          <a css={insideLink}>
            {` ExpressJS `} <span className="icon-expressjs-icon" />{' '}
          </a>
          using the
          <a css={insideLink}>
            {` apollo-server-express `} <NpmIcon />{' '}
          </a>
          package as well as
          <a css={insideLink}>
            {` Typegraphql `} <TypegraphqlIcon />{' '}
          </a>
          for its
          <a css={insideLink}>
            {` Typescript `} <TypescriptIcon />{' '}
          </a>
          implementation and
          <a css={insideLink}>
            {` TypeDi `} <span>⚙️</span>{' '}
          </a>
          for its dependency injection capability. <br />
          <br /> You can find examples of my code using Apollo server in the
          <a css={insideLink}>
            {` Anime `} <span>👁</span>{' '}
          </a>
          demo project
          <a css={insideLink}>
            {` Github `} <span className="icon-github-filled" />{' '}
          </a>
          repository
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 25, rowEnd: 26, columnStart: 5, columnEnd: 13 }}
        extraCss={[subTitleCell]}
        tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 25 }}
      >
        <div css={[linkWrap, subTitleWrap]}>
          <span css={subTitle}>DataLoader</span>
          <div css={titleLink}>
            <a href="https://www.apollographql.com/" target="_blank" rel="noreferrer">
              <span className="icon-a" />
            </a>
            <a
              href="https://github.com/apollographql/apollo-server"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-github-filled" />
            </a>
            <a href="https://www.npmjs.com/package/apollo-server" target="_blank" rel="noreferrer">
              <NpmIcon />
            </a>
          </div>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 26, rowEnd: 33, columnStart: 5, columnEnd: 13 }}
        tabPos={{ rowStart: 17, rowEnd: 18, columnStart: 1, columnEnd: 25 }}
      >
        <a id="test"></a>
        <div css={mainText}>
          Apollo Server is an open-source, spec compliant
          <a css={insideLink}>
            {` GraphQL `} <span className="icon-graphql" />{' '}
          </a>
          server that's compatible with any GraphQL client, including Apollo Client. It's the best
          way to build a production ready, self-documenting GraphQL API that can use data from any
          source. server that's compatible with any GraphQL client, including Apollo Client
          <br />
          <br />I am using
          <a css={insideLink}>
            {` Apollo `} <span className="icon-a" />{' '}
          </a>
          server in conjunction with
          <a css={insideLink}>
            {` ExpressJS `} <span className="icon-expressjs-icon" />{' '}
          </a>
          using the
          <a css={insideLink}>
            {` apollo-server-express `} <NpmIcon />{' '}
          </a>
          package as well as
          <a css={insideLink}>
            {` Typegraphql `} <TypegraphqlIcon />{' '}
          </a>
          for its
          <a css={insideLink}>
            {` Typescript `} <TypescriptIcon />{' '}
          </a>
          implementation and
          <a css={insideLink}>
            {` TypeDi `} <span>⚙️</span>{' '}
          </a>
          for its dependency injection capability. <br />
          <br /> You can find examples of my code using Apollo server in the
          <a css={insideLink}>
            {` Anime `} <span>👁</span>{' '}
          </a>
          demo project
          <a css={insideLink}>
            {` Github `} <span className="icon-github-filled" />{' '}
          </a>
          repository
        </div>
      </Cell>
    </>
  );
};

export default Apollo;
