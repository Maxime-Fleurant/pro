import Article from '../../common/components/Article/Article';
import PostgresIcon from '../../common/components/icons/Postgres';
import {
  postgresMain,
  mainKnex,
  objectionMain,
  typeormMain,
} from '../../common/components/Article/CodeBrowser/codes/postgres';
import {
  anchorPos,
  githubLinkCaption,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import TextLink from '../../common/components/Article/textLink/TextLink';
import TypescriptIcon from '../../common/components/icons/Typescript';
import Head from 'next/head';

const Postgres = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Postgres</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Knex', href: '#knex' },
              { name: 'Objection', href: '#objection' },
              { name: 'TypeOrm', href: '#typeorm' },
            ],
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
                name: 'Official Website',
                href: 'https://www.postgresql.org/',
                outside: true,
              },
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/PostgreSQL',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              {
                name: 'Normalization',
                href: '/compute/dbnormalization',
                domain: true,
              },
              { name: 'Typescript', href: '/compute/typescript', domain: true },
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
          titleContent: 'PostgreSQL',
          logo: <PostgresIcon />,
          desc: "The World's Most Advanced Open Source Relational Database",
          wiki: 'https://en.wikipedia.org/wiki/PostgreSQL',
          official: 'https://www.postgresql.org/',
          detail: 'Database | SQL',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            PostgreSQL, also known as Postgres, is a free and open-source
            relational database management system (RDBMS) emphasizing
            extensibility and SQL compliance. It was originally named POSTGRES,
            referring to its origins as a successor to the Ingres database
            developed at the University of California, Berkeley. In 1996, the
            project was renamed to
            <TextLink
              logo={<PostgresIcon />}
              text=" PostgreSQL "
              href="/compute/postgres"
            />{' '}
            to reflect its support for SQL. After a review in 2007, the
            development team decided to keep the name PostgreSQL and the alias
            Postgres.
            <br />
            <br />
            PostgreSQL features transactions with Atomicity, Consistency,
            Isolation, Durability (ACID) properties, automatically updatable
            views, materialized views, triggers, foreign keys, and stored
            procedures.It is designed to handle a range of workloads, from
            single machines to data warehouses or Web services with many
            concurrent users.
            <br />
            <br />I use PostgreSQL database when I need a production grade
            database. I am using
            <TextLink
              logo={<span>💾</span>}
              text=" Normalization "
              href="/compute/dbnormalization"
            />{' '}
            standards with my PostgresQL databases. Depending on the
            environment, I chose between several Orms to interact with the
            database,
            <TextLink
              logo={<span />}
              text=" TypeOrm "
              href="/compute/postgres#typeorm"
            />{' '}
            when I am in a
            <TextLink
              logo={<TypescriptIcon />}
              text=" typescript "
              href="/compute/typescript"
            />{' '}
            environment,
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
            when I use Raw JavaScript.
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
              my code using PostgreSQL :
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
          code: postgresMain,
          language: 'language-ts',
          heightAuto: true,
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
                <a id="knex" css={anchorPos} />
                <TextLink
                  logo={<span className="icon-knex" />}
                  text=" Knex.js "
                  href="/compute/postgres#knex"
                />{' '}
                is a "batteries included" SQL query builder for
                <TextLink
                  logo={<PostgresIcon />}
                  text=" Postgres "
                  href="/compute/postgres"
                />{' '}
                , MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift
                designed to be flexible, portable, and fun to use. It features
                both traditional node style callbacks as well as a promise
                interface for cleaner async flow control, a stream interface,
                full featured query and schema builders, transaction support
                (with savepoints), connection pooling and standardized responses
                between different query clients and dialects.
                <br />
                <br />
                Migrations allow for you to define sets of schema changes so
                upgrading a database is a breeze.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Knex :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Express-Rest-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres"
                  />
                </span>
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
                <a id="objection" css={anchorPos} />
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
                Objection.js is built on an SQL query builder called
                <TextLink
                  logo={<span className="icon-knex" />}
                  text=" Knex.js "
                  href="/compute/postgres#knex"
                />
                .
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Objection :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Express-Rest-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres"
                  />
                </span>
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
                <a id="typeorm" css={anchorPos} />
                TypeORM is an ORM that can run in NodeJS, Browser, Cordova,
                PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron
                platforms and can be used with
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />{' '}
                and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always
                support the latest JavaScript features and provide additional
                features that help you to develop any kind of application that
                uses databases - from small applications with a few tables to
                large scale enterprise applications with multiple databases.
                <br />
                <br />
                <TextLink
                  logo={<span />}
                  text=" TypeOrm "
                  href="/compute/postgres#typeorm"
                />{' '}
                supports both Active Record and Data Mapper patterns, unlike all
                other JavaScript ORMs currently in existence, which means you
                can write high quality, loosely coupled, scalable, maintainable
                applications the most productive way.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using TypeOrm :
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
                </span>
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
