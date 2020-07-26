import { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from 'emotion';
import {
  gridCss,
  logoPart,
  logo,
  nav,
  navLink,
  activeLink,
  navBorder,
  navCell,
  menuButton,
  sideBar,
  openSideBar,
  closeSideBar,
  openLayer,
  navLinkWrapper,
  sideLogo,
  sideWrap,
  sideLinkPage,
  mainSideLink,
} from './style';
import { Cell } from '../Cell/cell';
import { textColor700, textColor900, helveticaThin, helveticaMedium } from '../../globalStyle';
import ComputeSide from './ComputeSide';
import DesignSide from './DesignSide';
import CLink from '../CLink';
import Link from 'next/link';

const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter();
  let sidePanel: JSX.Element;
  let menuPos = closeSideBar;
  let layer = css({ visibility: 'hidden', opacity: 0 });

  const [menuOpen, updateMenuState] = useState(false);

  const menuHandler = (): void => {
    updateMenuState(!menuOpen);
  };

  if (menuOpen) {
    menuPos = openSideBar;
    layer = css({ visibility: 'visible', opacity: 0.7 });
  }

  if (router.pathname.match(/^\/compute?/g)) {
    sidePanel = <ComputeSide />;
  }

  if (router.pathname.match(/^\/design?/g)) {
    sidePanel = <DesignSide />;
  }

  return (
    <>
      <span css={[sideBar, menuPos]}>
        <div css={[logo, sideLogo]}>
          <span>
            <span css={[logoPart, textColor700, helveticaThin]}>Design,</span>
            <br />
            <span css={[logoPart, textColor900, helveticaMedium]}>Compute.</span>
          </span>
        </div>
        <div css={mainSideLink}>
          <Link href="/design">
            <a>Design</a>
          </Link>

          <Link href="/compute">
            <a>Compute</a>
          </Link>

          <Link href="/qsd">
            <a>Project</a>
          </Link>

          <Link href="/qsd">
            <a>Life</a>
          </Link>
        </div>
        <div css={sideLinkPage}>
          <ComputeSide />
        </div>
      </span>
      <span css={css([openLayer, layer])} onClick={menuHandler} />
      <div css={gridCss}>
        <Cell
          deskPos={{ rowStart: 1, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
          extraCss={[navCell]}
        >
          <div css={nav}>
            <div css={logo}>
              <span>
                <span css={[logoPart, textColor700, helveticaThin]}>Design,</span>
                <br />
                <span css={[logoPart, textColor900, helveticaMedium]}>Compute.</span>
              </span>
            </div>
            <div>
              <span className="icon-menu-outlined" css={menuButton} onClick={menuHandler} />
              <div css={navLinkWrapper}>
                <CLink href="/design" main nonActiveCss={navLink} activeCss={activeLink}>
                  <a>Design</a>
                </CLink>

                <CLink href="/compute" main nonActiveCss={navLink} activeCss={activeLink}>
                  <a>Compute</a>
                </CLink>

                <span css={navLink}>Project</span>
                <span css={navLink}>Life</span>
              </div>
            </div>
          </div>
        </Cell>

        <Cell
          deskPos={{ rowStart: 1, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
          extraCss={[navBorder]}
        />

        <Cell deskPos={{ rowStart: 6, columnEnd: 5, columnStart: 1 }} extraCss={[sideWrap]} autoRow>
          {sidePanel}
        </Cell>

        {children}
      </div>
    </>
  );
};

export default Layout;
