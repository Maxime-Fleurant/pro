import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';

import {
  emotionMain,
  emotionTheme,
  cssGrid,
} from '../../common/components/Article/CodeBrowser/codes/emotion';
import Jss from '../../common/components/icons/jss';
import {
  reactMain,
  reactContext,
  reactTs,
} from '../../common/components/Article/CodeBrowser/codes/react';
import TypescriptIcon from '../../common/components/icons/Typescript';

const ReactPage = (): JSX.Element => {
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
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
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
            <br />
            You can find examples of my code using React in the
            <a css={insideLink}>
              {` Anime `} <span>👁</span>{' '}
            </a>
            demo project
            <a css={insideLink}>
              {` Github `} <span className="icon-github-filled" />{' '}
            </a>
            repository
          </span>
        }
        headerCode={{
          code: reactMain,
          language: 'language-tsx',
          heightAuto: true,
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
                TypeScript is an open-source programming language developed and
                maintained by Microsoft. It is a strict syntactical superset of
                JavaScript and adds optional static typing to the language.
                <br />
                <br />
                TypeScript is designed for development of large applications and
                transcompiles to JavaScript.
                <br />
                <br /> As TypeScript is a superset of JavaScript, existing
                JavaScript programs are also valid TypeScript programs.
              </span>
            ),
            code: {
              language: 'language-tsx',
              code: reactTs,
            },
            extraSpace: 5,
          },
        ]}
      />
    </>
  );
};

export default ReactPage;
