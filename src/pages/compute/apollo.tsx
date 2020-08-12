import { FunctionComponent } from 'react';
import Head from 'next/head';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';

import { main } from '../../common/components/Article/CodeBrowser/codes/apollo';
import Article from '../../common/components/Article/Article';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Apollo: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Apollo</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'Live Demo',
            items: [
              {
                name: 'Anime Search',
                href: 'https://anime.maximefleurant.com/',
                outside: true,
              },
            ],
          },
          {
            name: 'My Code',
            items: [
              {
                name: 'GraphQL-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://www.apollographql.com/docs/apollo-server/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/apollographql/apollo-server',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/apollo-server-express',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              {
                name: 'TypeGraphQL',
                href: '/compute/typegraphql',
                domain: true,
              },
              {
                name: 'DataLoader',
                href: '/compute/dataloader',
                domain: true,
              },
              { name: 'Typescript', href: '/compute/typescript', domain: true },
              {
                name: 'TypeOrm',
                href: '/compute/postgres#typeorm',
                domain: true,
              },
              { name: 'TypeDI', href: '/compute/typedi', domain: true },
              { name: 'DI', href: '/compute/di', domain: true },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'Practices',
                href:
                  'https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a name="intro" css={anchorPos} />
            Apollo Server is an open-source, spec compliant GraphQL server
            that's compatible with any GraphQL client, including Apollo Client.
            It's the best way to build a production ready, self-documenting
            GraphQL API that can use data from any source. server that's
            compatible with any GraphQL client, including Apollo Client
            <br />
            <br />I am using
            <TextLink
              logo={<span className="icon-a" />}
              text=" Apollo server "
              href="/compute/apollo"
            />{' '}
            server in conjunction with
            <TextLink
              logo={<span className="icon-expressjs-icon" />}
              text=" express.js "
              href="/compute/express"
            />{' '}
            using the
            <TextLink
              logo={<NpmIcon />}
              text=" apollo-server-express "
              href="https://www.npmjs.com/package/apollo-server-express"
              outside
            />{' '}
            package as well as
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypeGraphQL "
              href="/compute/typegraphql"
            />{' '}
            for its
            <TextLink
              logo={<TypescriptIcon />}
              text=" TypeScript "
              href="/compute/typescript"
            />{' '}
            implementation and
            <TextLink
              logo={<span>⚙️</span>}
              text=" TypeDI "
              href="/compute/typedi"
            />{' '}
            for its
            <TextLink
              logo={<span>🧱</span>}
              text=" dependency injection "
              href="/compute/di"
            />{' '}
            capability. <br />
            <br />
            <br />
            Live Demo :{' '}
            <TextLink
              outside
              logo={<span>👁</span>}
              text=" Anime Search App "
              href="https://anime.maximefleurant.com/"
            />
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Apollo Server :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />{' '}
            </span>
          </span>
        }
        headerCode={{ code: main, language: 'language-ts' }}
        content={[]}
      />
    </>
  );
};

export default Apollo;
