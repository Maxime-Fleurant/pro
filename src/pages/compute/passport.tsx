import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import PassportIcon from '../../common/components/icons/Passport';
import { mainpassport } from '../../common/components/Article/CodeBrowser/codes/passport';

const Passport = () => {
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
          titleContent: 'PassportJS',
          logo: <PassportIcon />,
          desc: 'Simple, unobtrusive authentication for Node.js',
          npm: 'https://www.npmjs.com/package/passport',
          official: 'http://www.passportjs.org/',
          git: 'https://github.com/jaredhanson/passport',
          detail: 'Auth | Tool',
        }}
        headerContent={
          <span>
            Passport is authentication middleware for Node.js. Extremely
            flexible and modular, Passport can be unobtrusively dropped in to
            any Express-based web application. A comprehensive set of strategies
            support authentication using a username and password, Facebook,
            Twitter, and more.
            <br />
            <br />
            You can find examples of my code using PassportJS in the
            nest-rest-api
            <a css={insideLink}>
              {` Github `} <span className="icon-github-filled" />{' '}
            </a>
            repository
          </span>
        }
        headerCode={{
          code: mainpassport,
          language: 'language-js',
        }}
        headerContentHeightExtra={12}
        content={[]}
      />
    </>
  );
};

export default Passport;
