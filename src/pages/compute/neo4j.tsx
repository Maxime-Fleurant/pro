import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import { mongMain } from '../../common/components/Article/CodeBrowser/codes/mongo';
import { neomain } from '../../common/components/Article/CodeBrowser/codes/neo4j';
import NeoIcon from '../../common/components/icons/neo';

const Neo = (): JSX.Element => {
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
          titleContent: 'Neo4j',
          logo: <NeoIcon />,
          desc: 'The Native Graph Database for Today’s Connected Applications',
          wiki: 'https://en.wikipedia.org/wiki/Neo4j',
          npm: 'https://www.npmjs.com/package/neo4j-driver',
          git: 'https://github.com/neo4j/neo4j',
          official: 'https://neo4j.com/',
          detail: 'Database | Graph',
        }}
        headerContent={
          <span>
            Neo4j is a highly scalable native graph database, purpose-built to
            leverage not only data but also data relationships.
            <br />
            <br />
            Using Neo4j, developers build intelligent applications that traverse
            today's large, interconnected datasets in real time.
            <br />
            <br /> Powered by a native graph storage and processing engine,
            Neo4j delivers an intuitive, flexible and secure database for
            unique, actionable insights.
            <br />
            <br />
            You can find examples of my code using Neo4j in the
            scrap-anime-neo4j Github repository.
          </span>
        }
        headerCode={{
          code: neomain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default Neo;
