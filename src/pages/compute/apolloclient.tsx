import Head from 'next/head';
import Article from '../../common/components/Article/Article';

import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  acmain,
  acgcg,
} from '../../common/components/Article/CodeBrowser/codes/apolloclient';
import TextLink from '../../common/components/Article/textLink/TextLink';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import PostgresIcon from '../../common/components/icons/Postgres';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Redux = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Apollo Client</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Type Graph Gen', href: '#codeGen' },
            ],
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
                name: 'Next-Anime',
                href: 'https://github.com/Maxime-Fleurant/Next-React-Anime-App',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://www.apollographql.com/docs/react/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/apollographql/apollo-client',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/@apollo/client',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              { name: 'PostgreSQL', href: '/compute/postgres', domain: true },
              { name: 'Typescript', href: '/compute/typescript', domain: true },
              {
                name: 'TypeOrm',
                href: '/compute/postgres#typeorm',
                domain: true,
              },
              { name: 'Apollo', href: '/compute/apollo', domain: true },
              { name: 'React', href: '/compute/react', domain: true },
              { name: 'Next', href: '/compute/next', domain: true },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'Apollo Client',
          logo: <span className="icon-a" />,
          desc:
            "Manage the entirety of your React app's state and seamlessly execute GraphQL operations.",
          npm: 'https://www.npmjs.com/package/@apollo/client',
          official: 'https://www.apollographql.com/docs/react/',
          git: 'https://github.com/apollographql/apollo-client',
          detail: 'React | GraphQL',
        }}
        headerContent={
          <span>
            <TextLink
              logo={<span className="icon-a" />}
              text=" Apollo Client "
              href="/compute/apolloclient"
            />{' '}
            is a comprehensive state management library for JavaScript that
            enables you to manage both local and remote data with GraphQL. Use
            it to fetch, cache, and modify application data, all while
            automatically updating your UI.
            <br />
            <br />
            Apollo Client helps you structure code in an economical,
            predictable, and declarative way that's consistent with modern
            development practices. The core @apollo/client library provides
            built-in integration with
            <TextLink
              logo={<span className="icon-react" />}
              text=" React "
              href="/compute/react"
            />
            , and the larger Apollo community maintains integrations for other
            popular view layers.
            <br />
            <br />I use Apollo Client in all my React /
            <TextLink
              logo={<span className="icon-next-js" />}
              text=" Next "
              href="/compute/next"
            />{' '}
            projects when I need to fetch data from a Rest or GraphQL API. My
            favorite stack is to use
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypeGraphQL "
              href="/compute/typegraphql"
            />{' '}
            to create a GraphQL API that interacts with a
            <TextLink
              logo={<PostgresIcon />}
              text=" PostgreSQL "
              href="/compute/postgres"
            />{' '}
            database using
            <TextLink
              logo={<span />}
              text=" TypeOrm "
              href="/compute/postgres#typeorm"
            />{' '}
            and use Apollo Client to consume this API.
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
              my code using Apollo Client :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Next-React-Anime-App "
                href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
              />{' '}
            </span>
          </span>
        }
        headerCode={{
          code: acmain,
          language: 'language-ts',
        }}
        content={[
          {
            header: {
              titleContent: 'GraphQL types with GraphQL Code Gen',
              logo: <TypescriptIcon />,
              official: 'https://graphql-code-generator.com/',
            },
            content: (
              <span>
                <a id="codeGen" css={anchorPos} />
                GraphQL Code Generator is a CLI tool that can generate
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />{' '}
                typings out of a GraphQL schema. When we develop a GraphQL
                backend, there would be many instances where we would find
                ourselves writing the same things which are already described by
                the GraphQL schema, only in a different format; for example:
                resolver signatures,
                <TextLink
                  logo={<MongoDbIcon />}
                  text=" MongoDB "
                  href="/compute/mongodb"
                />{' '}
                models, Angular services etc.
                <br />
                <br />
                GraphQL Code Generator was built to address exactly that. By
                analyzing the schema and parsing it, GraphQL Code Generator can
                output code at a wide variety of formats, based on pre-defined
                plugins or based on custom user-defined ones. Regardless of the
                language that you're using, GraphQL Code Generator got you
                covered.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using CodeGen :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Next-React-Anime-App "
                    href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: acgcg,
            },
          },
        ]}
      />
    </>
  );
};

export default Redux;
