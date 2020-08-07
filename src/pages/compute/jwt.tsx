import Article from '../../common/components/Article/Article';
import JWTIcon from '../../common/components/icons/JWT';
import { jwtmain } from '../../common/components/Article/CodeBrowser/codes/jwt';
import { githubLinkCaption } from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
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
                name: 'Graphql-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
              {
                name: 'Express-Rest',
                href:
                  'https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api',
                outside: true,
              },
            ],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://jwt.io/introduction/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/auth0/node-jsonwebtoken',
                outside: true,
              },

              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/JSON_Web_Token',
                outside: true,
              },

              {
                name: 'NPM',
                href: 'https://www.npmjs.com/package/jsonwebtoken',
                outside: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'JWT',
          logo: <JWTIcon />,
          desc:
            'JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.',
          npm: 'https://www.npmjs.com/package/jsonwebtoken',
          official: 'https://jwt.io/introduction/',
          git: 'https://github.com/auth0/node-jsonwebtoken',
          wiki: 'https://en.wikipedia.org/wiki/JSON_Web_Token',
          detail: 'Auth | Standard',
        }}
        headerContent={
          <span>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. JWTs can be signed using
            a secret (with the HMAC algorithm) or a public/private key pair
            using RSA or ECDSA.
            <br />
            <br />
            Although JWTs can be encrypted to also provide secrecy between
            parties. Signed tokens can verify the integrity of the claims
            contained within it, while encrypted tokens hide those claims from
            other parties. When tokens are signed using public/private key
            pairs, the signature also certifies that only the party holding the
            private key is the one that signed it.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using JWT :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api Github "
                href="https://github.com/Maxime-Fleurant/Nest-Rest-Anime-Api"
              />{' '}
              /
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" GraphQL-Anime-Api "
                href="https://github.com/Maxime-Fleurant/GraphQL-Anime-Api"
              />{' '}
              /
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Express-Rest-Anime-Api "
                href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api"
              />
            </span>
          </span>
        }
        headerContentHeightExtra={10}
        headerCode={{
          code: jwtmain,
          language: 'language-js',
        }}
        content={[]}
      />
    </>
  );
};

export default JWT;
