import { mainDataload } from '../../common/components/Article/CodeBrowser/codes/dataloader';
import Head from 'next/head';
import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const DataLoader = () => {
  return (
    <>
      <Head>
        <title>DataLoader</title>
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
                href: 'https://github.com/graphql/dataloader',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/graphql/dataloader',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/dataloader',
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
              {
                name: 'TypeGraphQL',
                href: '/compute/typegraphql',
                domain: true,
              },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'N+1',
                href:
                  'https://blog.logrocket.com/designing-graphql-server-optimal-performance/',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a id="intro" css={anchorPos} />
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
            Live Demo :{' '}
            <TextLink
              outside
              logo={<span>👁</span>}
              text=" Anime Search App "
              href="https://anime.maximefleurant.com/"
            />
            <br />
            <br />
            When I develop a graphql project using
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypeGraphQL "
              href="/compute/typegraphql"
            />{' '}
            I use Dataloader to solve the N + 1 problem.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using DataLoader :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />{' '}
            </span>
          </span>
        }
        headerCode={{
          code: mainDataload,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default DataLoader;
