import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';

const JWT = (): JSX.Element => {
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
          titleContent: '3-layer architecture',
          logo: <span>🥪</span>,
          desc:
            'The idea is to use the principle of separation of concerns to move the business logic away from the node.js API Routes',
          wiki: 'https://en.wikipedia.org/wiki/Multitier_architecture',
          detail: 'Pattern | Code',
        }}
        headerContent={
          <span>
            Each layer has a specific set of responsibilities that are clearly
            defined and easy to grasp. Each layer accesses the layer below it,
            never above it. Serving a request touches each layer starting from
            the top, traveling all the way down and then resurfacing back to the
            topmost layer.
            <br />
            <br />
            API layer Responsibilities are receiving the HTTP request and
            parsing the payload from it. This layer would then forward the
            payload removed of any HTTP-specific items to the following Service
            layer. Input validation is performed at this level as well as
            translating result from the Service layer to HTTP status code and
            JSON response. Express.js lives only on this level. You'd have your
            main app.js that sets up the server and individual route files that
            define validations and call service layer leaving all req and res
            objects behind.
            <br />
            <br />
            Service layer Responsibility is to perform business logic. This
            layer is agnostic of any HTTP specific constructs or JSON data.
            Input arguments are vanilla objects. Services in this layer are not
            tied to HTTP in any way. The driver for the services could also be a
            command-line application or a test suite. Services perform business
            logic i.e., make things happen. They can call other services in the
            Service layer and clients in the Integration layer to talk to
            outside systems.
            <br />
            <br />
            Integration layer is responsible for communicating outside the
            process boundaries. It talks to databases and makes HTTP requests to
            3rd party web APIs. Most of the contents in this layer would be
            higher abstraction clients. For example, a client handling the
            communication to a web API would accept vanilla objects as arguments
            and would hide the complexity of formulating an HTTP request payload
            and making the call.
            <br />
            <br />
            You can find examples of my code using the 3-layer pattern in the
            nest-rest-api
            <a css={insideLink}>
              {` Github `} <span className="icon-github-filled" />{' '}
            </a>
            repository
          </span>
        }
        headerCode={{
          code: mainLayer,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default JWT;
