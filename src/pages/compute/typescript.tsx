import Head from 'next/head';
import Article from '../../common/components/Article/Article';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  typescriptMain,
  typeInterface,
  typeGeneric,
  typeDecorator,
} from '../../common/components/Article/CodeBrowser/codes/typescript';
import TextLink from '../../common/components/Article/textLink/TextLink';
import NpmIcon from '../../common/components/icons/Npm';
import TypegraphqlIcon from '../../common/components/icons/Typegraphql';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import PostgresIcon from '../../common/components/icons/Postgres';

const Typescript = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Typescript</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Interfaces', href: '#interfaces' },
              { name: 'Generics', href: '#generics' },
              { name: 'Decorators', href: '#decorators' },
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
              {
                name: 'Portfolio',
                href: 'https://maximefleurant.com/',
                outside: true,
              },
            ],
          },
          {
            name: 'My Code',
            items: [
              {
                name: 'Next-Portfolio',
                href:
                  'https://github.com/Maxime-Fleurant/Next-React-Portefolio',
                outside: true,
              },
              {
                name: 'GraphQL-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
              {
                name: 'Next-Anime',
                href: 'https://github.com/Maxime-Fleurant/Next-React-Anime-App',
                outside: true,
              },
              {
                name: 'Nest-Rest',
                href: 'https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://www.typescriptlang.org/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/microsoft/TypeScript',
                outside: true,
              },

              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/TypeScript',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/typescript',
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
              { name: 'PostgreSQL', href: '/compute/postgres', domain: true },
              {
                name: 'TypeOrm',
                href: '/compute/postgres#typeorm',
                domain: true,
              },
              { name: 'TypeDI', href: '/compute/typedi', domain: true },
              { name: 'React', href: '/compute/react', domain: true },
              { name: 'Nest', href: '/compute/nest', domain: true },
              { name: 'DRY', href: '/compute/dry', domain: true },
              { name: 'JWT', href: '/compute/jwt', domain: true },
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
          titleContent: 'Typescript',
          logo: <TypescriptIcon />,
          desc:
            'TypeScript is a superset of JavaScript that compiles to clean JavaScript output',
          npm: 'https://www.npmjs.com/package/typescript',
          official: 'https://www.typescriptlang.org/',
          git: 'https://github.com/microsoft/TypeScript',
          wiki: 'https://en.wikipedia.org/wiki/TypeScript',
          detail: 'JS | Type',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            TypeScript is an open-source programming language developed and
            maintained by Microsoft. It is a strict syntactical superset of
            JavaScript and adds optional static typing to the language.
            <br />
            <br />
            <TextLink
              logo={<TypescriptIcon />}
              text="Typescript "
              href="/compute/typescript"
            />{' '}
            is designed for development of large applications and transcompiles
            to JavaScript.
            <br />
            <br /> As TypeScript is a superset of JavaScript, existing
            JavaScript programs are also valid TypeScript programs.
            <br />
            <br />
            I'm using Typescript for its ability to follow SOLID and
            <TextLink
              logo={<span>🌵</span>}
              text=" DRY "
              href="/compute/dry"
            />{' '}
            design patters which was impossible before using only JS. Typed
            Javascript allows a better understanding of the system as well as
            making the code more modular. Typescript is the perfect tool for
            using
            <TextLink
              logo={<span>🧱</span>}
              text=" dependency injection "
              href="/compute/di"
            />{' '}
            since it allows the use of decorator to read metadata that we can
            pass using
            <TextLink
              logo={<NpmIcon />}
              text=" reflect-metadata "
              href="https://www.npmjs.com/package/reflect-metadata"
              outside
            />
            . I try to use Typescript in all my Javascript projects, front or
            back. I use typescript with
            <TextLink
              logo={<span className="icon-react" />}
              text=" React "
              href="/compute/react"
            />{' '}
            for the front and with frameworks like
            <TextLink
              logo={<span className="icon-nestjs" />}
              text=" Nest "
              href="/compute/nest"
            />{' '}
            or
            <TextLink
              logo={<TypegraphqlIcon />}
              text=" TypegraphQL "
              href="/compute/typegraphql"
            />{' '}
            for the back. The Decorator pattern also allows an easier
            interaction with a
            <TextLink
              logo={<PostgresIcon />}
              text=" PostgreSQL "
              href="/compute/postgres"
            />{' '}
            database using
            <TextLink
              logo={<span />}
              text=" TypeOrm"
              href="/compute/postgres#typeorm"
            />
            .
            <br />
            <br />
            Live Demo :{' '}
            <TextLink
              outside
              logo={<span>👁</span>}
              text=" Anime Search App "
              href="https://anime.maximefleurant.com/"
            />{' '}
            /
            <TextLink
              outside
              logo={<span>🌎</span>}
              text=" Portfolio "
              href="https://maximefleurant.com/"
            />
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Typescript :
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
                text=" Next-React-Anime-App "
                href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
              />{' '}
              /
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Next-React-Portefolio "
                href="https://github.com/Maxime-Fleurant/Next-React-Portefolio"
              />{' '}
            </span>
          </span>
        }
        headerCode={{
          code: typescriptMain,
          language: 'language-ts',
        }}
        content={[
          {
            header: {
              titleContent: 'Interfaces',
              logo: <TypescriptIcon />,
              official:
                'https://www.typescriptlang.org/docs/handbook/interfaces.html',
            },
            content: (
              <span>
                <a id="interfaces" css={anchorPos} />
                One of TypeScript’s core principles is that type checking
                focuses on the shape that values have. This is sometimes called
                “duck typing” or “structural subtyping”. In
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />
                , interfaces fill the role of naming these types, and are a
                powerful way of defining contracts within your code as well as
                contracts with code outside of your project.
                <br />
                <br />
                Like classes, interfaces can extend each other. This allows you
                to copy the members of one interface into another, which gives
                you more flexibility in how you separate your interfaces into
                reusable components.
                <br />
                <br />
                Not all properties of an interface may be required. Some exist
                under certain conditions or may not be there at all. These
                optional properties are popular when creating patterns like
                “option bags” where you pass an object to a function that only
                has a couple of properties filled in.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Typescript Interfaces :
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
                    text=" Next-React-Anime-App "
                    href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
                  />{' '}
                  /
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Next-React-Portefolio "
                    href="https://github.com/Maxime-Fleurant/Next-React-Portefolio"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: typeInterface,
            },
          },
          {
            header: {
              titleContent: 'Generics',
              logo: <TypescriptIcon />,
              official:
                'https://www.typescriptlang.org/docs/handbook/generics.html',
            },
            content: (
              <span>
                <a id="generics" css={anchorPos} />
                A major part of software engineering is building components that
                not only have well-defined and consistent APIs, but are also
                reusable. Components that are capable of working on the data of
                today as well as the data of tomorrow will give you the most
                flexible capabilities for building up large software systems.
                <br />
                <br />
                In languages like C# and Java, one of the main tools in the
                toolbox for creating reusable components is generics, that is,
                being able to create a component that can work over a variety of
                types rather than a single one. This allows users to consume
                these components and use their own types.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Typescript Generics :
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
                    text=" Next-React-Anime-App "
                    href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
                  />{' '}
                  /
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Next-React-Portefolio "
                    href="https://github.com/Maxime-Fleurant/Next-React-Portefolio"
                  />{' '}
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: typeGeneric,
            },
          },
          {
            header: {
              titleContent: 'Decorators',
              logo: <TypescriptIcon />,
              official:
                'https://www.typescriptlang.org/docs/handbook/decorators.html',
            },
            content: (
              <span>
                <a id="decorators" css={anchorPos} />
                With the introduction of Classes in TypeScript and ES6, there
                now exist certain scenarios that require additional features to
                support annotating or modifying classes and class members.
                Decorators provide a way to add both annotations and a
                meta-programming syntax for class declarations and members.
                Decorators are a stage 2 proposal for JavaScript and are
                available as an experimental feature of TypeScript.
                <br />
                <br />
                To enable experimental support for decorators, you must enable
                the experimentalDecorators compiler option either on the command
                line or in your tsconfig.json:
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Typescript Decorators :
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
              code: typeDecorator,
            },
          },
        ]}
      />
    </>
  );
};

export default Typescript;
