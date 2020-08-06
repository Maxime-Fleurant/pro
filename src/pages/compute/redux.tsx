import Article from '../../common/components/Article/Article';
import {
  reduxMain,
  reduxTypescript,
  reduxContainer,
} from '../../common/components/Article/CodeBrowser/codes/redux';
import TypescriptIcon from '../../common/components/icons/Typescript';

const Redux = (): JSX.Element => {
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
            Redux helps you write applications that behave consistently, run in
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
            <br />
            You can find examples of my code using Redux in the Anime 👁 demo
            project Github repository
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
                Redux Toolkit is written in TypeScript, and its API is designed
                to enable great integration with TypeScript applications.
                <br />
                <br />
                Using configureStore should not need any additional typings. You
                might, however, want to extract the RootState type and the
                Dispatch type.
                <br />
                <br />
              </span>
            ),
            code: {
              language: 'language-tsx',
              code: reduxTypescript,
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
                Container Pattern is commonly used to separate data
                fetching/logic, events, and state from presentational components
                (aka, dumb components).
                <br />
                <br />
                This can be particularly helpful if you want to reuse your
                presentational components in other use-cases, in your current
                project/codebase or in other projects. Keeping your components
                “dumb” makes it much easier to share and reuse them.
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
