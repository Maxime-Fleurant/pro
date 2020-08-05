import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { typeDi } from '../../common/components/Article/CodeBrowser/codes/typedi';

const TypeDI = () => {
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
          titleContent: 'TypeDI',
          logo: <span>⚙️</span>,
          desc:
            'Simple yet powerful dependency injection tool for JavaScript and TypeScript.',
          npm: 'https://www.npmjs.com/package/typedi',
          official: 'https://github.com/typestack/typedi',
          git: 'https://github.com/typestack/typedi',
          detail: 'Inversion of Control | Tool',
        }}
        headerContent={
          <span>
            In software engineering, dependency injection is a technique in
            which an object receives other objects that it depends on. These
            other objects are called dependencies. In the typical "using"
            relationship the receiving object is called a client and the passed
            (that is, "injected") object is called a service. The code that
            passes the service to the client can be many kinds of things and is
            called the injector. Instead of the client specifying which service
            it will use, the injector tells the client what service to use. The
            "injection" refers to the passing of a dependency (a service) into
            the object (a client) that would use it.
            <br />
            <br /> TypeDI is a dependency injection tool for JavaScript and
            TypeScript. Using TypeDI you can build well-structured and easily
            tested applications.
            <br />
            <br />
            You can find examples of my code using TypeDI in the
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
        headerCode={{ code: typeDi, language: 'language-js' }}
        content={[]}
      />
    </>
  );
};

export default TypeDI;
