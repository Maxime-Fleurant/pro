import Article from '../../common/components/Article/Article';
import JestIcon from '../../common/components/icons/Jest';
import {
  jestmain,
  jestUnit,
} from '../../common/components/Article/CodeBrowser/codes/jest';
import {
  githubLinkCaption,
  anchorPos,
} from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import Head from 'next/head';

const Jest = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Jest</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [
              { name: 'Intro', href: '#intro' },
              { name: 'Unit', href: '#unit' },
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
                href: 'https://jestjs.io/en/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/facebook/jest',
                outside: true,
              },

              {
                name: 'Wiki',
                href:
                  'https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/jest',
                outside: true,
              },
            ],
          },

          {
            name: 'External',
            items: [
              {
                name: 'Mocks',
                href: 'https://martinfowler.com/articles/mocksArentStubs.html',
                outside: true,
              },
              {
                name: 'Test Pyramide',
                href:
                  'https://martinfowler.com/articles/practical-test-pyramid.html',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <a id="intro" css={anchorPos} />
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
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Jest :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />{' '}
            </span>
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
                <a id="unit" css={anchorPos} />
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
                <br />
                <br />
                <span css={githubLinkCaption}>
                  The following example is code I wrote. More detailed examples
                  of my code using Jest :
                  <TextLink
                    outside
                    logo={<span className="icon-github-filled" />}
                    text=" Nest-Rest-Anime-Api "
                    href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
                  />{' '}
                </span>
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

export default Jest;
