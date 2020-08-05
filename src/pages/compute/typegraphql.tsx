import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { main } from '../../common/components/Article/CodeBrowser/codes/apollo';
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

const TypeGraphql = () => {
  return (
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
          TypeGraphQL is a library that makes the process of developing GraphQL
          API using Typescript enjoyable by defining the schema using only
          classes and a bit of decorator magic.
          <br />
          <br />
          The main idea is to have only one source of truth by defining the
          schema using classes and a bit of decorator help.
          <br />
          <br /> Additional features like dependency injection, validation and
          auth guards help with common tasks that would normally have to be
          handled by ourselves.
          <br />
          <br />I am using Type GraphQL to make it easier for me to develop
          Graphql APIs using Typescript. No need to define schemas in two places
          while keeping the Type safety that Typescript gives us. TypeGraphQL
          integrate perfectly with TypeStack packages such as TypeDI for its
          dependency injection system, ClassValidator for the verification of
          request inputs and TypeOrm for the interaction with a PostgresQL
          database. My TypeGraphQL projects use Apollo server as their Graphql
          engine.
          <br />
          <br />
          You can find examples of my code using TypeGraphQL in the
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
              TypeGraphQL is a framework for building GraphQL APIs with Node.js
              and TypeScript. The main purpose of this tool is to let us define
              our schema directly from our TypeScript code. TypeORM, on the
              other hand, is a TypeScript library that allows us to interact
              with SQL databases.
              <br />
              <br /> With these tools combined, we can build a type-safe GraphQL
              API without the frustrations that usually come with such a
              project.
              <br />
              <br />
              With the combination of these two tools we can define the
              PostgresQL model and the GraphQL Schema in the same file using the
              decorators that correspond to each package.
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
              Besides declaring GraphQL's object types, TypeGraphQL allows us to
              easily create queries, mutations and field resolvers - like normal
              class methods, similar to REST controllers in frameworks like Java
              Spring, .NET Web API or TypeScript routing-controllers.
              <br />
              <br />
              Usually, queries have some arguments - it might be the id of a
              resource, a search phrase or pagination settings. TypeGraphQL
              allows you to define arguments in two ways.
              <br />
              <br /> First is the inline method using the @Arg() decorator. The
              drawback is the need to repeating the argument name (due to a
              limitation of the reflection system) in the decorator parameter.
              <br />
              <br />
              This works well when there are 2 - 3 args. But when you have many
              more, the resolver's method definitions become bloated. In this
              case we can use a class definition to describe the arguments. It
              looks like the object type class but it has the @ArgsType()
              decorator on top.
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
              A special kind of inheritance in TypeGraphQL is resolver class
              inheritance. This pattern allows us e.g. to create a base CRUD
              resolver class for our resource/entity, so we don't have to repeat
              common boilerplate code. <br />
              <br />
              Since we need to generate unique query/mutation names, we have to
              create a factory function for our base class.
              <br />
              <br />
              The factory should take a parameter that we can use to generate
              the query/mutation names, as well as the type that we would return
              from the resolvers.
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
              Authorization is a core feature used in almost all APIs. Sometimes
              we want to restrict data access or actions for a specific group of
              users.
              <br />
              <br />
              In express.js (and other Node.js frameworks) we use middleware for
              this, like passport.js or the custom ones. However, in GraphQL's
              resolver architecture we don't have middleware so we have to
              imperatively call the auth checking function and manually pass
              context data to each resolver, which might be a bit tedious.
              <br />
              <br />
              That's why authorization is a first-class feature in TypeGraphQL
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
              The standard way to ensure that inputs and arguments are correct,
              such as an email field that really contains a proper e-mail
              address, is to use custom scalars e.g. GraphQLEmail from
              graphql-custom-types. However, creating scalars for all single
              cases of data types (credit card number, base64, IP, URL) might be
              cumbersome.
              <br />
              <br />
              That's why TypeGraphQL has built-in support for argument and input
              validation by using the class-validator library! We can use the
              awesomeness of decorators to easily declare the requirements for
              incoming data (e.g. a number is in the range 0-255 or a password
              that is longer than 8 characters).
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
              A single GraphQL query can potentially generate a huge workload
              for a server, like thousands of database operations which can be
              used to cause DDoS attacks. In order to limit and keep track of
              what each GraphQL operation can do, TypeGraphQL provides the
              option of integrating with Query Complexity tools like
              graphql-query-complexity.
              <br />
              <br />
              This cost analysis-based solution is very promising, since we can
              define a “cost” per field and then analyze the AST to estimate the
              total cost of the GraphQL query. Of course all the analysis is
              handled by graphql-query-complexity.
              <br />
              <br /> All we must do is define our complexity cost for the
              fields, mutations or subscriptions in TypeGraphQL and implement
              graphql-query-complexity in whatever GraphQL server that is being
              used.
            </span>
          ),
          code: {
            language: 'language-ts',
            code: graphComplexity,
          },
        },
      ]}
    />
  );
};

export default TypeGraphql;
