import Head from 'next/head';
import Article from '../../common/components/Article/Article';
import { neomain } from '../../common/components/Article/CodeBrowser/codes/neo4j';
import NeoIcon from '../../common/components/icons/neo';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Neo = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Neo4j</title>
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
                name: 'Neo4j-Scrap',
                href: 'https://github.com/Maxime-Fleurant/Neo4j-Scrap',
                outside: true,
              },
            ],
          },

          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://neo4j.com/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/neo4j/neo4j',
                outside: true,
              },
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Neo4j',
                outside: true,
              },
              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/neo4j-driver',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a id="intro" css={anchorPos} />
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
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using MongoDB :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Neo4j-Scrap "
                href="https://github.com/Maxime-Fleurant/Neo4j-Scrap"
              />{' '}
            </span>
          </span>
        }
        headerContentHeightExtra={5}
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
