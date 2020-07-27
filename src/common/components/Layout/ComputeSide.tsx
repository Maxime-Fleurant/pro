import { FunctionComponent } from 'react';
import { activeSideLink, sideLink, bigSideLink, bigActiveSideLink, linkBlockWrapp } from './style';
import CLink from '../CLink';
import TypegraphqlIcon from '../icons/Typegraphql';
import ElasticIcon from '../icons/Elastic';
import PassportIcon from '../icons/Passport';
import JWTIcon from '../icons/JWT';

const ComputeSide: FunctionComponent = () => {
  return (
    <>
      <div css={linkBlockWrapp}>
        <CLink href="/compute/node" nonActiveCss={bigSideLink} activeCss={bigActiveSideLink}>
          <a>
            Node&nbsp;
            <span className="icon-nodejs-icon" />
          </a>
        </CLink>

        <CLink href="/compute/express" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            Express&nbsp;
            <span className="icon-expressjs-icon" />
          </a>
        </CLink>

        <CLink href="/compute/nest" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            Nest&nbsp;
            <span className="icon-nestjs" />
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink href="/compute/graphql" nonActiveCss={bigSideLink} activeCss={bigActiveSideLink}>
          <a>
            Graphql&nbsp;
            <span className="icon-graphql" />
          </a>
        </CLink>

        <CLink href="/compute/apollo" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            Apollo&nbsp;
            <span className="icon-a" />
          </a>
        </CLink>

        <CLink href="/compute/typegraphql" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            TypeGraphql&nbsp;
            <TypegraphqlIcon />
          </a>
        </CLink>

        <CLink href="/compute/dataloader" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            Dataloader&nbsp;
            <span>🧩</span>
          </a>
        </CLink>

        <CLink href="/compute/complexity" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            Complexity&nbsp;
            <span>🔰</span>
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink href="/compute/di" nonActiveCss={bigSideLink} activeCss={bigActiveSideLink}>
          <a>
            DI&nbsp;
            <span>🧱</span>
          </a>
        </CLink>

        <CLink href="/compute/typedi" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            TypeDI&nbsp;
            <span>⚙️</span>
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink href="/compute/search" nonActiveCss={bigSideLink} activeCss={bigActiveSideLink}>
          <a>
            Search&nbsp;
            <span>🔎</span>
          </a>
        </CLink>

        <CLink href="/compute/elasticsearch" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            ElasticSearch&nbsp;
            <ElasticIcon />
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink href="/compute/auth" nonActiveCss={bigSideLink} activeCss={bigActiveSideLink}>
          <a>
            Auth&nbsp;
            <span>🔐</span>
          </a>
        </CLink>

        <CLink href="/compute/passport" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            PassportJS&nbsp;
            <PassportIcon />
          </a>
        </CLink>

        <CLink href="/compute/jwt" nonActiveCss={sideLink} activeCss={activeSideLink}>
          <a>
            JWT&nbsp;
            <JWTIcon />
          </a>
        </CLink>
      </div>

      <div css={linkBlockWrapp}>
        <CLink href="/compute/testing" nonActiveCss={bigSideLink} activeCss={bigActiveSideLink}>
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
