import Article from '../../common/components/Article/Article';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  acmain,
  acgcg,
} from '../../common/components/Article/CodeBrowser/codes/apolloclient';
import {
  nextMain,
  nextpage,
} from '../../common/components/Article/CodeBrowser/codes/next';

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
            You can find examples of my code using Redux in the Anime 👁 demo
            project Github repository
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
                In Next.js, a page is a React Component exported from a .js,
                .jsx, .ts, or .tsx file in the pages directory. Each page is
                associated with a route based on its file name.
                <br />
                <br />
                Next.js supports pages with dynamic routes. For example, if you
                create a file called pages/posts/[id].js, then it will be
                accessible at posts/1, posts/2, etc.
                <br />
                <br />
                Next.js has two forms of pre-rendering: Static Generation and
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
                props returned by getStaticProps. For TypeScript, you can use
                the GetStaticProps type.
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
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nextpage,
              heightAuto: true,
            },
          },
        ]}
      />
    </>
  );
};

export default Redux;
