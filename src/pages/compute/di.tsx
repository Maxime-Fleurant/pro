import Article from '../../common/components/Article/Article';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import TypescriptIcon from '../../common/components/icons/Typescript';
import NpmIcon from '../../common/components/icons/Npm';
import Head from 'next/head';

const DI = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Dependencies Injection</title>
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
                name: 'Nest-Rest',
                href: 'https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api',
                outside: true,
              },
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
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Dependency_injection',
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
              { name: 'TypeDI', href: '/compute/typedi', domain: true },
              { name: 'Nest', href: '/compute/nest', domain: true },
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
          titleContent: 'Dependencies Injection',
          logo: <span>🧱</span>,
          desc: 'Inversion of Control Containers using  Dependencies Injection',
          wiki: 'https://en.wikipedia.org/wiki/Dependency_injection',
          detail: 'Pattern | Code',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            In software engineering,{' '}
            <TextLink
              logo={<span>🧱</span>}
              text=" dependency injection "
              href="/compute/di"
            />{' '}
            is a technique in which an object receives other objects that it
            depends on. These other objects are called dependencies. In the
            typical "using" relationship the receiving object is called a client
            and the passed (that is, "injected") object is called a service. The
            code that passes the service to the client can be many kinds of
            things and is called the injector. Instead of the client specifying
            which service it will use, the injector tells the client what
            service to use. The "injection" refers to the passing of a
            dependency (a service) into the object (a client) that would use it.
            <br />
            <br />
            The service is made part of the client's state. Passing the service
            to the client, rather than allowing a client to build or find the
            service, is the fundamental requirement of the pattern.
            <br />
            <br />
            The intent behind dependency injection is to achieve separation of
            concerns of construction and use of objects. This can increase
            readability and code reuse.
            <br />
            <br />I am using the Dependencies Injection pattern with several
            tools according to the required specifications. For a Rest API using
            <TextLink
              logo={<span className="icon-nestjs" />}
              text=" Nest "
              href="/compute/nest"
            />{' '}
            I am using the nest built in Dependencies injection system. For a
            GraphQL API, I add the
            <TextLink
              logo={<span>⚙️</span>}
              text=" TypeDI "
              href="/compute/typedi"
            />{' '}
            packages to the
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypegraphQL "
              href="/compute/typegraphql"
            />{' '}
            framework to manage the dependencies injection system. Dependencies
            injection is made possible in these systems with the implementation
            of{' '}
            <TextLink
              logo={<TypescriptIcon />}
              text="Typescript "
              href="/compute/typescript"
            />{' '}
            decorators and the
            <TextLink
              logo={<NpmIcon />}
              text=" reflect-metadata "
              href="https://www.npmjs.com/package/reflect-metadata"
              outside
            />{' '}
            package.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Dependencies Injection :
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
              />
            </span>
          </span>
        }
        headerCode={{
          code: dimain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default DI;
