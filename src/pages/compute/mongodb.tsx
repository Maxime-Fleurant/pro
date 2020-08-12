import Article from '../../common/components/Article/Article';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import { mongMain } from '../../common/components/Article/CodeBrowser/codes/mongo';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import Head from 'next/head';

const Mongodb = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>MongoDB</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'My Code',
            items: [
              {
                name: 'Mongo-Scrap',
                href: 'https://github.com/Maxime-Fleurant/Mongo-Scrap',
                outside: true,
              },
            ],
          },

          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://www.mongodb.com/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/mongodb/mongo',
                outside: true,
              },
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/MongoDB',
                outside: true,
              },
              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/mongoose',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a name="intro" css={anchorPos} />
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
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using MongoDB :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Mongo-scrap "
                href="https://github.com/Maxime-Fleurant/Mongo-Scrap"
              />{' '}
            </span>
          </span>
        }
        headerContentHeightExtra={5}
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
