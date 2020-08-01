import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { Cell } from '../../common/components/Cell/cell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import {
  mainText,
  insideLink,
} from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';
import PostgresIcon from '../../common/components/icons/Postgres';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import JWTIcon from '../../common/components/icons/JWT';
import CodeBrowser from '../../common/components/Article/CodeBrowser/CodeBrowser';
import {
  expressMain,
  expressJwt,
  expressModel,
} from '../../common/components/Article/CodeBrowser/codes/express';

const Express = () => {
  return (
    <>
      <ArticleNavigation
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
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 7, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Express"
          logo={<span className="icon-expressjs-icon" />}
          desc="Fast, unopinionated, minimalist web framework for Node.js"
          wiki="https://en.wikipedia.org/wiki/Express.js"
          npm="https://www.npmjs.com/package/express"
          official="https://expressjs.com/"
          git="https://github.com/expressjs/express"
          detail="Api | Rest"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 16, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Express is a minimal and flexible Node.js web application framework
          that provides a robust set of features for
          <a css={insideLink}>{` web `} 🖥 </a>
          and <a css={insideLink}>{` mobile `} 📱</a> applications. With a
          myriad of HTTP utility methods and middleware at your disposal,
          creating a robust API is quick and easy. Express provides a thin layer
          of fundamental web application features, without obscuring
          <a css={insideLink}>
            {` Node.js `} <span className="icon-nodejs-icon" />{' '}
          </a>
          features.
          <br />
          <br />I use the
          <a css={insideLink}>
            {` Express `} <span className="icon-expressjs-icon" />{' '}
          </a>
          js framework to quickly develop REST APIs in conjunction with a
          variety of different tools depending on the database used.
          <a css={insideLink}>
            {` Knex `} <span className="icon-knex" />{' '}
          </a>
          / Objection for
          <a css={insideLink}>
            {` PostgresQL `} <PostgresIcon />
          </a>
          , Mongoose for
          <a css={insideLink}>
            {` Mongodb `} <MongoDbIcon />
          </a>
          . Input validation is handled by
          <a css={insideLink}>
            {` Celebrate / Joi `} <NpmIcon />
          </a>
          , Auth using
          <a css={insideLink}>
            {` JWT `} <JWTIcon />{' '}
          </a>
          tokens and config using <a css={insideLink}>{` .Env`}</a>
          . The structure of my Express projects follows the 3 layer pattern to
          achieve separation of concerns by moving the business logic away from
          the node.js API Routes.
          <br />
          <br />
          You can find examples of my code using express in the{' '}
          <a css={insideLink}>
            {` Github anime api
          rest postgres `}{' '}
            <span className="icon-github-filled" />{' '}
          </a>
          repository.
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 15, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language="language-js" code={expressMain} />
      </Cell>
    </>
  );
};

export default Express;
