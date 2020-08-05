import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import { mongMain } from '../../common/components/Article/CodeBrowser/codes/mongo';
import { neomain } from '../../common/components/Article/CodeBrowser/codes/neo4j';
import NeoIcon from '../../common/components/icons/neo';
import { dockerMain } from '../../common/components/Article/CodeBrowser/codes/docker';
import {
  emotionMain,
  emotionTheme,
  cssGrid,
} from '../../common/components/Article/CodeBrowser/codes/emotion';
import Jss from '../../common/components/icons/jss';

const Emotion = (): JSX.Element => {
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
          titleContent: 'Emotion',
          logo: <span>👩‍🎤</span>,
          desc:
            'CSS-in-JS library designed for high performance style composition',
          wiki: 'https://en.wikipedia.org/wiki/CSS-in-JS',
          git: 'https://github.com/emotion-js/emotion',
          npm: 'https://www.npmjs.com/package/emotion',
          official: 'https://emotion.sh/docs/introduction',
          detail: 'Css | JS',
        }}
        headerContent={
          <span>
            Emotion is a library designed for writing css styles with
            JavaScript. <br />
            <br />
            It provides powerful and predictable style composition in addition
            to a great developer experience with features such as source maps,
            labels, and testing utilities. Both string and object styles are
            supported.
            <br />
            <br />
            You can find examples of my code using Emotion in the
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
        headerContentHeightExtra={5}
        headerCode={{
          code: emotionMain,
          language: 'language-tsx',
        }}
        content={[
          {
            header: {
              titleContent: 'Theming',
              logo: <span>👩‍🎤</span>,
              official: 'https://emotion.sh/docs/theming',
            },
            content: (
              <span>
                Theming is provided by the library emotion-theming.
                <br />
                <br />
                Add ThemeProvider to the top level of your app and access the
                theme with props.theme in a styled component or provide a
                function that accepts the theme as the css prop.
                <br />
                <br />
                You can find examples of my code using Emotion Theming in the
                <a css={insideLink}>
                  {` Anime `} <span>👁</span>{' '}
                </a>
                demo project
                <a css={insideLink}>
                  {` Github `} <span className="icon-github-filled" />{' '}
                </a>
                repository
              </span>
            ),
            code: {
              language: 'language-tsx',
              code: emotionTheme,
            },
            extraSpace: 7,
          },
          {
            header: {
              titleContent: 'Css Grid',
              logo: <Jss />,
              official:
                'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
            },
            content: (
              <span>
                CSS Grid Layout excels at dividing a page into major regions or
                defining the relationship in terms of size, position, and layer,
                between parts of a control built from HTML primitives.
                <br />
                <br />
                Like tables, grid layout enables an author to align elements
                into columns and rows. However, many more layouts are either
                possible or easier with CSS grid than they were with tables. For
                example, a grid container's child elements could position
                themselves so they actually overlap and layer, similar to CSS
                positioned elements.
                <br />
                <br />
                You can find examples of my code using Css Grid in the
                <a css={insideLink}>
                  {` Anime `} <span>👁</span>{' '}
                </a>
                demo project
                <a css={insideLink}>
                  {` Github `} <span className="icon-github-filled" />{' '}
                </a>
                repository
              </span>
            ),
            code: {
              language: 'language-tsx',
              code: cssGrid,
            },
          },
        ]}
      />
    </>
  );
};

export default Emotion;
