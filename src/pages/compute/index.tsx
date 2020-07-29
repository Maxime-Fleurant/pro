import { Cell } from '../../common/components/Cell/cell';
import { catTitle } from '../../common/components/Category/categoryStyle';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import PassportIcon from '../../common/components/icons/Passport';
import JWTIcon from '../../common/components/icons/JWT';

import CategoryItem from '../../common/components/Category/CategoryItem';

const Compute = () => {
  return (
    <>
      <Cell
        deskPos={{ rowStart: 5, rowEnd: 7, columnStart: 5, columnEnd: 21 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div css={catTitle}>Back End</div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 5, columnEnd: 9 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 9 }}
        mobilPos={{ rowStart: 4, rowEnd: 5, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="Node"
          detail="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine"
          href="/compute/node"
          logo={<span className="icon-nodejs-icon" />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 9, columnEnd: 13 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 9, columnEnd: 17 }}
        mobilPos={{ rowStart: 5, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="ExpressJS"
          detail="Fast, unopinionated, minimalist web framework for Node.js"
          href="/compute/express"
          logo={<span className="icon-expressjs-icon" />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 13, columnEnd: 17 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 17, columnEnd: 25 }}
        mobilPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="NestJS"
          detail="A progressive Node.js framework for building efficient, reliable and scalable
          server-side applications"
          href="/compute/nest"
          logo={<span className="icon-nestjs" />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 17, columnEnd: 21 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 9 }}
        mobilPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="GraphQL"
          detail="GraphQL is a query language for your API, and a server-side runtime for executing
          queries"
          href="/compute/graphql"
          logo={<span className="icon-graphql" />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 5, columnEnd: 9 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 9, columnEnd: 17 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="Apollo"
          detail="GraphQL server for Express, Connect, Hapi, Koa and more"
          href="/compute/apollo"
          logo={<span className="icon-a" />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 9, columnEnd: 13 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 17, columnEnd: 25 }}
        mobilPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="TypeGraphQL"
          detail="Create GraphQL schema and resolvers with TypeScript, using classes and decorators"
          href="/compute/typegraphql"
          logo={<TypegraphqlIcon />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 13, columnEnd: 17 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 9 }}
        mobilPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="DataLoader"
          detail="Simplified and consistent API over various remote data sources such as databases or web
          services via batching and caching"
          href="/compute/dataloader"
          logo={<span>🧩</span>}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 17, columnEnd: 21 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 9, columnEnd: 17 }}
        mobilPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="Complexity"
          detail="GraphQL query complexity analysis and validation for graphQL"
          href="/compute/complexity"
          logo={<span>🔰</span>}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 5, columnEnd: 9 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 17, columnEnd: 25 }}
        mobilPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="DI"
          detail="Inversion of Control Containers and  Dependency Injection"
          href="/compute/di"
          logo={<span>🧱</span>}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 9, columnEnd: 13 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 9 }}
        mobilPos={{ rowStart: 13, rowEnd: 14, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="TypeDI"
          detail="Simple yet powerful dependency injection tool for JavaScript and TypeScript"
          href="/compute/typedi"
          logo={<span>⚙️</span>}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 13, columnEnd: 17 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 9, columnEnd: 17 }}
        mobilPos={{ rowStart: 14, rowEnd: 15, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="Auth"
          detail="authorization and authentication"
          href="/compute/auth"
          logo={<span>🔐</span>}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 17, columnEnd: 21 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 17, columnEnd: 25 }}
        mobilPos={{ rowStart: 15, rowEnd: 16, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="PassportJS"
          detail="Simple, unobtrusive authentication for Node.js"
          href="/compute/passport"
          logo={<PassportIcon />}
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 19, rowEnd: 23, columnStart: 5, columnEnd: 9 }}
        tabPos={{ rowStart: 13, rowEnd: 14, columnStart: 1, columnEnd: 9 }}
        mobilPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 25 }}
        ratio={1}
        relative
      >
        <CategoryItem
          name="JWT"
          detail="JSON Web Tokens, industry standard RFC 7519"
          href="/compute/jwt"
          logo={<JWTIcon />}
        />
      </Cell>
    </>
  );
};

export default Compute;
