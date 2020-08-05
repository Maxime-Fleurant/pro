import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import PassportIcon from '../../common/components/icons/Passport';
import { mainpassport } from '../../common/components/Article/CodeBrowser/codes/passport';
import JWTIcon from '../../common/components/icons/JWT';
import { jwtmain } from '../../common/components/Article/CodeBrowser/codes/jwt';

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
            You can find examples of my code using JWT in the Anime Search
            Github Repository project as well as in the nest-rest-api github
            repository.
          </span>
        }
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
