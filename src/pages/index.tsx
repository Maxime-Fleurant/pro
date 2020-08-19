import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Head from 'next/head';
import { useTheme } from 'emotion-theming';
import { SimpleCell } from '../common/components/Cell/SimpleCell';
import ArticleHead from '../common/components/Article/ArticleHead/ArticleHead';
import {
  homeTitle,
  homeTitle2,
  logoRow,
  logoRowWrap,
  logoA1,
} from '../common/components/Layout/style';
import { helveticaMedium, helveticaRegular } from '../common/globalStyle';
import { mainText } from '../common/components/Article/ArticleHead/articleHeaderStyle';
import NpmIcon from '../common/components/icons/Npm';
import JWTIcon from '../common/components/icons/JWT';
import ElasticIcon from '../common/components/icons/Elastic';
import TypegraphqlIcon from '../common/components/icons/Typegraphql';
import TypescriptIcon from '../common/components/icons/Typescript';
import PostgresIcon from '../common/components/icons/Postgres';
import PassportIcon from '../common/components/icons/Passport';
import NeoIcon from '../common/components/icons/neo';
import JestIcon from '../common/components/icons/Jest';
import MongoDbIcon from '../common/components/icons/Mongodb';
import PrettierIcon from '../common/components/icons/Prettier';
import JsIcon from '../common/components/icons/Js';
import LintIcon from '../common/components/icons/EsLint';
import CssIcon from '../common/components/icons/Css';
import Ec2Icon from '../common/components/icons/Ec2';
import RdsIcon from '../common/components/icons/Rds';
import RouteIcon from '../common/components/icons/Route';
import AndroidIcon from '../common/components/icons/Android';
import HtmlIcon from '../common/components/icons/Html';
import TermIcon from '../common/components/icons/Terminal';
import PostIcon from '../common/components/icons/Postman';
import RedIcon from '../common/components/icons/Redix';
import UbIcon from '../common/components/icons/Ub';
import VsIcon from '../common/components/icons/VsCode';
import WebIcon from '../common/components/icons/Web';
import BabelIcon from '../common/components/icons/Babel';
import LinuxIcon from '../common/components/icons/Linux';
import { ITheme } from '../common/components/Layout/Theme';
import TextLink from '../common/components/Article/textLink/TextLink';

import CategoryItem from '../common/components/Category/CategoryItem';

