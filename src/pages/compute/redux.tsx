import Article from '../../common/components/Article/Article';
import {
  reduxMain,
  reduxTypescript,
  reduxContainer,
} from '../../common/components/Article/CodeBrowser/codes/redux';
import TypescriptIcon from '../../common/components/icons/Typescript';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import Head from 'next/head';

const Redux = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Redux</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Typescript', href: '#typescript' },
              { name: 'Container', href: '#container' },
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
                name: 'Next-Anime',
                href: 'https://github.com/Maxime-Fleurant/Next-React-Anime-App',
                outside: true,
              },
            ],
          },

          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://redux.js.org/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/reduxjs/redux',
                outside: true,
              },
              {
                name: 'Wiki',
                href:
                  'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',
                outside: true,
              },
              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/redux',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              { name: 'Typescript', href: '/compute/typescript', domain: true },
              { name: 'React', href: '/compute/react', domain: true },
              { name: 'Next', href: '/compute/next', domain: true },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'Redux',
          logo: <span className="icon-redux" />,
          desc: 'A Predictable State Container for JS Apps',
          wiki: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',
          npm: 'https://www.npmjs.com/package/redux',
          official: 'https://redux.js.org/',
          git: 'https://github.com/reduxjs/redux',
          detail: 'React | State',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            <TextLink
              logo={<span className="icon-redux" />}
              text=" Redux "
              href="/compute/redux"
            />{' '}
            helps you write applications that behave consistently, run in
            different environments (client, server, and native), and are easy to
            test.
            <br />
            <br />
            Centralizing your application's state and logic enables powerful
            capabilities like undo/redo, state persistence, and much more.
            <br />
            <br />
            The Redux DevTools make it easy to trace when, where, why, and how
            your application's state changed. Redux's architecture lets you log
            changes, use "time-travel debugging", and even send complete error
            reports to a server.
            <br />
            <br />I use Redux when I want a more complete state management
            solution than Context API in my
            <TextLink
              logo={<span className="icon-react" />}
              text=" React "
              href="/compute/react"
            />{' '}
            /
            <TextLink
              logo={<span className="icon-next-js" />}
              text=" Next "
              href="/compute/next"
            />{' '}
            project. Redux adds a certain volume of boilerplate code but this
            boilerplate is greatly reduced by the use of the redux-toolkit
            package. Redux allows you to follow solid state management design
            patterns and to use
            <TextLink
              logo={<TypescriptIcon />}
              text=" Typescript "
              href="/compute/typescript"
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
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Redux :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Next-React-Anime-App "
                href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
              />
            </span>
          </span>
        }
        headerCode={{
          code: reduxMain,
          language: 'language-tsx',
        }}
        content={[
          {
            header: {
              titleContent: 'Redux with Typescript',
              logo: <TypescriptIcon />,
              official:
                'https://redux.js.org/recipes/usage-with-typescript#overview',
            },
            content: (
              <span>
                <a id="typescript" css={anchorPos} />
                Redux Toolkit is written in TypeScript, and its API is designed
                to enable great integration with TypeScript applications.
                <br />
                <br />
                Using configureStore should not need any additional typings. You
                might, however, want to extract the RootState type and the
                Dispatch type.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Redux With Typescript :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Next-React-Anime-App "
                    href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
                  />
                </span>
              </span>
            ),
            code: {
              language: 'language-tsx',
              code: reduxTypescript,
              heightAuto: true,
            },
          },
          {
            header: {
              titleContent: 'Redux container pattern',
              logo: <span className="icon-redux" />,
              official:
                'https://redux.js.org/basics/usage-with-react#presentational-and-container-components',
            },
            content: (
              <span>
                <a id="container" css={anchorPos} />
                Container Pattern is commonly used to separate data
                fetching/logic, events, and state from presentational components
                (aka, dumb components).
                <br />
                <br />
                This can be particularly helpful if you want to reuse your
                presentational components in other use-cases, in your current
                project/codebase or in other projects. Keeping your components
                “dumb” makes it much easier to share and reuse them.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Redux Container Pattern :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Next-React-Anime-App "
                    href="https://github.com/Maxime-Fleurant/Next-React-Anime-App"
                  />
                </span>
              </span>
            ),
            code: {
              language: 'language-tsx',
              code: reduxContainer,
            },
          },
        ]}
      />
    </>
  );
};

export default Redux;
