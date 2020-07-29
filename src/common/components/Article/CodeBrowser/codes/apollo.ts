export const main = `
<Cell
deskPos={{ rowStart: 8, rowEnd: 15, columnStart: 5, columnEnd: 13 }}
tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
>
  <div css={mainText}>
    Apollo Server is an open-source, spec compliant
    <a css={insideLink}>
      {\` GraphQL \`} <span className="icon-graphql" />{' '}
    </a>
    server that's compatible with any GraphQL client, including Apollo Client.
    It's the best way to build a production ready, self-documenting GraphQL API
    that can use data from any source. server that's compatible with any GraphQL
    client, including Apollo Client
    <br />
    <br />I am using
    <a css={insideLink}>
      {\` Apollo \`} <span className="icon-a" />{' '}
    </a>
    server in conjunction with
    <a css={insideLink}>
      {\` ExpressJS \`} <span className="icon-expressjs-icon" />{' '}
    </a>
    using the
    <a css={insideLink}>
      {\` apollo-server-express \`} <NpmIcon />{' '}
    </a>
    package as well as
    <a css={insideLink}>
      {\` Typegraphql \`} <TypegraphqlIcon />{' '}
    </a>
    for its
    <a css={insideLink}>
      {\` Typescript \`} <TypescriptIcon />{' '}
    </a>
    implementation and
    <a css={insideLink}>
      {\` TypeDi \`} <span>⚙️</span>{' '}
    </a>
    for its dependency injection capability. <br />
    <br /> You can find examples of my code using Apollo server in the
    <a css={insideLink}>
      {\` Anime \`} <span>👁</span>{' '}
    </a>
    demo project
    <a css={insideLink}>
      {\` Github \`} <span className="icon-github-filled" />{' '}
    </a>
    repository
  </div>
</Cell>;

`;
