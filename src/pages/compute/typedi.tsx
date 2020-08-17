import Article from '../../common/components/Article/Article';
import { typeDi } from '../../common/components/Article/CodeBrowser/codes/typedi';
import TextLink from '../../common/components/Article/textLink/TextLink';
import TypescriptIcon from '../../common/components/icons/Typescript';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import Head from 'next/head';

const TypeDI = () => {
  return (
    <>
      <Head>
        <title>TypeDI</title>
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
                name: 'GraphQL-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
            ],
          },

          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://github.com/typestack/typedi',
                outside: true,
              },

              {
                name: 'Github',
                href: 'https://github.com/typestack/typedi',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/typedi',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              {
                name: 'TypeGraphQL',
                href: '/compute/typegraphql',
                domain: true,
              },
              { name: 'Typescript', href: '/compute/typescript', domain: true },
              { name: 'DI', href: '/compute/di', domain: true },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'MetaProg',
                href:
                  'http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4',
                outside: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'TypeDI',
          logo: <span>⚙️</span>,
          desc:
            'Simple yet powerful dependency injection tool for JavaScript and TypeScript.',
          npm: 'https://www.npmjs.com/package/typedi',
          official: 'https://github.com/typestack/typedi',
          git: 'https://github.com/typestack/typedi',
          detail: 'Inversion of Control | Tool',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            In software engineering, dependency injection is a technique in
            which an object receives other objects that it depends on. These
            other objects are called dependencies. In the typical "using"
            relationship the receiving object is called a client and the passed
            (that is, "injected") object is called a service. The code that
            passes the service to the client can be many kinds of things and is
            called the injector. Instead of the client specifying which service
            it will use, the injector tells the client what service to use. The
            "injection" refers to the passing of a dependency (a service) into
            the object (a client) that would use it.
            <br />
            <br /> TypeDI is a dependency injection tool for JavaScript and
            <TextLink
              logo={<TypescriptIcon />}
              text=" Typescript "
              href="/compute/typescript"
            />{' '}
            . Using
            <TextLink
              logo={<span>⚙️</span>}
              text=" TypeDI "
              href="/compute/typedi"
            />{' '}
            you can build well-structured and easily tested applications.
            <br />
            <br />I use TypeDI in my GraphQL projects by coupling it with
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypegraphQL "
              href="/compute/typegraphql"
            />{' '}
            to add a system of dependencies injection.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using TypeDI :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />
            </span>
          </span>
        }
        headerCode={{ code: typeDi, language: 'language-js' }}
        content={[]}
      />
    </>
  );
};

export default TypeDI;