const Index: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  let deferredPrompt: { prompt: () => void };
  const [promptState, updatePrompt] = useState(null);

  const promptt = () => {
    promptState.prompt();
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = (e as unknown) as { prompt: () => void };
      updatePrompt(deferredPrompt);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Maxime Fleurant Full Stack Developement Paris</title>
      </Head>
      <SimpleCell
        deskPos={{ rowStart: 9, rowEnd: 11, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent={
            <Typist
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1 }}
              startDelay={300}
              avgTypingDelay={100}
            >
              <span css={homeTitle}>Design,</span>
              <br />
              <span css={homeTitle2}>Compute.</span>
            </Typist>
          }
          bigSub
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 11, rowEnd: 12, columnStart: 4, columnEnd: 14 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 5, rowEnd: 6, columnStart: 1, columnEnd: 25 }}
      >
        <Zoom duration={1500} delay={1500}>
          <div css={[mainText(theme)]}>
            Hi, my name is Maxime Fleurant and i'm a Full-Stack web developer
            based in Paris. This App is intended to be a presentation of the
            technology and design techniques that I use. The app is divided into
            four segments: Design - Compute - Project - Life. In the compute
            segment you will find descriptions of the technologies used in
            different projects, in combinations of what other technologies they
            are used as well as code snippets I wrote. For more detailed code
            examples links to the
            <TextLink
              outside
              logo={<span className="icon-github-filled" />}
              text=" Github "
              href="https://github.com/Maxime-Fleurant/Next-React-Portefolio"
            />{' '}
            repositories of these projects are also available. Most of the
            artciles revolve around the
            <TextLink
              outside
              logo={<span>👁</span>}
              text=" Anime Search Project "
              href="https://anime.maximefleurant.com/"
            />{' '}
            which aims to present code examples from Back to Front using
            different technologies. The
            <TextLink
              logo={<span></span>}
              text=" Life "
              href="/life/cinema/dreyer"
            />
            segment is a presentation of various things i like.
            <br />
            <br />
            This app is built without using any CSS framework. All the CSS /
            Layout is hand crafted with Emotion Css In JS solution. The layout
            is based on a
            <TextLink
              logo={<span></span>}
              text=" Grid "
              href="/design/grid"
            />{' '}
            system that I built Using css-grid and Flexbox. The app is
            statically rendered by
            <TextLink
              logo={<span className="icon-react" />}
              text=" React "
              href="/compute/react"
            />{' '}
            and
            <TextLink
              logo={<span className="icon-next-js" />}
              text=" Next "
              href="/compute/next"
            />
            .
            <br />
            <br />
            You can also install this app as a{' '}
            <span
              css={promptState ? helveticaMedium : helveticaRegular}
              onClick={promptState ? promptt : null}
            >
              PWA
            </span>
            .
          </div>
        </Zoom>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 13, columnStart: 15, columnEnd: 22 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <Zoom duration={1500} delay={2000}>
          <div css={[logoRowWrap, logoA1]}>
            <div css={[logoRow(theme)]}>
              <span>
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <JsIcon />
                </a>
              </span>

              <span>
                <Link href="/compute/react">
                  <a href="/compute/react">
                    <span className="icon-react" />
                  </a>
                </Link>
              </span>

              <span>
                <a
                  href="https://www.npmjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <NpmIcon />
                </a>
              </span>

              <span>
                <Link href="/compute/apollo">
                  <a href="/compute/apollo">
                    <span className="icon-a" />
                  </a>
                </Link>
              </span>

              <span>
                <Link href="/design/color">
                  <a href="/design/color">
                    <span>🎨</span>
                  </a>
                </Link>
              </span>

              <span>
                <a
                  href="https://www.elastic.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ElasticIcon />
                </a>
              </span>

              <span>
                <a
                  href="https://www.pwabuilder.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className=" icon-logo-pwa" />
                </a>
              </span>

              <span>
                <a
                  href="https://www.microsoft.com/en-us/windows"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-microsoft-windows" />
                </a>
              </span>

              <span>
                <a
                  href="https://www.microsoft.com/en-us/windows"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RedIcon />
                </a>
              </span>

              <span>
                <a
                  href="https://www.microsoft.com/en-us/windows"
                  target="_blank"
                  rel="noreferrer"
                >
                  <UbIcon />
                </a>
              </span>
            </div>

            <div css={[logoRow(theme)]}>
              <span>
                <Link href="/design/color">
                  <a href="/design/color">
                    <span className="icon-graphql" />
                  </a>
                </Link>
              </span>

              <span>
                <Link href="/compute/next">
                  <a href="/compute/next">
                    <span className=" icon-next-js" />
                  </a>
                </Link>
              </span>

              <span>
                <Link href="/compute/mongodb">
                  <a href="/compute/mongodb">
                    <MongoDbIcon />
                  </a>
                </Link>
              </span>

              <span>
                <Link href="/compute/express">
                  <a href="/compute/express">
                    <span className="icon-expressjs-icon" />
                  </a>
                </Link>
              </span>

              <span>
                <a
                  href="https://webpack.js.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WebIcon />
                </a>
              </span>

              <span>
                <Link href="/compute/passport">
                  <a href="/compute/passport">
                    <PassportIcon />
                  </a>
                </Link>
              </span>

              <span>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RouteIcon />
                </a>
              </span>

              <span>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <span className="icon-git-icon" />
                </a>
              </span>

              <span>
                <a href="https://eslint.org/" target="_blank" rel="noreferrer">
                  <LintIcon />
                </a>
              </span>

              <span>
                <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                  <BabelIcon />
                </a>
              </span>
            </div>

            <div css={[logoRow(theme)]}>
              <span>
                <Link href="/compute/typescript">
                  <a href="/compute/typescript">
                    <TypescriptIcon />
                  </a>
                </Link>
              </span>

              <span>
                <Link href="/compute/emotion">
                  <a href="/compute/emotion">
                    <span>👩‍🎤</span>
                  </a>
                </Link>
              </span>

              <span>
                <Link href="/compute/jwt">
                  <a href="/compute/jwt">
                    <JWTIcon />
                  </a>
                </Link>
              </span>

              <span>
                <a href="https://prettier.io/" target="_blank" rel="noreferrer">
                  <PrettierIcon />
                </a>
              </span>

              <span>
                <a
                  href="https://www.apple.com/macos/catalina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>🖥</span>
                </a>
              </span>

              <span>
                <Link href="/compute/postgres#knex">
                  <a href="/compute/postgres#knex">
                    <span className="icon-knex" />
                  </a>
                </Link>
              </span>

              <span>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <span className="icon-github-filled" />
                </a>
              </span>

              <span>
                <Link href="/compute/dry">
                  <a href="/compute/dry">
                    <span>🌵</span>
                  </a>
                </Link>
              </span>

              <span>
                <a
                  href="https://www.linux.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinuxIcon />
                </a>
              </span>

              <span>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Ec2Icon />
                </a>
              </span>
            </div>

            <div css={[logoRow(theme)]}>
              <span>
                <Link href="/compute/nest">
                  <a href="/compute/nest">
                    <span className="icon-nestjs" />
                  </a>
                </Link>
              </span>
              <span>
                <a
                  href="https://www.apple.com/ios/ios-13/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>📱</span>
                </a>
              </span>
              <span>
                <Link href="/compute/typegraphql">
                  <a href="/compute/typegraphql">
                    <TypegraphqlIcon />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/design/grid">
                  <a href="/design/grid">
                    <span>📐</span>
                  </a>
                </Link>
              </span>
              <span>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-aws-logo" />
                </a>
              </span>
              <span>
                <Link href="/design/motion">
                  <a href="/design/motion">
                    <span>💠</span>
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/design/typography">
                  <a href="/design/typography">
                    <span>🖋</span>
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/dataloader">
                  <a href="/compute/dataloader">
                    <span>🧩</span>
                  </a>
                </Link>
              </span>
              <span>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RdsIcon />
                </a>
              </span>
              <span>
                <Link href="/compute/emotion">
                  <a href="/compute/emotion">
                    <CssIcon />
                  </a>
                </Link>
              </span>
            </div>

            <div css={[logoRow(theme)]}>
              <span>
                <Link href="/compute/postgres">
                  <a href="/compute/postgres">
                    <PostgresIcon />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/redux">
                  <a href="/compute/redux">
                    <span className="icon-redux" />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/neo4j">
                  <a href="/compute/neo4j">
                    <NeoIcon />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/dbnormalization">
                  <a href="/compute/dbnormalization">
                    <span>💾</span>
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/di">
                  <a href="/compute/di">
                    <span>🧱</span>
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/typedi">
                  <a href="/compute/typedi">
                    <span>⚙️</span>
                  </a>
                </Link>
              </span>
              <span>
                <a
                  href="https://www.apple.com/watchos/watchos-preview/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>⌚️</span>
                </a>
              </span>
              <span>
                <a href="https://oauth.net/" target="_blank" rel="noreferrer">
                  <span>🔐</span>
                </a>
              </span>
              <span>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HtmlIcon />
                </a>
              </span>
              <span>
                <a
                  href="https://www.iterm2.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TermIcon />
                </a>
              </span>
            </div>

            <div css={[logoRow(theme)]}>
              <span>
                <span>
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-nodejs-icon" />
                  </a>
                </span>
              </span>
              <span>
                <Link href="/compute/jest">
                  <a href="/compute/jest">
                    <JestIcon />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/compute/docker">
                  <a href="/compute/docker">
                    <span className="icon-docker-icon" />
                  </a>
                </Link>
              </span>
              <span>
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VsIcon />
                </a>
              </span>
              <span>
                <a
                  href="https://www.android.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AndroidIcon />
                </a>
              </span>
              <span>
                <a
                  href="https://anime.maximefleurant.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>👁</span>
                </a>
              </span>
              <span>
                <a
                  href="https://www.gitkraken.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-gitkraken" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.postman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PostIcon />
                </a>
              </span>
              <span>
                <a
                  href="https://www.apple.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-mac-os" />
                </a>
              </span>
              <span>
                <Link href="/">
                  <a href="/">
                    <span>🌎</span>
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </Zoom>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 16, rowEnd: 17, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 14, rowEnd: 15, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Express"
          href="/compute/express"
          detail="Fast, unopinionated, minimalist web framework for Node.js"
          logo={<span className="icon-expressjs-icon" />}
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 16, rowEnd: 17, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 14, rowEnd: 15, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Nest"
          logo={<span className="icon-nestjs" />}
          detail="A progressive Node.js framework for building efficient, reliable and scalable server-side applications."
          href="/compute/nest"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 16, rowEnd: 17, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 15, rowEnd: 16, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 13, rowEnd: 14, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Typescript"
          logo={<TypescriptIcon />}
          detail="TypeScript is a superset of JavaScript that compiles to clean JavaScript output"
          href="/compute/typescript"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 17, rowEnd: 18, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 15, rowEnd: 16, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 14, rowEnd: 15, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="TypeGraphQL"
          logo={<TypegraphqlIcon />}
          detail="Create GraphQL schema and resolvers with TypeScript, using classes and decorators"
          href="/compute/typegraphql"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 17, rowEnd: 18, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 15, rowEnd: 16, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="DataLoader"
          logo={<span>🧩</span>}
          detail="Simplified and consistent API over various remote data sources such as databases or web services via batching and caching"
          href="/compute/dataloader"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 17, rowEnd: 18, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Apollo"
          logo={<span className="icon-a" />}
          detail="Simplify app development by combining APIs, databases, and microservices into a single data graph that you can query with GraphQL"
          href="/compute/apollo"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 18, rowEnd: 19, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 17, rowEnd: 18, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 17, rowEnd: 18, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Apollo Client"
          logo={<span className="icon-a" />}
          detail="Manage the entirety of your React app's state and seamlessly execute GraphQL operations"
          href="/compute/apolloclient"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 18, rowEnd: 19, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 17, rowEnd: 18, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 18, rowEnd: 19, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Emotion"
          logo={<span>👩‍🎤</span>}
          detail="CSS-in-JS library designed for high performance style composition"
          href="/compute/emotion"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 18, rowEnd: 19, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 18, rowEnd: 19, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 19, rowEnd: 20, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Redux"
          logo={<span className="icon-redux" />}
          detail="A Predictable State Container for JS Apps"
          href="/compute/redux"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 19, rowEnd: 20, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 18, rowEnd: 19, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 20, rowEnd: 21, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="React"
          logo={<span className="icon-react" />}
          detail="A JavaScript library for building user interfaces"
          href="/compute/react"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 19, rowEnd: 20, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 19, rowEnd: 20, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 21, rowEnd: 22, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Next"
          logo={<span className="icon-next-js" />}
          detail="Server Side Rendering for react App"
          href="/compute/emotion"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 19, rowEnd: 20, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 19, rowEnd: 20, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="PostgreSQL"
          logo={<PostgresIcon />}
          detail="The World's Most Advanced Open Source Relational Database"
          href="/compute/postgres"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 20, rowEnd: 21, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 20, rowEnd: 21, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 23, rowEnd: 24, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="MongoDB"
          logo={<MongoDbIcon />}
          detail="MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need"
          href="/compute/mongodb"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 20, rowEnd: 21, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 20, rowEnd: 21, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 24, rowEnd: 25, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Neo4j"
          logo={<NeoIcon />}
          detail="The Native Graph Database for Today’s Connected Applications"
          href="/compute/neo4j"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 20, rowEnd: 21, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 21, rowEnd: 22, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 25, rowEnd: 26, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Database Normalization"
          logo={<span>💾</span>}
          detail="Database normalization is the process of structuring a relational database"
          href="/compute/dbnormalization"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 21, rowEnd: 22, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 21, rowEnd: 22, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 26, rowEnd: 27, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="3-layer"
          logo={<span>🥪</span>}
          detail="The idea is to use the principle of separation of concerns to move the business logic away from the node.js API Routes"
          href="/compute/3layer"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 21, rowEnd: 22, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 27, rowEnd: 28, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="DRY"
          logo={<span>🌵</span>}
          detail="Don't repeat yourself (DRY, or sometimes do not repeat yourself)"
          href="/compute/neo4j"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 21, rowEnd: 22, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 28, rowEnd: 29, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Dependencies Injection"
          logo={<span>🧱</span>}
          detail="Inversion of Control Containers using  Dependencies Injection"
          href="/compute/dbnormalization"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 22, rowEnd: 23, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 23, rowEnd: 24, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 29, rowEnd: 30, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="TypeDI"
          logo={<span>⚙️</span>}
          detail="Simple yet powerful dependency injection tool for JavaScript and TypeScript"
          href="/compute/3layer"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 22, rowEnd: 23, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 23, rowEnd: 24, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 30, rowEnd: 31, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Jest"
          logo={<JestIcon />}
          detail="Jest is a delightful JavaScript Testing Framework with a focus on simplicity"
          href="/compute/neo4j"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 22, rowEnd: 23, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 24, rowEnd: 25, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 31, rowEnd: 32, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Docker"
          logo={<span className="icon-docker-icon" />}
          detail="Define and run multi-container applications with Docker"
          href="/compute/dbnormalization"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 23, rowEnd: 24, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 24, rowEnd: 25, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 32, rowEnd: 33, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="PassportJS"
          logo={<PassportIcon />}
          detail="Simple, unobtrusive authentication for Node.js"
          href="/compute/neo4j"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 23, rowEnd: 24, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 25, rowEnd: 26, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 33, rowEnd: 34, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="JWT"
          logo={<JWTIcon />}
          detail="JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties"
          href="/compute/dbnormalization"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 23, rowEnd: 24, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 25, rowEnd: 26, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 34, rowEnd: 35, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Color"
          logo={<span>🎨</span>}
          detail="Any ground subtracts its own hue from the colors which it carries and therefore influences"
          href="/compute/dbnormalization"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 24, rowEnd: 25, columnStart: 4, columnEnd: 10 }}
        tabPos={{ rowStart: 26, rowEnd: 27, columnStart: 13, columnEnd: 25 }}
        mobilPos={{ rowStart: 35, rowEnd: 36, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Grid"
          logo={<span>📐</span>}
          detail="The use of the grid implies the will to cultivate objectivity instead of subjectivity"
          href="/compute/neo4j"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 24, rowEnd: 25, columnStart: 10, columnEnd: 16 }}
        tabPos={{ rowStart: 26, rowEnd: 27, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 36, rowEnd: 37, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Motion"
          logo={<span>💠</span>}
          detail="Every drawing can be understood as a motion study since it is a path
          of motion recorded by graphic means"
          href="/compute/dbnormalization"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 24, rowEnd: 25, columnStart: 16, columnEnd: 22 }}
        tabPos={{ rowStart: 27, rowEnd: 28, columnStart: 1, columnEnd: 13 }}
        mobilPos={{ rowStart: 37, rowEnd: 38, columnStart: 1, columnEnd: 25 }}
        allRatio={0.6}
        relative
      >
        <CategoryItem
          name="Typography"
          logo={<span>🖋</span>}
          detail="The whole point with type is for you not to be aware it is there. If you remember the shape of a spoon with which you just ate some soup, then the spoon had a poor shape"
          href="/compute/dbnormalization"
        />
      </SimpleCell>
    </>
  );
};

export default Index;
