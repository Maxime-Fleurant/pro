import { FunctionComponent } from 'react';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';

import { main } from '../../common/components/Article/CodeBrowser/codes/apollo';
import Article from '../../common/components/Article/Article';

const Apollo: FunctionComponent = () => {
  return (
    <>
      {/* <ArticleNavigation
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
      /> */}

      <Article
        articleHeader={{
          titleContent: 'Apollo',
          logo: <span className="icon-a" />,
          desc:
            'Simplify app development by combining APIs, databases, and microservices into a single data graph that you can query with GraphQL',
          npm: 'https://www.npmjs.com/package/apollo-server-express',
          official: 'https://www.apollographql.com/',
          git: 'https://github.com/apollographql/apollo-server',
          detail: 'Api | GraphQL',
        }}
        headerContent={
          <span>
            Apollo Server is an open-source, spec compliant
            <a css={insideLink}>
              {` GraphQL `} <span className="icon-graphql" />{' '}
            </a>
            server that's compatible with any GraphQL client, including Apollo
            Client. It's the best way to build a production ready,
            self-documenting GraphQL API that can use data from any source.
            server that's compatible with any GraphQL client, including Apollo
            Client
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
          </span>
        }
        headerCode={{ code: main, language: 'language-ts' }}
        content={[]}
      />
    </>
  );
};

export default Apollo;
