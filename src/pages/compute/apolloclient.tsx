import Article from '../../common/components/Article/Article';
import {
  reduxMain,
  reduxTypescript,
  reduxContainer,
} from '../../common/components/Article/CodeBrowser/codes/redux';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  acmain,
  acgcg,
} from '../../common/components/Article/CodeBrowser/codes/apolloclient';

const Redux = (): JSX.Element => {
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
                href: 'https://github.com/expressjs/express',
                outside: true,
              },
              {
                name: 'Official Website',
                href: 'https://expressjs.com/',
                outside: true,
              },
              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/express',
                outside: true,
              },
              {
                name: 'Wikipedia',
                href: 'https://en.wikipedia.org/wiki/Express.js',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              { name: 'Node', href: '/compute/node', domain: true },
              { name: 'JWT', href: '/compute/jwt', domain: true },
              { name: 'Knex', href: '/compute/knex', domain: true },
            ],
          },
        ]}
      /> */}

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
            Apollo Client is a comprehensive state management library for
            JavaScript that enables you to manage both local and remote data
            with GraphQL. Use it to fetch, cache, and modify application data,
            all while automatically updating your UI.
            <br />
            <br />
            Apollo Client helps you structure code in an economical,
            predictable, and declarative way that's consistent with modern
            development practices. The core @apollo/client library provides
            built-in integration with React, and the larger Apollo community
            maintains integrations for other popular view layers.
            <br />
            <br />
            You can find examples of my code using Redux in the Anime 👁 demo
            project Github repository
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
                GraphQL Code Generator is a CLI tool that can generate
                TypeScript typings out of a GraphQL schema. When we develop a
                GraphQL backend, there would be many instances where we would
                find ourselves writing the same things which are already
                described by the GraphQL schema, only in a different format; for
                example: resolver signatures, MongoDB models, Angular services
                etc.
                <br />
                <br />
                GraphQL Code Generator was built to address exactly that. By
                analyzing the schema and parsing it, GraphQL Code Generator can
                output code at a wide variety of formats, based on pre-defined
                plugins or based on custom user-defined ones. Regardless of the
                language that you're using, GraphQL Code Generator got you
                covered.
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
