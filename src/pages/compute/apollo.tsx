import { FunctionComponent } from 'react';
import { Cell } from '../../common/components/Cell/cell';
import {
  mainText,
  insideLink,
  subTitleCell,
} from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import CodeBrowser from '../../common/components/Article/CodeBrowser/CodeBrowser';
import { main } from '../../common/components/Article/CodeBrowser/codes/apollo';

const Apollo: FunctionComponent = () => {
  return (
    <>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Dataloader', href: '#test' }],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Github',
                href: 'https://github.com/ApolloAuto/apollo',
                outside: true,
              },
              {
                name: 'Website',
                href: 'https://www.apollographql.com/',
                outside: true,
              },
              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/apollo-server',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [{ name: 'TypeDI', href: '/compute/typedi', domain: true }],
          },
        ]}
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Apollo"
          logo={<span className="icon-a" />}
          desc="Simplify app development by combining APIs, databases, and microservices into a single
          data graph that you can query with GraphQL"
          wiki="https://www.wikiwand.com/en/GraphQL"
          npm="https://www.npmjs.com/package/apollo-server-express"
          official="https://www.apollographql.com/"
          git="https://github.com/apollographql/apollo-server"
          detail="Api | GraphQL"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 15, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Apollo Server is an open-source, spec compliant
          <a css={insideLink}>
            {` GraphQL `} <span className="icon-graphql" />{' '}
          </a>
          server that's compatible with any GraphQL client, including Apollo
          Client. It's the best way to build a production ready,
          self-documenting GraphQL API that can use data from any source. server
          that's compatible with any GraphQL client, including Apollo Client
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
        deskPos={{ rowStart: 8, rowEnd: 14, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language="language-tsx" code={main} />
      </Cell>

      <Cell
        deskPos={{ rowStart: 17, rowEnd: 23, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language="language-tsx" code={main} />
      </Cell>

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 17, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          sub
          titleContent="Stitching"
          wiki="https://www.wikiwand.com/en/GraphQL"
          npm="https://www.npmjs.com/package/apollo-server-express"
          official="https://www.apollographql.com/"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 17, rowEnd: 24, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Apollo Server is an open-source, spec compliant
          <a css={insideLink}>
            {` GraphQL `} <span className="icon-graphql" />{' '}
          </a>
          server that's compatible with any GraphQL client, including Apollo
          Client. It's the best way to build a production ready,
          self-documenting GraphQL API that can use data from any source. server
          that's compatible with any GraphQL client, including Apollo Client
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
        deskPos={{ rowStart: 25, rowEnd: 26, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 15, rowEnd: 16, columnStart: 1, columnEnd: 25 }}
        extraCss={[subTitleCell]}
        mobilPos={{ rowStart: 13, rowEnd: 14, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          sub
          titleContent="Dataloader"
          wiki="https://www.wikiwand.com/en/GraphQL"
          npm="https://www.npmjs.com/package/apollo-server-express"
          official="https://www.apollographql.com/"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 26, rowEnd: 33, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 14, rowEnd: 15, columnStart: 1, columnEnd: 25 }}
      >
        <a id="test" />
        <div css={mainText}>
          Apollo Server is an open-source, spec compliant
          <a css={insideLink}>
            {` GraphQL `} <span className="icon-graphql" />{' '}
          </a>
          server that's compatible with any GraphQL client, including Apollo
          Client. It's the best way to build a production ready,
          self-documenting GraphQL API that can use data from any source. server
          that's compatible with any GraphQL client, including Apollo Client
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
