import Article from '../../common/components/Article/Article';
import Head from 'next/head';
import { dockerMain } from '../../common/components/Article/CodeBrowser/codes/docker';
import { githubLinkCaption } from '../../common/components/Layout/style';
import TextLink from '../../common/components/Article/textLink/TextLink';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';

const Docker = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Docker</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'Live Demo',
            items: [
              {
                name: 'Anime Search',
                href: 'https://anime.maximefleurant.com/',
                outside: true,
              },
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
              {
                name: 'GraphQL-Api',
                href: 'https://github.com/Maxime-Fleurant/GraphQL-Anime-Api',
                outside: true,
              },
              {
                name: 'Express-Rest',
                href:
                  'https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres',
                outside: true,
              },
            ],
          },

          {
            name: 'Ressources',
            items: [
              {
                name: 'Official Website',
                href: 'https://www.docker.com/',
                outside: true,
              },
              {
                name: 'Github',
                href: 'https://github.com/docker',
                outside: true,
              },
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Docker_(software)',
                outside: true,
              },
            ],
          },

          {
            name: 'Related',
            items: [
              {
                name: 'PostgreSQL',
                href: '/compute/postgres',
                domain: true,
              },
            ],
          },
          {
            name: 'External',
            items: [
              {
                name: 'Normalization',
                href:
                  'https://www.lucidchart.com/pages/database-diagram/database-design',
                outside: true,
              },
            ],
          },
        ]}
      />

      <Article
        articleHeader={{
          titleContent: 'Docker',
          logo: <span className="icon-docker-icon" />,
          desc: 'Define and run multi-container applications with Docker',
          wiki: 'https://en.wikipedia.org/wiki/Docker_(software)',
          git: 'https://github.com/docker',
          official: 'https://www.docker.com/',
          detail: 'Ops | Container',
        }}
        headerContent={
          <span>
            Docker is a tool designed to make it easier to create, deploy, and
            run applications by using containers.
            <br />
            <br /> Containers allow a developer to package up an application
            with all of the parts it needs, such as libraries and other
            dependencies, and deploy it as one package. By doing so, thanks to
            the container, the developer can rest assured that the application
            will run on any other Linux machine regardless of any customized
            settings that machine might have that could differ from the machine
            used for writing and testing the code.
            <br />
            <br />
            <span css={githubLinkCaption}>
              The following example is code I wrote. More detailed examples of
              my code using Docker :
              <TextLink
                outside
                logo={<span className="icon-github-filled" />}
                text=" Nest-Rest-Anime-Api "
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
                href="https://github.com/Maxime-Fleurant/Express-Rest-Anime-Api/tree/master/api_postgres"
              />
            </span>
          </span>
        }
        headerContentHeightExtra={10}
        headerCode={{
          code: dockerMain,
          language: 'language-yml',
        }}
        content={[]}
      />
    </>
  );
};

export default Docker;
