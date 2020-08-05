import { mainDataload } from '../../common/components/Article/CodeBrowser/codes/dataloader';
import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';

const DataLoader = () => {
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
          titleContent: 'DataLoader',
          logo: <span>🧩</span>,
          desc:
            'Simplified and consistent API over various remote data sources such as databases or web services via batching and caching',
          npm: 'https://www.npmjs.com/package/dataloader',
          official: 'https://github.com/graphql/dataloader',
          git: 'https://github.com/graphql/dataloader',
          detail: 'GraphQL | Tool',
        }}
        headerContent={
          <span>
            DataLoader is a generic utility to be used as part of your
            application's data fetching layer to provide a simplified and
            consistent API over various remote data sources such as databases or
            web services via batching and caching.
            <br />
            <br />A port of the "Loader" API originally developed by @schrockn
            at Facebook in 2010 as a simplifying force to coalesce the sundry
            key-value store back-end APIs which existed at the time. At
            Facebook, "Loader" became one of the implementation details of the
            "Ent" framework, a privacy-aware data entity loading and caching
            layer within web server product code. This ultimately became the
            underpinning for Facebook's GraphQL server implementation and type
            definitions.
            <br />
            <br /> DataLoader is a simplified version of this original idea
            implemented in JavaScript for Node.js services. DataLoader is often
            used when implementing a graphql-js service, though it is also
            broadly useful in other situations. <br />
            <br />
            You can find examples of my code using Apollo server in the
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
        headerCode={{ code: mainDataload, language: 'language-js' }}
        content={[]}
      />
    </>
  );
};

export default DataLoader;
