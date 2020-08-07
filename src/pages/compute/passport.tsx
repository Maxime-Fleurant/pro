import Article from '../../common/components/Article/Article';
import PassportIcon from '../../common/components/icons/Passport';
import { mainpassport } from '../../common/components/Article/CodeBrowser/codes/passport';
import { githubLinkCaption } from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Passport = () => {
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
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'http://www.passportjs.org/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/jaredhanson/passport',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/passport',
                outside: true,
              },
            ],
          },
        ]}
      />

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
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Passport :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api Github "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />
            </span>
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
