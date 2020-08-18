import Head from 'next/head';
import Article from '../../common/components/Article/Article';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  nextMain,
  nextpage,
} from '../../common/components/Article/CodeBrowser/codes/next';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Next = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Next</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Fetching', href: '#fetching' },
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
                href: 'https://nextjs.org/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/vercel/next.js',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/next',
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
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'Next',
          logo: <span className="icon-next-js" />,
          desc: 'Server Side Rendering for react App.',
          npm: 'https://www.npmjs.com/package/next',
          official: 'https://nextjs.org/',
          git: 'https://github.com/vercel/next.js',
          detail: 'React | SSR',
        }}
        headerContent={
          <span>
            <a id="intro" css={anchorPos} />
            Isomorphic JavaScript, also known as Universal JavaScript, describes
            JavaScript applications which run both on the client and the server.
            <br />
            <br />
            Isomorphic JavaScript works in the context of a single-page
            application (SPA). In a typical SPA, most of the application logic,
            including routing, is encapsulated in a bundled JavaScript file that
            is sent to the client. While this frees up the server, as it does
            not have to handle so many requests, it also makes the initial load
            slow for the client, as the entire application needs to be sent over
            to the client.
            <br />
            <br />
            With Isomorphic JavaScript, when a client web page is first
            requested from the server, the view of the page is generated on the
            server, similar to server-side dynamic web pages, and sent over to
            the client. The client can then render the view immediately.
            <br />
            <br />
            I use
            <TextLink
              logo={<span className="icon-react" />}
              text=" React "
              href="/compute/react"
            />{' '}
            with
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
              my code using Next :
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
          code: nextMain,
          language: 'language-ts',
        }}
        content={[
          {
            header: {
              titleContent: 'Data Fetching',
              logo: <span className="icon-next-js" />,
              official: 'https://nextjs.org/docs/basic-features/pages',
            },
            content: (
              <span>
                <a id="fetching" css={anchorPos} />
                In Next.js, a page is a
                <TextLink
                  logo={<span className="icon-react" />}
                  text=" React "
                  href="/compute/react"
                />{' '}
                Component exported from a .js, .jsx, .ts, or .tsx file in the
                pages directory. Each page is associated with a route based on
                its file name.
                <br />
                <br />
                Next.js supports pages with dynamic routes. For example, if you
                create a file called pages/posts/[id].js, then it will be
                accessible at posts/1, posts/2, etc.
                <br />
                <br />
                <TextLink
                  logo={<span className="icon-next-js" />}
                  text=" Next.js "
                  href="/compute/next"
                />{' '}
                has two forms of pre-rendering: Static Generation and
                Server-side Rendering. The difference is in when it generates
                the HTML for a page.
                <br />
                <br />
                Static Generation (Recommended): The HTML is generated at build
                time and will be reused on each request. Server-side Rendering:
                The HTML is generated on each request.
                <br />
                <br />
                If you export an async function called getStaticProps from a
                page, Next.js will pre-render this page at build time using the
                props returned by getStaticProps. For
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />
                , you can use the GetStaticProps type.
                <br />
                <br />
                If a page has dynamic routes and uses getStaticProps it needs to
                define a list of paths that have to be rendered to HTML at build
                time.
                <br />
                <br />
                If you export an async function called getStaticPaths from a
                page that uses dynamic routes, Next.js will statically
                pre-render all the paths specified by getStaticPaths. For
                TypeScript, you can use the GetStaticPaths type.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Next :
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
              code: nextpage,
            },
          },
        ]}
      />
    </>
  );
};

export default Next;
