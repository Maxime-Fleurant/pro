import { FunctionComponent, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
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
  switchButton,
  flexNavWrap,
  logoSideWrap,
  logoAnimeHeader,
  sidePanelWrap,
  themeSideWrap,
} from './style';
import { Cell } from '../Cell/cell';
import { helveticaThin, helveticaMedium } from '../../globalStyle';
import ComputeSide from './ComputeSide';
import DesignSide from './DesignSide';
import CLink from '../CLink';
import { ThemeContext, ITheme } from './Theme';
import LogoAnime from './logoAnime';

const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter();
  let sidePanel: JSX.Element;
  let menuPos = closeSideBar;
  let layer = css({ visibility: 'hidden', opacity: 0 });
  const theme = useTheme<ITheme>();

  const [menuOpen, updateMenuState] = useState(false);
  const { toggle } = useContext(ThemeContext);

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
      <Global
        styles={css`
          body {
            ${theme.background.backgroundColor100}
            cursor: crosshair
          }

          .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
            background-color: #9198a1;
          }

          * {
            transition: background-color 0.25s ease;
          }
        `}
      />
      <span css={mobileNavWrap}>
        <div css={mobileNav}>
          <span
            className="icon-outline-arrow-back-ios"
            css={backButton}
            onClick={router.back}
          />
          <Link href="/">
            <div css={[logo, centerLogo]}>
              <div css={logoAnimeHeader}>
                <LogoAnime />
              </div>
            </div>
          </Link>

          <span
            className="icon-menu-outlined"
            css={menuButton}
            onClick={menuHandler}
          />
        </div>
      </span>
      <span css={[sideBar(theme), menuPos]} onClick={menuHandler}>
        <div css={[logo, sideLogo(theme)]}>
          <Link href="/">
            <span css={logoSideWrap}>
              <div css={logoAnimeHeader}>
                <LogoAnime />
              </div>
              <div>
                <span css={[logoPart, theme.text.textColor700, helveticaThin]}>
                  Design,
                </span>
                <br />
                <span
                  css={[logoPart, theme.text.textColor900, helveticaMedium]}
                >
                  Compute.
                </span>
              </div>
            </span>
          </Link>
        </div>
        <div css={themeSideWrap}>
          Theme{' '}
          <label css={switchButton(theme)}>
            {' '}
            <input onChange={toggle} type="checkbox" />
            <div />
          </label>
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
      <div css={[navWrap(theme), navCell]}>
        <div css={nav}>
          <Link href="/">
            <div css={logo}>
              <div css={logoAnimeHeader}>
                <LogoAnime />
              </div>
              <span>
                <span css={[logoPart, theme.text.textColor700, helveticaThin]}>
                  Design,
                </span>
                <br />
                <span
                  css={[logoPart, theme.text.textColor900, helveticaMedium]}
                >
                  Compute.
                </span>
              </span>
            </div>
          </Link>

          <div css={flexNavWrap}>
            <span
              className="icon-menu-outlined"
              css={menuButton}
              onClick={menuHandler}
            />
            <div css={navLinkWrapper}>
              <label css={switchButton(theme)}>
                qsd
                <input onChange={toggle} type="checkbox" />
                <div />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div css={gridCss}>
        <Cell
          deskPos={{ rowStart: 6, columnEnd: 4, columnStart: 1 }}
          extraCss={[sideWrap]}
          autoRow
        >
          <div css={sidePanelWrap}> {sidePanel}</div>
        </Cell>

        {children}
      </div>
    </>
  );
};

export default Layout;
