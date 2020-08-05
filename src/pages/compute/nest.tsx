import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import JavascriptIcon from '../../common/components/icons/Javascript';
import TypescriptIcon from '../../common/components/icons/Typescript';
import {
  nestMain,
  nestModule,
  nestController,
  nestProvider,
  nestDto,
  nestGenericCrud,
  nestAuth,
} from '../../common/components/Article/CodeBrowser/codes/nest';
import Article from '../../common/components/Article/Article';

const Nest = (): JSX.Element => {
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
          titleContent: 'Nest',
          logo: <span className="icon-nestjs" />,
          desc:
            'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
          npm: 'https://www.npmjs.com/package/@nestjs/core',
          official: 'https://nestjs.com/',
          git: 'https://github.com/nestjs/nest',
          detail: 'Api | Rest',
        }}
        headerContent={
          <span>
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
            (yet still enables developers to code in pure JavaScript) and
            combines elements of OOP (Object Oriented Programming), FP
            (Functional Programming), and FRP (Functional Reactive Programming).
            <br />
            <br />
            Under the hood, Nest makes use of robust HTTP Server frameworks like
            <a css={insideLink}>
              {` Express `}
              <span className="icon-expressjs-icon" />{' '}
            </a>
            (the default) and optionally can be configured to use Fastify. Nest
            provides a level of abstraction above these common
            <a css={insideLink}>
              {` Node.js `} <span className="icon-nodejs-icon" />{' '}
            </a>
            frameworks (Express/Fastify), but also exposes their APIs directly
            to the developer. This allows developers the freedom to use the
            myriad of third-party modules which are available for the underlying
            platform.
            <br />
            <br />I use
            <a css={insideLink}>
              {` Nest `} <span className="icon-nestjs" />{' '}
            </a>{' '}
            for its ability to provide a toolkit allowing scalable API
            development following OOP development paradigms. While I use Express
            to quickly prototype an API, Nest allows me to develop a Production
            grade API. The use of modules and
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
          </span>
        }
        headerCode={{ code: nestMain, language: 'language-ts' }}
        content={[
          {
            header: {
              titleContent: 'Modules',
              logo: <span className="icon-nestjs" />,
              official: 'https://docs.nestjs.com/modules',
            },
            content: (
              <span>
                <a css={insideLink}>
                  {`Nest `} <span className="icon-nestjs" />{' '}
                </a>
                is built around the strong design pattern commonly known as{' '}
                <a css={insideLink}>{` dependency injection `}🧱</a>. In Nest,
                thanks to
                <a css={insideLink}>
                  {` TypeScript `}
                  <TypescriptIcon />{' '}
                </a>
                capabilities, it's extremely easy to manage dependencies because
                they are resolved just by type.
                <br />
                <br />A module is a class annotated with a @Module() decorator.
                The @Module() decorator provides metadata that Nest makes use of
                to organize the application structure.
                <br />
                <br />
                Each application has at least one module, a root module. The
                root module is the starting point Nest uses to build the
                application graph - the internal data structure Nest uses to
                resolve module and provider relationships and dependencies.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestModule,
              heightAuto: true,
            },
          },
          {
            header: {
              titleContent: 'Controllers',
              logo: <span className="icon-nestjs" />,
              official: 'https://docs.nestjs.com/controllers',
            },
            content: (
              <span>
                Controllers are responsible for handling incoming requests and
                returning responses to the client. <br />
                <br />A controller's purpose is to receive specific requests for
                the application. The routing mechanism controls which controller
                receives which requests. Frequently, each controller has more
                than one route, and different routes can perform different
                actions.
                <br />
                <br />
                In order to create a basic controller, we use classes and
                decorators. Decorators associate classes with required metadata
                and enable
                <a css={insideLink}>
                  {` Nest `} <span className="icon-nestjs" />{' '}
                </a>
                to create a routing map (tie requests to the corresponding
                controllers).
                <br />
                <br />
                @Param() is used to decorate a method parameter , and makes the
                route parameters available as properties of that decorated
                method parameter inside the body of the method.
                <br />
                <br />
                The request object represents the HTTP request and has
                properties for the request query string, parameters, HTTP
                headers, and body . In most cases, it's not necessary to grab
                these properties manually. We can use dedicated decorators
                instead, such as @Body() or @Query()
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestController,
            },
          },
          {
            header: {
              titleContent: 'DTO',
              logo: <span className="icon-nestjs" />,
              official: 'https://docs.nestjs.com/controllers#request-payloads',
            },
            content: (
              <span>
                A DTO is an object that defines how the data will be sent over
                the network. We could determine the DTO schema by using
                TypeScript interfaces, or by simple classes.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestDto,
            },
            extraSpace: 10,
          },
          {
            header: {
              titleContent: 'Providers',
              logo: <span className="icon-nestjs" />,
              official: 'https://docs.nestjs.com/providers',
            },
            content: (
              <span>
                Providers are a fundamental concept in Nest. Many of the basic
                Nest classes may be treated as a provider – services,
                repositories, factories, helpers, and so on.
                <br />
                <br /> The main idea of a provider is that it can inject
                dependencies; this means objects can create various
                relationships with each other, and the function of "wiring up"
                instances of objects can largely be delegated to the Nest
                runtime system.
                <br />
                <br /> A provider is simply a class annotated with an
                @Injectable() decorator.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestProvider,
            },
          },
          {
            header: {
              titleContent: 'Generic Crud Operation',
              logo: <span className="icon-nestjs" />,
            },
            content: (
              <span>
                To follow the DRY pattern, when the input of a request does not
                require specific handling, it is easy to create a generic crud
                service. <br />
                <br />
                By doing so we avoid repeating the logic that will require the
                verification of a DTO and the sending of this payload to the
                database service.
                <br />
                <br /> Using Typescript we can create a factory function which
                will return a Typed class defining the basic crud actions, using
                the generic arguments passed to the Typescript function. Then we
                can use this class to extend the basic service provider.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestGenericCrud,
            },
          },
          {
            header: {
              titleContent: 'Auth with Guards',
              logo: <span className="icon-nestjs" />,
              official: 'https://docs.nestjs.com/techniques/authentication',
            },
            content: (
              <span>
                A guard is a class annotated with the @Injectable() decorator.
                Guards should implement the CanActivate interface. <br />
                <br />
                Guards have a single responsibility. They determine whether a
                given request will be handled by the route handler or not,
                depending on certain conditions (like permissions, roles, ACLs,
                etc.) present at run-time. <br />
                <br />
                This is often referred to as authorization.Guards have access to
                the ExecutionContext instance, and thus know exactly what's
                going to be executed next.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestAuth,
            },
          },
        ]}
      />
    </>
  );
};

export default Nest;
