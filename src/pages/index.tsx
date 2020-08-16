import { FunctionComponent, useEffect, useState } from 'react';
import Typist from 'react-typist';
import Head from 'next/head';
import { useTheme } from 'emotion-theming';
import { SimpleCell } from '../common/components/Cell/SimpleCell';
import ArticleHead from '../common/components/Article/ArticleHead/ArticleHead';
import {
  homeTitle,
  homeTitle2,
  logoRow,
  logoRowWrap,
  homeA1,
  homeA2,
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
import { helveticaMedium, helveticaRegular } from '../common/globalStyle';

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
        <div css={[mainText(theme), { opacity: 0 }, homeA3]}>
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
          which aims to present code examples from Back to Front using different
          technologies. The
          <TextLink
            logo={<span></span>}
            text=" Life "
            href="/life/cinema/dreyer"
          />
          segment is a presentation of various things i like.
          <br />
          <br />
          This app is built without using any CSS framework. All the CSS /
          Layout is hand crafted with Emotion Css In JS solution. The layout is
          based on a
          <TextLink
            logo={<span></span>}
            text=" Grid "
            href="/design/grid"
          />{' '}
          system that I built Using css-grid and Flexbox. The app is statically
          rendered by
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
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 13, columnStart: 15, columnEnd: 22 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <div css={[logoRowWrap, logoA1]}>
          <div css={[logoRow(theme)]}>
            <JsIcon />
            <span className="icon-react" />
            <NpmIcon />
            <span className="icon-a" />
            <span>🎨</span>
            <ElasticIcon />
            <span className=" icon-logo-pwa" />
            <span className="icon-microsoft-windows" />
            <RedIcon />
            <UbIcon />
          </div>

          <div css={[logoRow(theme)]}>
            <span className="icon-graphql" />
            <span className=" icon-next-js" />
            <MongoDbIcon />
            <span className="icon-expressjs-icon" />
            <WebIcon />
            <PassportIcon />
            <RouteIcon />
            <span className="icon-git-icon" />
            <LintIcon />
            <BabelIcon />
          </div>

          <div css={[logoRow(theme)]}>
            <TypescriptIcon />
            <span>👩‍🎤</span>
            <JWTIcon />
            <PrettierIcon />
            <span>🖥</span>
            <span className="icon-knex" />
            <span className="icon-github-filled" />
            <span>🌵</span>
            <LinuxIcon />
            <Ec2Icon />
          </div>

          <div css={[logoRow(theme)]}>
            <span className="icon-nestjs" />
            <span>📱</span>
            <TypegraphqlIcon />
            <span className="icon-aws-logo" />
            <CssIcon />
            <span>🖋</span>
            <span>🧩</span>
            <RdsIcon />
            <span>📐</span>
            <span>💠</span>
          </div>

          <div css={[logoRow(theme)]}>
            <PostgresIcon />
            <span className="icon-redux" />
            <NeoIcon />
            <span>💾</span>
            <span>🧱</span>
            <span>⚙️</span>
            <span>⌚️</span>
            <span>🔐</span>
            <HtmlIcon />
            <TermIcon />
          </div>

          <div css={[logoRow(theme)]}>
            <span className="icon-nodejs-icon" />
            <JestIcon />
            <span className="icon-docker-icon" />
            <VsIcon />
            <AndroidIcon />
            <span>👁</span>
            <span className="icon-gitkraken" />
            <PostIcon />
            <span className="icon-mac-os" />
            <span>🌎</span>
          </div>
        </div>
      </SimpleCell>
    </>
  );
};

export default Index;
