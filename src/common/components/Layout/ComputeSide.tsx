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
          <a>
            Node&nbsp;
            <span className="icon-nodejs-icon" />
          </a>
        </CLink>

        <CLink
          href="/compute/express"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            Express&nbsp;
            <span className="icon-expressjs-icon" />
          </a>
        </CLink>

        <CLink
          href="/compute/nest"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            Nest&nbsp;
            <span className="icon-nestjs" />
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/graphql"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>
            Graphql&nbsp;
            <span className="icon-graphql" />
          </a>
        </CLink>

        <CLink
          href="/compute/apollo"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            Apollo&nbsp;
            <span className="icon-a" />
          </a>
        </CLink>

        <CLink
          href="/compute/typegraphql"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            TypeGraphql&nbsp;
            <TypegraphqlIcon />
          </a>
        </CLink>

        <CLink
          href="/compute/dataloader"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            Dataloader&nbsp;
            <span>🧩</span>
          </a>
        </CLink>

        <CLink
          href="/compute/complexity"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            Complexity&nbsp;
            <span>🔰</span>
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/di"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>
            DI&nbsp;
            <span>🧱</span>
          </a>
        </CLink>

        <CLink
          href="/compute/typedi"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            TypeDI&nbsp;
            <span>⚙️</span>
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/auth"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>
            Auth&nbsp;
            <span>🔐</span>
          </a>
        </CLink>

        <CLink
          href="/compute/passport"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            PassportJS&nbsp;
            <PassportIcon />
          </a>
        </CLink>

        <CLink
          href="/compute/jwt"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>
            JWT&nbsp;
            <JWTIcon />
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink
          href="/compute/testing"
          nonActiveCss={bigSideLink(theme)}
          activeCss={bigActiveSideLink(theme)}
        >
          <a>
            Testing&nbsp;
            <span>🧪</span>
          </a>
        </CLink>
      </div>
    </>
  );
};

export default ComputeSide;
