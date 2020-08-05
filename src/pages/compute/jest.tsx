import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import PassportIcon from '../../common/components/icons/Passport';
import { mainpassport } from '../../common/components/Article/CodeBrowser/codes/passport';
import JWTIcon from '../../common/components/icons/JWT';
import { jwtmain } from '../../common/components/Article/CodeBrowser/codes/jwt';
import JestIcon from '../../common/components/icons/Jest';
import {
  jestmain,
  jestUnit,
} from '../../common/components/Article/CodeBrowser/codes/jest';

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
          titleContent: 'Jest',
          logo: <JestIcon />,
          desc:
            'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
          npm: 'https://www.npmjs.com/package/jest',
          official: 'https://jestjs.io/en/',
          git: 'https://github.com/facebook/jest',
          wiki: 'https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)',
          detail: 'Testing | Tool',
        }}
        headerContent={
          <span>
            Jest aims to work out of the box, config free, on most JavaScript
            projects.
            <br />
            <br />
            Make tests which keep track of large objects with ease. Snapshots
            live either alongside your tests, or embedded inline.
            <br />
            <br />
            Tests are parallelized by running them in their own processes to
            maximize performance.
            <br />
            <br />
            From it to expect - Jest has the entire toolkit in one place. Well
            documented, well maintained, well good.
            <br />
            <br />
            You can find examples of my code using Jest in the nest-rest-api
            Github repository
          </span>
        }
        headerCode={{
          code: jestmain,
          language: 'language-js',
        }}
        content={[
          {
            header: {
              titleContent: 'Unit Testing',
              logo: <JestIcon />,
            },
            content: (
              <span>
                For precision, speed, and coverage, we rely on unit tests. Unit
                tests are the granddaddy of all automated tests. Developers
                started writing these things have become a staple in modern
                programming languages and platforms.
                <br />
                <br />
                They are extremely quick and very precise. And when things
                break, they tell us exactly where things went wrong. They are
                essential for rapid iterative development, and without these, we
                would be flying blind.
                <br />
                <br />
                Black-box testing is a method of software testing that examines
                the functionality of an application without peering into its
                internal structures or workings.
                <br />
                <br />
                Stubs provide canned answers to calls made during the test,
                usually not responding at all to anything outside what's
                programmed in for the test.
                <br />
                <br />
                Spies are stubs that also record some information based on how
                they were called. One form of this might be an email service
                that records how many messages it was sent.
                <br />
                <br />
                Mocks are objects pre-programmed with expectations which form a
                specification of the calls they are expected to receive.
              </span>
            ),
            code: {
              language: 'language-ts',
              code: jestUnit,
            },
          },
        ]}
      />
    </>
  );
};

export default JWT;
