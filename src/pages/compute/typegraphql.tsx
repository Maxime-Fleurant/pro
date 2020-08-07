import Article from '../../common/components/Article/Article';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import {
  typegraphMain,
  typegraphSchema,
  typegraphResolvers,
  graphGenericResolv,
  graphAuth,
  graphValidation,
  graphComplexity,
} from '../../common/components/Article/CodeBrowser/codes/typegrahql';
import TextLink from '../../common/components/Article/textLink/TextLink';
import TypescriptIcon from '../../common/components/icons/Typescript';
import NpmIcon from '../../common/components/icons/Npm';
import PostgresIcon from '../../common/components/icons/Postgres';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import PassportIcon from '../../common/components/icons/Passport';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const TypeGraphql = () => {
  return (
    <>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Schema', href: '#schema' },
              { name: 'Resolvers', href: '#resolvers' },
              { name: 'Generic', href: '#generic' },
              { name: 'Auth', href: '#auth' },
              { name: 'Validation', href: '#validation' },
              { name: 'Complexity', href: '#complexity' },
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
                href: 'https://typegraphql.com/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/MichalLytek/type-graphql',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/type-graphql',
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
              { name: 'TypeDI', href: '/compute/typedi', domain: true },
              { name: 'DRY', href: '/compute/dry', domain: true },
              { name: 'DI', href: '/compute/di', domain: true },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'MetaProgramming',
                href:
                  'http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4',
                outside: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'TypeGraphQL',
          logo: <TypegraphqlIcon />,
          desc:
            'Create GraphQL schema and resolvers with TypeScript, using classes and decorators',
          npm: 'https://www.npmjs.com/package/type-graphql',
          official: 'https://typegraphql.com/',
          git: 'https://github.com/MichalLytek/type-graphql',
          detail: 'Typescript | GraphQL',
        }}
        headerContent={
          <span>
            <a name="intro" css={anchorPos} />
            TypeGraphQL is a library that makes the process of developing
            GraphQL API using
            <TextLink
              logo={<TypescriptIcon />}
              text=" Typescript "
              href="/compute/typescript"
            />{' '}
            enjoyable by defining the schema using only classes and a bit of
            decorator magic.
            <br />
            <br />
            The main idea is to have only one source of truth by defining the
            schema using classes and a bit of decorator help.
            <br />
            <br /> Additional features like
            <TextLink
              logo={<span>🧱</span>}
              text=" dependency injection "
              href="/compute/di"
            />
            , validation and auth guards help with common tasks that would
            normally have to be handled by ourselves.
            <br />
            <br />I am using Type GraphQL to make it easier for me to develop
            Graphql APIs using Typescript. No need to define schemas in two
            places while keeping the Type safety that Typescript gives us.
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypeGraphQL "
              href="/compute/typegraphql"
            />{' '}
            integrate perfectly with TypeStack packages such as
            <TextLink
              logo={<span>⚙️</span>}
              text=" TypeDI "
              href="/compute/typedi"
            />{' '}
            for its dependency injection system,
            <TextLink
              logo={<NpmIcon />}
              text=" ClassValidator "
              href="https://www.npmjs.com/package/class-validator"
              outside
            />{' '}
            for the verification of request inputs and
            <TextLink
              logo={<span />}
              text=" TypeOrm "
              href="/compute/postgres#typeorm"
            />{' '}
            for the interaction with a
            <TextLink
              logo={<PostgresIcon />}
              text=" PostgreSQL "
              href="/compute/postgres"
            />{' '}
            database. My TypeGraphQL projects use
            <TextLink
              logo={<span className="icon-a" />}
              text=" Apollo server "
              href="/compute/apollo"
            />{' '}
            as their Graphql engine.
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
              my code using TypeGraphQL :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />{' '}
            </span>
          </span>
        }
        headerCode={{ code: typegraphMain, language: 'language-ts' }}
        content={[
          {
            header: {
              titleContent: 'Schema Definition',
              logo: <TypegraphqlIcon />,
              official: 'https://typegraphql.com/docs/types-and-fields.html',
            },
            content: (
              <span>
                <a name="schema" css={anchorPos} />
                TypeGraphQL is a framework for building GraphQL APIs with
                Node.js and
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />
                . The main purpose of this tool is to let us define our schema
                directly from our TypeScript code.
                <TextLink
                  logo={<span />}
                  text=" TypeOrm "
                  href="/compute/postgres#typeorm"
                />
                , on the other hand, is a TypeScript library that allows us to
                interact with SQL databases.
                <br />
                <br /> With these tools combined, we can build a type-safe
                GraphQL API without the frustrations that usually come with such
                a project.
                <br />
                <br />
                With the combination of these two tools we can define the
                <TextLink
                  logo={<PostgresIcon />}
                  text=" PostgresQL "
                  href="/compute/postgres"
                />{' '}
                model and the GraphQL Schema in the same file using the
                decorators that correspond to each package.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeGraphQL Schema Definition :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" GraphQL-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: typegraphSchema,
            },
          },
          {
            header: {
              titleContent: 'Resolvers',
              logo: <TypegraphqlIcon />,
              official: 'https://typegraphql.com/docs/resolvers.html',
            },
            content: (
              <span>
                <a name="resolvers" css={anchorPos} />
                Besides declaring GraphQL's object types, TypeGraphQL allows us
                to easily create queries, mutations and field resolvers - like
                normal class methods, similar to REST controllers in frameworks
                like Java Spring, .NET Web API or
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />{' '}
                routing-controllers.
                <br />
                <br />
                Usually, queries have some arguments - it might be the id of a
                resource, a search phrase or pagination settings.
                <TextLink
                  logo={<TypegraphqlIcon />}
                  text=" TypeGraphQL "
                  href="/compute/typegraphql"
                />{' '}
                allows you to define arguments in two ways.
                <br />
                <br /> First is the inline method using the @Arg() decorator.
                The drawback is the need to repeating the argument name (due to
                a limitation of the reflection system) in the decorator
                parameter.
                <br />
                <br />
                This works well when there are 2 - 3 args. But when you have
                many more, the resolver's method definitions become bloated. In
                this case we can use a class definition to describe the
                arguments. It looks like the object type class but it has the
                @ArgsType() decorator on top.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeGraphQL Resolvers :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" GraphQL-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: typegraphResolvers,
            },
          },
          {
            header: {
              titleContent: 'Generic Resolvers',
              logo: <TypegraphqlIcon />,
              official:
                'https://typegraphql.com/docs/inheritance.html#resolver-inheritance',
            },
            content: (
              <span>
                <a name="generic" css={anchorPos} />
                A special kind of inheritance in
                <TextLink
                  logo={<TypegraphqlIcon />}
                  text=" TypeGraphQL "
                  href="/compute/typegraphql"
                />{' '}
                is resolver class inheritance. This pattern allows us e.g. to
                create a base CRUD resolver class for our resource/entity, so we
                don't have to repeat common boilerplate code and respect the
                <TextLink
                  logo={<span>🌵</span>}
                  text=" DRY "
                  href="/compute/dry"
                />{' '}
                patterns. <br />
                <br />
                Since we need to generate unique query/mutation names, we have
                to create a factory function for our base class.
                <br />
                <br />
                The factory should take a parameter that we can use to generate
                the query/mutation names, as well as the type that we would
                return from the resolvers.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeGraphQL Generics Resolvers :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" GraphQL-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: graphGenericResolv,
            },
          },
          {
            header: {
              titleContent: 'Auth',
              logo: <TypegraphqlIcon />,
              official: 'https://typegraphql.com/docs/authorization.html',
            },
            content: (
              <span>
                <a name="auth" css={anchorPos} />
                Authorization is a core feature used in almost all APIs.
                Sometimes we want to restrict data access or actions for a
                specific group of users.
                <br />
                <br />
                In
                <TextLink
                  logo={<span className="icon-expressjs-icon" />}
                  text=" express.js "
                  href="/compute/express"
                />{' '}
                (and other Node.js frameworks) we use middleware for this, like
                <TextLink
                  logo={<PassportIcon />}
                  text=" passport.js "
                  href="/compute/passport"
                />{' '}
                or the custom ones. However, in GraphQL's resolver architecture
                we don't have middleware so we have to imperatively call the
                auth checking function and manually pass context data to each
                resolver, which might be a bit tedious.
                <br />
                <br />
                That's why authorization is a first-class feature in TypeGraphQL
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeGraphQL Auth :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" GraphQL-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: graphAuth,
            },
          },
          {
            header: {
              titleContent: 'Input Validation',
              logo: <TypegraphqlIcon />,
              official: 'https://typegraphql.com/docs/validation.html',
            },
            content: (
              <span>
                <a name="validation" css={anchorPos} />
                The standard way to ensure that inputs and arguments are
                correct, such as an email field that really contains a proper
                e-mail address, is to use custom scalars e.g. GraphQLEmail from
                graphql-custom-types. However, creating scalars for all single
                cases of data types (credit card number, base64, IP, URL) might
                be cumbersome.
                <br />
                <br />
                That's why TypeGraphQL has built-in support for argument and
                input validation by using the
                <TextLink
                  logo={<NpmIcon />}
                  text=" class-validator "
                  href="https://www.npmjs.com/package/class-validator"
                  outside
                />{' '}
                library! We can use the awesomeness of
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" decorators "
                  href="/compute/typescript#decorators"
                />{' '}
                to easily declare the requirements for incoming data (e.g. a
                number is in the range 0-255 or a password that is longer than 8
                characters).
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeGraphQL validation :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" GraphQL-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: graphValidation,
            },
          },
          {
            header: {
              titleContent: 'Query Complexity',
              logo: <TypegraphqlIcon />,
              official: 'https://typegraphql.com/docs/complexity.html',
            },
            content: (
              <span>
                <a name="complexity" css={anchorPos} />
                A single GraphQL query can potentially generate a huge workload
                for a server, like thousands of database operations which can be
                used to cause DDoS attacks. In order to limit and keep track of
                what each GraphQL operation can do, TypeGraphQL provides the
                option of integrating with Query Complexity tools like
                <TextLink
                  logo={<NpmIcon />}
                  text=" graphql-query-complexity "
                  href="https://www.npmjs.com/package/graphql-query-complexity"
                  outside
                />{' '}
                .
                <br />
                <br />
                This cost analysis-based solution is very promising, since we
                can define a “cost” per field and then analyze the AST to
                estimate the total cost of the GraphQL query. Of course all the
                analysis is handled by graphql-query-complexity.
                <br />
                <br /> All we must do is define our complexity cost for the
                fields, mutations or subscriptions in TypeGraphQL and implement
                graphql-query-complexity in whatever GraphQL server that is
                being used.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeGraphQL Complexity :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" GraphQL-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: graphComplexity,
            },
          },
        ]}
      />
    </>
  );
};

export default TypeGraphql;
