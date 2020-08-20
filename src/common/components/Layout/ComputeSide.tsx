import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { activeSideLink, sideLink, bigSideLink, linkBlockWrapp } from './style';
import CLink from '../CLink';

import { ITheme } from './Theme';

const ComputeSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Node</a>
        </div>

        <CLink
          href="/compute/express"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Express</a>
        </CLink>

        <CLink
          href="/compute/nest"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Nest</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Env</a>
        </div>

        <CLink
          href="/compute/typescript"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Typescript</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>GraphQL</a>
        </div>
        <CLink
          href="/compute/typegraphql"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>TypeGraphql</a>
        </CLink>

        <CLink
          href="/compute/dataloader"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Dataloader</a>
        </CLink>

        <CLink
          href="/compute/apollo"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Apollo</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Front</a>
        </div>
        <CLink
          href="/compute/apolloclient"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Apollo Client</a>
        </CLink>

        <CLink
          href="/compute/emotion"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Css In JS</a>
        </CLink>

        <CLink
          href="/compute/redux"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Redux</a>
        </CLink>

        <CLink
          href="/compute/react"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>React</a>
        </CLink>

        <CLink
          href="/compute/next"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Next</a>
        </CLink>

        <a
          href="https://quantum.maximefleurant.com/"
          target="_blank"
          rel="noreferrer"
          css={sideLink(theme)}
        >
          3D
        </a>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Database</a>
        </div>

        <CLink
          href="/compute/postgres"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>PostgreSQL</a>
        </CLink>

        <CLink
          href="/compute/mongodb"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>MongoDB</a>
        </CLink>

        <CLink
          href="/compute/neo4j"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Neo4j</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Design Pattern</a>
        </div>

        <CLink
          href="/compute/dbnormalization"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Normalization</a>
        </CLink>

        <CLink
          href="/compute/3layer"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>3-Layer</a>
        </CLink>

        <CLink
          href="/compute/dry"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>DRY</a>
        </CLink>

        <CLink
          href="/compute/di"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>DI</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>DI</a>
        </div>

        <CLink
          href="/compute/typedi"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>TypeDI</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Testing</a>
        </div>

        <CLink
          href="/compute/jest"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Jest</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Ops</a>
        </div>

        <CLink
          href="/compute/docker"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Docker</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Auth</a>
        </div>

        <CLink
          href="/compute/passport"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>PassportJS</a>
        </CLink>

        <CLink
          href="/compute/jwt"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>JWT</a>
        </CLink>
      </div>
    </>
  );
};

export default ComputeSide;
