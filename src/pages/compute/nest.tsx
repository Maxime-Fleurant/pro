import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
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
import TextLink from '../../common/components/Article/textLink/TextLink';
import PostgresIcon from '../../common/components/icons/Postgres';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import JestIcon from '../../common/components/icons/Jest';
import Head from 'next/head';

const Nest = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Nest</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Modules', href: '#modules' },
              { name: 'Controllers', href: '#controllers' },
              { name: 'DTO', href: '#dto' },
              { name: 'Providers', href: '#providers' },
              { name: 'Generic Crud', href: '#Generic' },
              { name: 'Guards', href: '#Guards' },
            ],
          },
          {
            name: 'My Code',
            items: [
              {
                name: 'Nest-Rest',
                href: 'https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://nestjs.com/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/nestjs/nest',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/@nestjs/core',
                outside: true,
              },
            ],
          },
          {
            name: 'Related',
            items: [
              { name: 'PostgreSQL', href: '/compute/postgres', domain: true },
              { name: 'Typescript', href: '/compute/typescript', domain: true },
              {
                name: 'TypeOrm',
                href: '/compute/postgres#typeorm',
                domain: true,
              },
              { name: '3-Layer', href: '/compute/3layer', domain: true },
              { name: 'Jest', href: '/compute/jest', domain: true },
              { name: 'DRY', href: '/compute/dry', domain: true },
              { name: 'JWT', href: '/compute/jwt', domain: true },
              { name: 'DI', href: '/compute/di', domain: true },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'MetaProgramming',
                href:
                  'http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a id="intro" css={anchorPos} />
            Nest is a framework for building efficient, scalable Node.js
            server-side applications. It uses progressive Javascript, is built
            with and fully supports
            <TextLink
              logo={<TypescriptIcon />}
              text=" Typescript "
              href="/compute/typescript"
            />{' '}
            (yet still enables developers to code in pure JavaScript) and
            combines elements of OOP (Object Oriented Programming), FP
            (Functional Programming), and FRP (Functional Reactive Programming).
            <br />
            <br />
            Under the hood, Nest makes use of robust HTTP Server frameworks like
            <TextLink
              logo={<span className="icon-expressjs-icon" />}
              text=" Express "
              href="/compute/express"
            />{' '}
            (the default) and optionally can be configured to use Fastify. Nest
            provides a level of abstraction above these common Node.JS
            frameworks (Express/Fastify), but also exposes their APIs directly
            to the developer. This allows developers the freedom to use the
            myriad of third-party modules which are available for the underlying
            platform.
            <br />
            <br />I use
            <TextLink
              logo={<span className="icon-nestjs" />}
              text=" Nest "
              href="/compute/nest"
            />{' '}
            for its ability to provide a toolkit allowing scalable API
            development following OOP development paradigms. While I use Express
            to quickly prototype an API, Nest allows me to develop a Production
            grade API following
            <TextLink
              logo={<span>🌵</span>}
              text=" DRY "
              href="/compute/dry"
            />{' '}
            principles. The use of modules and
            <TextLink
              logo={<span>🧱</span>}
              text=" dependency injection "
              href="/compute/di"
            />{' '}
            make it easier to reuse logic and understand the whole system. To
            interact with a{' '}
            <TextLink
              logo={<PostgresIcon />}
              text=" PostgreSQL "
              href="/compute/postgres"
            />{' '}
            database I use the built in
            <TextLink
              logo={<span />}
              text=" TypeOrm "
              href="/compute/postgres#typeorm"
            />{' '}
            module with its repository pattern that Nest Provides. Tests are
            handled by
            <TextLink
              logo={<JestIcon />}
              text=" Jest "
              href="/compute/jest"
            />{' '}
            which is included in the Nest package
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Nest :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api Github "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />{' '}
            </span>
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
                <a id="modules" css={anchorPos} />
                <TextLink
                  logo={<span className="icon-nestjs" />}
                  text="Nest "
                  href="/compute/nest"
                />{' '}
                is built around the strong design pattern commonly known as
                <TextLink
                  logo={<span>🧱</span>}
                  text=" dependency injection "
                  href="/compute/di"
                />
                . In Nest, thanks to
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" Typescript "
                  href="/compute/typescript"
                />{' '}
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
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Nest Modules :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api Github "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api/blob/master/src/app.module.ts"
                  />{' '}
                  repository
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestModule,
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
                <a id="controllers" css={anchorPos} />
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
                decorators.
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" Decorators "
                  href="/compute/typescript#decorators"
                />{' '}
                associate classes with required metadata and enable
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
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Nest Controllers and Decorators :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api Github "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api/blob/master/src/animes/animes.controller.ts"
                  />{' '}
                  repository
                </span>
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
                <a id="dto" css={anchorPos} />
                A DTO is an object that defines how the data will be sent over
                the network. We could determine the DTO schema by using
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" TypeScript "
                  href="/compute/typescript"
                />{' '}
                interfaces, or by simple classes.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Nest with DTOs :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api Github "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api/blob/master/src/animes/dto/create-anime.dto.ts"
                  />{' '}
                  repository
                </span>
              </span>
            ),
            code: {
              language: 'language-ts',
              code: nestDto,
            },
            extraSpace: 5,
          },
          {
            header: {
              titleContent: 'Providers',
              logo: <span className="icon-nestjs" />,
              official: 'https://docs.nestjs.com/providers',
            },
            content: (
              <span>
                <a id="providers" css={anchorPos} />
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
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Nest Providers :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api Github "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api/blob/master/src/animes/animes.service.ts"
                  />{' '}
                  repository
                </span>
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
                <a id="Generic" css={anchorPos} />
                To follow the{' '}
                <TextLink
                  logo={<span>🌵</span>}
                  text=" DRY "
                  href="/compute/dry"
                />{' '}
                pattern, when the input of a request does not require specific
                handling, it is easy to create a generic crud service. <br />
                <br />
                By doing so we avoid repeating the logic that will require the
                verification of a DTO and the sending of this payload to the
                database service.
                <br />
                <br /> Using
                <TextLink
                  logo={<TypescriptIcon />}
                  text=" Typescript "
                  href="/compute/typescript"
                />{' '}
                we can create a factory function which will return a Typed class
                defining the basic crud actions, using the generic arguments
                passed to the Typescript function. Then we can use this class to
                extend the basic service provider.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Nest Generic Crud :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api Github "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api/blob/master/src/shared/generic-service-orchestrator.ts"
                  />{' '}
                  repository
                </span>
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
                <a id="Guards" css={anchorPos} />
                A guard is a class annotated with the @Injectable() decorator.
                Guards should implement the CanActivate interface. <br />
                <br />
                Guards have a single responsibility. They determine whether a
                given request will be handled by the route handler or not,
                depending on certain conditions (like permissions, roles, ACLs,
                etc.) present at run-time. <br />
                <br />
                This is often referred to as authorization. Guards have access
                to the ExecutionContext instance, and thus know exactly what's
                going to be executed next.
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Nest Guards :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api Github "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api/tree/master/src/auth"
                  />{' '}
                  repository
                </span>
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
