import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';

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
          titleContent: 'DRY',
          logo: <span>🌵</span>,
          desc:
            "Don't repeat yourself (DRY, or sometimes do not repeat yourself) is a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy",
          wiki: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
          detail: 'Pattern | Code',
        }}
        headerContent={
          <span>
            The DRY principle is stated as "Every piece of knowledge must have a
            single, unambiguous, authoritative representation within a system".
            <br />
            <br />
            The principle has been formulated by Andy Hunt and Dave Thomas in
            their book The Pragmatic Programmer. They apply it quite broadly to
            include "database schemas, test plans, the build system, even
            documentation".
            <br />
            <br /> When the DRY principle is applied successfully, a
            modification of any single element of a system does not require a
            change in other logically unrelated elements. Additionally, elements
            that are logically related all change predictably and uniformly, and
            are thus kept in sync.
            <br />
            <br />
            You can find examples of my code using the DRY pattern in the Anime
            👁 demo project back end and front end Github repositories and also
            in the nest-rest-api github repostitory
          </span>
        }
        headerCode={{
          code: drymain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default JWT;
