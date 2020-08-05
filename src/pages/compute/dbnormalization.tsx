import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';

const JWT = (): JSX.Element => {
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
          titleContent: 'Database Normalization',
          logo: <span>💾</span>,
          desc:
            'Database normalization is the process of structuring a relational databasein accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity',
          wiki: 'https://en.wikipedia.org/wiki/Database_normalization',
          detail: 'Pattern | Database',
        }}
        headerContent={
          <span>
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
            You can find examples of my code using Normalized Database in the
            Anime 👁 demo project Github repository
          </span>
        }
        headerCode={{
          code: drymain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default JWT;
