import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import TextLink from '../../common/components/Article/textLink/TextLink';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const JWT = (): JSX.Element => {
  return (
    <>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'My Code',
            items: [
              {
                name: 'Nest-Rest',
                href: 'https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api',
                outside: true,
              },
              {
                name: 'Express-Rest',
                href:
                  'https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Multitier_architecture',
                outside: true,
              },
            ],
          },

          {
            name: 'Related',
            items: [
              {
                name: 'Nest',
                href: '/compute/nest',
                domain: true,
              },
              {
                name: 'Express',
                href: '/compute/express',
                domain: true,
              },
            ],
          },

          {
            name: 'External',
            items: [
              {
                name: 'BulletProof',
                href:
                  'https://softwareontheroad.com/ideal-nodejs-project-structure/',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a name="intro" css={anchorPos} />
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
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using 3-Layer architecture :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />{' '}
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Express-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres"
              />
            </span>
          </span>
        }
        headerCode={{
          code: mainLayer,
          language: 'language-ts',
        }}
        content={[]}
      />
    </>
  );
};

export default JWT;
