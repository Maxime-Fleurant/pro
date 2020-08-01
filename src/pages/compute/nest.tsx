import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { Cell } from '../../common/components/Cell/cell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import {
  mainText,
  insideLink,
} from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import CodeBrowser from '../../common/components/Article/CodeBrowser/CodeBrowser';
import JavascriptIcon from '../../common/components/icons/Javascript';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  nestMain,
  nestModule,
  nestController,
} from '../../common/components/Article/CodeBrowser/codes/nest';

const Nest = () => {
  return (
    <>
      <ArticleNavigation
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
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Nest"
          logo={<span className="icon-nestjs" />}
          desc="A progressive Node.js framework for building efficient, reliable and scalable server-side applications."
          npm="https://www.npmjs.com/package/@nestjs/core"
          official="https://nestjs.com/"
          git="https://github.com/nestjs/nest"
          detail="Api | Rest"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 20, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Nest is a framework for building efficient, scalable Node.js
          server-side applications. It uses progressive
          <a css={insideLink}>
            {` JavaScript `}
            <JavascriptIcon />
          </a>
          , is built with and fully supports
          <a css={insideLink}>
            {` TypeScript `}
            <TypescriptIcon />{' '}
          </a>
          (yet still enables developers to code in pure JavaScript) and combines
          elements of OOP (Object Oriented Programming), FP (Functional
          Programming), and FRP (Functional Reactive Programming). Under the
          hood, Nest makes use of robust HTTP Server frameworks like
          <a css={insideLink}>
            {` Express `}
            <span className="icon-expressjs-icon" />{' '}
          </a>
          (the default) and optionally can be configured to use Fastify. Nest
          provides a level of abstraction above these common
          <a css={insideLink}>
            {` Node.js `} <span className="icon-nodejs-icon" />{' '}
          </a>
          frameworks (Express/Fastify), but also exposes their APIs directly to
          the developer. This allows developers the freedom to use the myriad of
          third-party modules which are available for the underlying platform.
          <br />
          <br />I use
          <a css={insideLink}>
            {` Nest `} <span className="icon-nestjs" />{' '}
          </a>{' '}
          for its ability to provide a toolkit allowing scalable API development
          following OOP development paradigms. While I use Express to quickly
          prototype an API, Nest allows me to develop a Production grade API.
          The use of modules and
          <a css={insideLink}>{` dependency injection `}🧱 </a> make it easier
          to reuse logic and understand the whole system. To interact with a
          database I use the built in
          <a css={insideLink}>{` TypeOrm `}⚙️ </a>
          module with its repository pattern that Nest Provides.
          <br />
          <br />
          You can find examples of my code using Nest in the nest-rest-api
          <a css={insideLink}>
            {` Github `} <span className="icon-github-filled" />{' '}
          </a>
          repository
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 19, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language="language-ts" code={nestMain} />
      </Cell>

      <Cell
        deskPos={{ rowStart: 21, rowEnd: 22, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          sub
          logo={<span className="icon-nestjs" />}
          titleContent="Modules"
          official="https://docs.nestjs.com/modules"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 22, rowEnd: 28, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          <a css={insideLink}>
            {`Nest `} <span className="icon-nestjs" />{' '}
          </a>
          is built around the strong design pattern commonly known as{' '}
          <a css={insideLink}>{` dependency injection `}🧱</a>. In Nest, thanks
          to
          <a css={insideLink}>
            {` TypeScript `}
            <TypescriptIcon />{' '}
          </a>
          capabilities, it's extremely easy to manage dependencies because they
          are resolved just by type.
          <br />
          <br />A module is a class annotated with a @Module() decorator. The
          @Module() decorator provides metadata that Nest makes use of to
          organize the application structure.
          <br />
          <br />
          Each application has at least one module, a root module. The root
          module is the starting point Nest uses to build the application graph
          - the internal data structure Nest uses to resolve module and provider
          relationships and dependencies.
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 22, rowEnd: 27, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language="language-ts" code={nestModule} />
      </Cell>

      <Cell
        deskPos={{ rowStart: 29, rowEnd: 30, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          sub
          logo={<span className="icon-nestjs" />}
          titleContent="Controllers"
          official="https://docs.nestjs.com/controllers"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 30, rowEnd: 41, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Controllers are responsible for handling incoming requests and
          returning responses to the client. <br />
          <br />A controller's purpose is to receive specific requests for the
          application. The routing mechanism controls which controller receives
          which requests. Frequently, each controller has more than one route,
          and different routes can perform different actions.
          <br />
          <br />
          In order to create a basic controller, we use classes and decorators.
          Decorators associate classes with required metadata and enable
          <a css={insideLink}>
            {` Nest `} <span className="icon-nestjs" />{' '}
          </a>
          to create a routing map (tie requests to the corresponding
          controllers).
          <br />
          <br />
          @Param() is used to decorate a method parameter , and makes the route
          parameters available as properties of that decorated method parameter
          inside the body of the method.
          <br />
          <br />
          The request object represents the HTTP request and has properties for
          the request query string, parameters, HTTP headers, and body . In most
          cases, it's not necessary to grab these properties manually. We can
          use dedicated decorators instead, such as @Body() or @Query()
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 30, rowEnd: 40, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language="language-ts" code={nestController} />
      </Cell>

      <Cell
        deskPos={{ rowStart: 42, rowEnd: 43, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          sub
          logo={<span className="icon-nestjs" />}
          titleContent="Providers"
          official="https://docs.nestjs.com/providers"
        />
      </Cell>

      <Cell
        deskPos={{ rowStart: 43, rowEnd: 53, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          Providers are a fundamental concept in Nest. Many of the basic Nest
          classes may be treated as a provider – services, repositories,
          factories, helpers, and so on.
          <br />
          <br /> The main idea of a provider is that it can inject dependencies;
          this means objects can create various relationships with each other,
          and the function of "wiring up" instances of objects can largely be
          delegated to the Nest runtime system.
          <br />
          <br /> A provider is simply a class annotated with an @Injectable()
          decorator.
        </div>
      </Cell>
    </>
  );
};

export default Nest;
