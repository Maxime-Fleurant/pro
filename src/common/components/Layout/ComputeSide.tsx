import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import {
  activeSideLink,
  sideLink,
  bigSideLink,
  bigActiveSideLink,
  linkBlockWrapp,
} from './style';
import CLink from '../CLink';
import TypegraphqlIcon from '../icons/Typegraphql';
import PassportIcon from '../icons/Passport';
import JWTIcon from '../icons/JWT';
import { ITheme } from './Theme';

const ComputeSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/node"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>Node</a>
        </CLink>

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
        <CLink
          href="/compute/graphql"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>Graphql</a>
        </CLink>

        <CLink
          href="/compute/apollo"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Apollo</a>
        </CLink>

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
          href="/compute/complexity"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Complexity</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/di"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>DI</a>
        </CLink>

        <CLink
          href="/compute/typedi"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>TypeDI</a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/auth"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>Auth</a>
        </CLink>

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

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/testing"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>Testing</a>
        </CLink>
      </div>
    </>
  );
};

export default ComputeSide;
