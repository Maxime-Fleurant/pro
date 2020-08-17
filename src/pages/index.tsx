import { FunctionComponent, useEffect, useState } from 'react';
import Typist from 'react-typist';
import Flip from 'react-reveal/Flip';
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
  homeA3,
  logoA1,
} from '../common/components/Layout/style';
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
import Link from 'next/link';

const Index: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

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
        <Fade left duration={1500} delay={2000}>
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
          </div>
        </Fade>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 13, columnStart: 15, columnEnd: 22 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <Zoom duration={1500} delay={2500}>
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
    </>
  );
};

export default Index;
