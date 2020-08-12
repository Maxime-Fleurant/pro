import Article from '../../common/components/Article/Article';

import {
  reactMain,
  reactContext,
  reactTs,
} from '../../common/components/Article/CodeBrowser/codes/react';
import TypescriptIcon from '../../common/components/icons/Typescript';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import Head from 'next/head';

const ReactPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>React</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Context', href: '#context' },
              { name: 'Typescript', href: '#typescript' },
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
                name: 'Next-Anime',
                href: 'https://github.com/Maxime-Fleurant/Next-React-Anime-App',
                outside: true,
              },
              {
                name: 'Next-Portfolio',
                href:
                  'https://github.com/Maxime-Fleurant/Next-React-Portefolio',
                outside: true,
              },
            ],
          },

          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://emotion.sh/docs/introduction',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/emotion-js/emotion',
                outside: true,
              },
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/CSS-in-JS',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/emotion',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              {
                name: 'Apollo Client',
                href: '/compute/apolloclient',
                domain: true,
              },
              { name: 'Typescript', href: '/compute/typescript', domain: true },
              { name: 'Emotion', href: '/compute/emotion', domain: true },
              { name: 'React', href: '/compute/react', domain: true },
              { name: 'Redux', href: '/compute/redux', domain: true },
              { name: 'Next', href: '/compute/next', domain: true },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'React',
          logo: <span className="icon-react" />,
          desc: 'A JavaScript library for building user interfaces',
          wiki: 'https://en.wikipedia.org/wiki/React_(web_framework)',
          git: 'https://github.com/facebook/react',
          npm: 'https://www.npmjs.com/package/react',
          official: 'https://reactjs.org/',
          detail: 'JS | SPA',
        }}
        headerContent={
          <span>
            <a name="intro" css={anchorPos} />
            <TextLink
              logo={<span className="icon-react" />}
              text=" React "
              href="/compute/react"
            />{' '}
            makes it painless to create interactive UIs. Design simple views for
            each state in your application, and React will efficiently update
            and render just the right components when your data changes.
            <br />
            <br />
            Declarative views make your code more predictable and easier to
            debug.
            <br />
            <br />
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
            <br />
            <br />
            Since component logic is written in JavaScript instead of templates,
            you can easily pass rich data through your app and keep state out of
            the DOM.
            <br />
            <br />I use React with
            <TextLink
              logo={<span className="icon-next-js" />}
              text=" Next "
              href="/compute/next"
            />{' '}
            for its SSR capability. In my React projects the Internal state is
            managed by
            <TextLink
              logo={<span className="icon-redux" />}
              text=" Redux "
              href="/compute/redux"
            />{' '}
            or the context API when the state requirements are simple. For
            fetching external data I use
            <TextLink
              logo={<span className="icon-a" />}
              text=" Apollo Client "
              href="/compute/apolloclient"
            />
            . Styling is done using
            <TextLink
              logo={<span>👩‍🎤</span>}
              text=" Emotion "
              href="/compute/emotion"
            />{' '}
            css in js solution.
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
              my code using React :
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
          code: reactMain,
          language: 'language-tsx',
        }}
        content={[
          {
            header: {
              titleContent: 'Context',
              logo: <span className="icon-react" />,
              official: 'https://reactjs.org/docs/context.html',
            },
            content: (
              <span>
                <a name="context" css={anchorPos} />
                Context provides a way to pass data through the component tree
                without having to pass props down manually at every level.
                <br />
                <br />
                In a typical React application, data is passed top-down (parent
                to child) via props, but this can be cumbersome for certain
                types of props (e.g. locale preference, UI theme) that are
                required by many components within an application.
                <br />
                <br /> Context provides a way to share values like these between
                components without having to explicitly pass a prop through
                every level of the tree.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Context :
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
              language: 'language-tsx',
              code: reactContext,
            },
          },
          {
            header: {
              titleContent: 'React with Typescript',
              logo: <TypescriptIcon />,
              official:
                'https://github.com/typescript-cheatsheets/react-typescript-cheatsheet',
            },
            content: (
              <span>
                <a name="typescript" css={anchorPos} />
                TypeScript is an open-source programming language developed and
                maintained by Microsoft. It is a strict syntactical superset of
                JavaScript and adds optional static typing to the language.
                <br />
                <br />
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />{' '}
                is designed for development of large applications and
                transcompiles to JavaScript.
                <br />
                <br /> As TypeScript is a superset of JavaScript, existing
                JavaScript programs are also valid TypeScript programs.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using React with Typescript :
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
              language: 'language-tsx',
              code: reactTs,
            },
          },
        ]}
      />
    </>
  );
};

export default ReactPage;
