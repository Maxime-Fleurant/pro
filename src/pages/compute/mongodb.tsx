import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import { mongMain } from '../../common/components/Article/CodeBrowser/codes/mongo';

const Mongodb = (): JSX.Element => {
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
          titleContent: 'MongoDB',
          logo: <MongoDbIcon />,
          desc:
            'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need',
          wiki: 'https://en.wikipedia.org/wiki/MongoDB',
          npm: 'https://www.npmjs.com/package/mongoose',
          git: 'https://github.com/mongodb/mongo',
          official: 'https://www.mongodb.com/',
          detail: 'Database | NoSQL',
        }}
        headerContent={
          <span>
            MongoDB’s document model is simple for developers to learn and use,
            while still providing all the capabilities needed to meet the most
            complex requirements at any scale.
            <br />
            <br />
            MongoDB stores data in flexible, JSON-like documents, meaning fields
            can vary from document to document and data structure can be changed
            over time.
            <br />
            <br />
            MongoDB is a distributed database at its core, so high availability,
            horizontal scaling, and geographic distribution are built in and
            easy to use.
            <br />
            <br />
            You can find examples of my code using MongoDB in the
            scrap-anime-mongodb Github repository.
          </span>
        }
        headerCode={{
          code: mongMain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default Mongodb;
