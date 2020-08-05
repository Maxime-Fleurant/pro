import Article from '../../common/components/Article/Article';
import { insideLink } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { mainLayer } from '../../common/components/Article/CodeBrowser/codes/3layer';
import { drymain } from '../../common/components/Article/CodeBrowser/codes/dry';
import { dimain } from '../../common/components/Article/CodeBrowser/codes/di';
import MongoDbIcon from '../../common/components/icons/Mongodb';
import { mongMain } from '../../common/components/Article/CodeBrowser/codes/mongo';
import { neomain } from '../../common/components/Article/CodeBrowser/codes/neo4j';
import NeoIcon from '../../common/components/icons/neo';
import { dockerMain } from '../../common/components/Article/CodeBrowser/codes/docker';

const Docker = (): JSX.Element => {
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
            You can find examples of my code using Neo4j in the
            scrap-anime-neo4j Github repository.
          </span>
        }
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
