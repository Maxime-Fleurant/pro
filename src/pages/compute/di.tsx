import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const DI = (): JSX.Element => {
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

      <Article
        articleHeader={{
          titleContent: 'Dependencies Injection',
          logo: <span>🧱</span>,
          desc: 'Inversion of Control Containers using  Dependencies Injection',
          wiki: 'https://en.wikipedia.org/wiki/Dependency_injection',
          detail: 'Pattern | Code',
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
            <br />
            The service is made part of the client's state. Passing the service
            to the client, rather than allowing a client to build or find the
            service, is the fundamental requirement of the pattern.
            <br />
            <br />
            The intent behind dependency injection is to achieve separation of
            concerns of construction and use of objects. This can increase
            readability and code reuse.
            <br />
            <br />
            You can find examples of my code using Dependencies Injection in the
            Anime 👁 demo project Github repository and the nest-rest-api Github
            repository.
          </span>
        }
        headerCode={{
          code: dimain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default DI;
