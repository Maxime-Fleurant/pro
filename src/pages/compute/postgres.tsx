import Article from '../../common/components/Article/Article';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import PostgresIcon from '../../common/components/icons/Postgres';
import {
  postgresMain,
  mainKnex,
  objectionMain,
  typeormMain,
} from '../../common/components/Article/CodeBrowser/codes/postgres';

const Postgres = (): JSX.Element => {
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
          titleContent: 'PostgreSQL',
          logo: <PostgresIcon />,
          desc: "The World's Most Advanced Open Source Relational Database",
          wiki: 'https://en.wikipedia.org/wiki/PostgreSQL',
          official: 'https://www.postgresql.org/',
          detail: 'Database | SQL',
        }}
        headerContent={
          <span>
            PostgreSQL, also known as Postgres, is a free and open-source
            relational database management system (RDBMS) emphasizing
            extensibility and SQL compliance. It was originally named POSTGRES,
            referring to its origins as a successor to the Ingres database
            developed at the University of California, Berkeley. In 1996, the
            project was renamed to PostgreSQL to reflect its support for SQL.
            After a review in 2007, the development team decided to keep the
            name PostgreSQL and the alias Postgres.
            <br />
            <br />
            PostgreSQL features transactions with Atomicity, Consistency,
            Isolation, Durability (ACID) properties, automatically updatable
            views, materialized views, triggers, foreign keys, and stored
            procedures.It is designed to handle a range of workloads, from
            single machines to data warehouses or Web services with many
            concurrent users.
            <br />
            <br />
            You can find examples of my code using PostgreSQL in the Anime 👁
            demo project Github repository, the nest-rest-api Github repository
            and the express-rest-api Github repository.
          </span>
        }
        headerCode={{
          code: postgresMain,
          language: 'language-ts',
        }}
        content={[
          {
            header: {
              titleContent: 'Knex',
              logo: <span className="icon-knex" />,
              official: 'http://knexjs.org/',
              npm: 'https://www.npmjs.com/package/knex',
              git: 'https://github.com/knex/knex',
            },
            content: (
              <span>
                Knex.js is a "batteries included" SQL query builder for
                Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon
                Redshift designed to be flexible, portable, and fun to use. It
                features both traditional node style callbacks as well as a
                promise interface for cleaner async flow control, a stream
                interface, full featured query and schema builders, transaction
                support (with savepoints), connection pooling and standardized
                responses between different query clients and dialects.
                <br />
                <br />
                Migrations allow for you to define sets of schema changes so
                upgrading a database is a breeze.
                <br />
                <br />
                You can find examples of my code using Knex in the
                express-rest-api Github repository.
              </span>
            ),
            code: {
              language: 'language-js',
              code: mainKnex,
            },
          },
          {
            header: {
              titleContent: 'Objection',
              logo: <PostgresIcon />,
              official: 'https://vincit.github.io/objection.js/',
              npm: 'https://www.npmjs.com/package/objection',
              git: 'https://github.com/vincit/objection.js',
            },
            content: (
              <span>
                Objection.js is an ORM for Node.js that aims to stay out of your
                way and make it as easy as possible to use the full power of SQL
                and the underlying database engine while still making the common
                stuff easy and enjoyable.
                <br />
                <br />
                Even though ORM is the best commonly known acronym to describe
                objection, a more accurate description is to call it a
                relational query builder. You get all the benefits of an SQL
                query builder but also a powerful set of tools for working with
                relations.
                <br />
                <br />
                Objection.js is built on an SQL query builder called knex.
                <br />
                <br />
                You can find examples of my code using Objection in the
                express-rest-api Github repository.
              </span>
            ),
            code: {
              language: 'language-js',
              code: objectionMain,
            },
          },
          {
            header: {
              titleContent: 'TypeOrm',
              logo: <PostgresIcon />,
              official: 'https://typeorm.io/#/',
              npm: 'https://www.npmjs.com/package/typeorm',
              git: 'https://github.com/typeorm/typeorm',
            },
            content: (
              <span>
                TypeORM is an ORM that can run in NodeJS, Browser, Cordova,
                PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron
                platforms and can be used with TypeScript and JavaScript (ES5,
                ES6, ES7, ES8). Its goal is to always support the latest
                JavaScript features and provide additional features that help
                you to develop any kind of application that uses databases -
                from small applications with a few tables to large scale
                enterprise applications with multiple databases.
                <br />
                <br />
                TypeORM supports both Active Record and Data Mapper patterns,
                unlike all other JavaScript ORMs currently in existence, which
                means you can write high quality, loosely coupled, scalable,
                maintainable applications the most productive way.
                <br />
                <br />
                You can find examples of my code using TypeOrm in the Anime
                Search Github Repository project as well as in the nest-rest-api
                github repository.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: typeormMain,
            },
          },
        ]}
      />
    </>
  );
};

export default Postgres;
