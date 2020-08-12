import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { normMain } from '../../common/components/Article/CodeBrowser/codes/norm';
import Head from 'next/head';

const JWT = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Normalization</title>
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
                name: 'Nest-Rest',
                href: 'https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api',
                outside: true,
              },
              {
                name: 'GraphQL-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
              {
                name: 'Express-Rest',
                href:
                  'https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Database_normalization',
                outside: true,
              },
            ],
          },

          {
            name: 'Related',
            items: [
              {
                name: 'PostgreSQL',
                href: '/compute/postgres',
                domain: true,
              },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'Normalization',
                href:
                  'https://www.lucidchart.com/pages/database-diagram/database-design',
                outside: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'Database Normalization',
          logo: <span>💾</span>,
          desc:
            'Database normalization is the process of structuring a relational databasein accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity',
          wiki: 'https://en.wikipedia.org/wiki/Database_normalization',
          detail: 'Pattern | Database',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            Once you have a preliminary design for your database, you can apply
            normalization rules to make sure the tables are structured
            correctly. Think of these rules as the industry standards.
            <br />
            <br />
            The first normal form (abbreviated as 1NF) specifies that each cell
            in the table can have only one value, never a list of values.
            <br />
            <br />
            The second normal form (2NF) mandates that each of the attributes
            should be fully dependent on the entire primary key. That means each
            attribute should depend directly on the primary key, rather than
            indirectly through some other attribute..
            <br />
            <br />
            The third normal form (3NF) adds to these rules the requirement that
            every non-key column be independent of every other column. If
            changing a value in one non-key column causes another value to
            change, that table does not meet the third normal form.
            <br />
            <br />
            Live Demo :{' '}
            <TextLink
              outside
              logo={<span>👁</span>}
              text=" Anime Search App "
              href="https://anime.maximefleurant.com/"
            />{' '}
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Normalization :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />{' '}
              /
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />{' '}
              /
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Express-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres"
              />
            </span>
          </span>
        }
        headerCode={{
          code: normMain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default JWT;
