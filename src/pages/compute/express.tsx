import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import NpmIcon from '../../common/components/icons/Npm';
import PostgresIcon from '../../common/components/icons/Postgres';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import JWTIcon from '../../common/components/icons/JWT';
import { expressMain } from '../../common/components/Article/CodeBrowser/codes/express';
import Article from '../../common/components/Article/Article';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  anchorPos,
  githubLinkCaption,
} from '../../common/components/Layout/style';
import Head from 'next/head';

const Express = () => {
  return (
    <>
      <Head>
        <title>Express</title>
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
                name: 'Official Website',
                href: 'https://expressjs.com/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/expressjs/express',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/express',
                outside: true,
              },
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Express.js',
                outside: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'Express',
          logo: <span className="icon-expressjs-icon" />,
          desc: 'Fast, unopinionated, minimalist web framework for Node.js',
          npm: 'https://www.npmjs.com/package/express',
          official: 'https://expressjs.com/',
          git: 'https://github.com/expressjs/express',
          wiki: 'https://en.wikipedia.org/wiki/Express.js',
          detail: 'Api | Rest',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web and mobile
            applications. With a myriad of HTTP utility methods and middleware
            at your disposal, creating a robust API is quick and easy. Express
            provides a thin layer of fundamental web application features,
            without obscuring Node.js features.
            <br />
            <br />I use the
            <TextLink
              logo={<span className="icon-expressjs-icon" />}
              text=" Express "
              href="/compute/express"
            />{' '}
            js framework to quickly develop REST APIs in conjunction with a
            variety of different tools depending on the database used.
            <TextLink
              logo={<span className="icon-knex" />}
              text=" Knex "
              href="/compute/postgres#knex"
            />{' '}
            /
            <TextLink
              logo={<span />}
              text=" Objection "
              href="/compute/postgres#objection"
            />{' '}
            for
            <TextLink
              logo={<PostgresIcon />}
              text=" PostgresQL "
              href="/compute/postgres"
            />
            , Mongoose for
            <TextLink
              logo={<MongoDbIcon />}
              text=" Mongodb "
              href="/compute/mongodb"
            />
            . Input validation is handled by
            <TextLink
              logo={<NpmIcon />}
              text=" Celebrate / Joi "
              href="https://www.npmjs.com/package/celebrate"
              outside
            />
            , Auth using
            <TextLink
              logo={<JWTIcon />}
              text=" JWT "
              href="/compute/jwt"
            />{' '}
            tokens and config using .Env . The structure of my Express projects
            follows the
            <TextLink
              logo={<span>🥪</span>}
              text=" 3-layer "
              href="/compute/3layer"
            />{' '}
            pattern to achieve separation of concerns by moving the business
            logic away from the node.js API Routes.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Express :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Express-Rest-Anime-Api Github "
                href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres"
              />{' '}
              repository
            </span>
          </span>
        }
        headerCode={{ code: expressMain, language: 'language-js' }}
        content={[]}
      />
    </>
  );
};

export default Express;
