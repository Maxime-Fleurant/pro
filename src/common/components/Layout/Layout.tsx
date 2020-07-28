import { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ThemeProvider } from 'emotion-theming';
import { css } from 'emotion';
import {
  gridCss,
  logoPart,
  logo,
  nav,
  navLink,
  activeLink,
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
  mobileNavWrap,
  mobileNav,
  backButton,
  centerLogo,
  navWrap,
} from './style';
import { Cell } from '../Cell/cell';
import {
  textColor700,
  textColor900,
  helveticaThin,
  helveticaMedium,
  baseColor1000,
  baseColor900,
  baseColor800,
  baseColor700,
  baseColor600,
  baseColor400,
  baseColor300,
  baseColor500,
  baseColor200,
  baseColor100,
} from '../../globalStyle';
import ComputeSide from './ComputeSide';
import DesignSide from './DesignSide';
import CLink from '../CLink';

const base = {
  baseColor1000: '#16191D',
  baseColor900: '#2D3239',
  baseColor800: '#454B54',
  baseColor700: '#5E656E',
  baseColor600: '#787E87',
  baseColor500: '#9198A1',
  baseColor400: '#ABB1BA',
  baseColor300: '#C6CBD2',
  baseColor200: '#E2E5E9',
  baseColor100: '#F0F2F4',
};

let theme = {
  text: {
    textColor1000: css({ color: baseColor1000 }),
    textColor900: css({ color: baseColor900 }),
    textColor800: css({ color: baseColor800 }),
    textColor700: css({ color: baseColor700 }),
    textColor600: css({ color: baseColor600 }),
    textColor500: css({ color: baseColor500 }),
    textColor400: css({ color: baseColor400 }),
    textColor300: css({ color: baseColor300 }),
    textColor200: css({ color: baseColor200 }),
    textColor100: css({ color: baseColor100 }),
  },
  background: {
    backgroundColor1000: css({ backgroundColor: baseColor1000 }),
    backgroundColor900: css({ backgroundColor: baseColor900 }),
    backgroundColor800: css({ backgroundColor: baseColor800 }),
    backgroundColor700: css({ backgroundColor: baseColor700 }),
    backgroundColor600: css({ backgroundColor: baseColor600 }),
    backgroundColor500: css({ backgroundColor: baseColor500 }),
    backgroundColor400: css({ backgroundColor: baseColor400 }),
    backgroundColor300: css({ backgroundColor: baseColor300 }),
    backgroundColor200: css({ backgroundColor: baseColor200 }),
    backgroundColor100: css({ backgroundColor: baseColor100 }),
  },
  base: {
    baseColor1000: '#16191D',
    baseColor900: '#2D3239',
    baseColor800: '#454B54',
    baseColor700: '#5E656E',
    baseColor600: '#787E87',
    baseColor500: '#9198A1',
    baseColor400: '#ABB1BA',
    baseColor300: '#C6CBD2',
    baseColor200: '#E2E5E9',
    baseColor100: '#F0F2F4',
  },
  imgBorder: css({
    border: `0.04rem solid ${base.baseColor600}`,
  }),
};

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
      <ThemeProvider theme={theme}>
        <span css={mobileNavWrap}>
          <div css={mobileNav}>
            <span className="icon-outline-arrow-back-ios" css={backButton} onClick={router.back} />
            <div css={[logo, centerLogo]}>
              <span>
                <span css={[logoPart, textColor700, helveticaThin]}>Design</span>
                <br />
                <span css={[logoPart, textColor900, helveticaMedium]}>Compute</span>
              </span>
            </div>
            <span className="icon-menu-outlined" css={menuButton} onClick={menuHandler} />
          </div>
        </span>
        <span css={[sideBar, menuPos]} onClick={menuHandler}>
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
        <div css={[navWrap, navCell]}>
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
                <button>Theme</button>
              </div>
            </div>
          </div>
        </div>

        <div css={gridCss}>
          <Cell
            deskPos={{ rowStart: 6, columnEnd: 5, columnStart: 1 }}
            extraCss={[sideWrap]}
            autoRow
          >
            {sidePanel}
          </Cell>

          {children}
        </div>
      </ThemeProvider>
      ;
    </>
  );
};

export default Layout;
