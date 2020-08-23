import Head from 'next/head';
import Article from '../../common/components/Article/Article';
import {
  emotionMain,
  emotionTheme,
  cssGrid,
} from '../../common/components/Article/CodeBrowser/codes/emotion';
import Jss from '../../common/components/icons/jss';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Emotion = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Emotion</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Theming', href: '#theming' },
              { name: 'Grid', href: '#grid' },
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
              { name: 'React', href: '/compute/react', domain: true },
              { name: 'Next', href: '/compute/next', domain: true },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'Scale',
                href: 'https://css-tricks.com/optimizing-large-scale-displays/',
                outside: true,
              },
              {
                name: 'Grid',
                href:
                  'https://css-tricks.com/snippets/css/complete-guide-grid/',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a id="intro" css={anchorPos} />
            <TextLink
              logo={<span>👩‍🎤</span>}
              text=" Emotion "
              href="/compute/emotion"
            />{' '}
            is a library designed for writing css styles with JavaScript. <br />
            <br />
            It provides powerful and predictable style composition in addition
            to a great developer experience with features such as source maps,
            labels, and testing utilities. Both string and object styles are
            supported.
            <br />
            <br />
            I use Emotion
            <TextLink
              logo={<Jss />}
              text=" Css In Jss "
              href="/compute/emotion"
            />{' '}
            solution in most of my
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
            projects.
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
              my code using Emotion :
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
                <a id="theming" css={anchorPos} />
                Theming is provided by the library emotion-theming.
                <br />
                <br />
                Add ThemeProvider to the top level of your app and access the
                theme with props.theme in a styled component or provide a
                function that accepts the theme as the css prop.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Emotion Theming :
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
                <a id="grid" css={anchorPos} />
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
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Css Grid :
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
              code: cssGrid,
            },
          },
        ]}
      />
    </>
  );
};

export default Emotion;
