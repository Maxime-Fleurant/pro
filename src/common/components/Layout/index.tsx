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
  navCell,
  menuButton,
  sideWrap,
  mobileNavWrap,
  mobileNav,
  backButton,
  centerLogo,
  navWrap,
  flexNavWrap,
  logoAnimeHeader,
  sidePanelWrap,
  menuButtonText,
  themeButton,
  themeButtonMobile,
} from './style';
import { Cell } from '../Cell/cell';
import { helveticaThin, helveticaMedium } from '../../globalStyle';
import ComputeSide from './ComputeSide';
import DesignSide from './DesignSide';
import { ThemeContext, ITheme } from './Theme';
import LogoAnime from './logoAnime';
import LifeSide from './LifeSide';
import GameSide from './GameSide';
import NovelSide from './novelsSide';
import Menu from './Menu';

const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter();
  let sidePanel: JSX.Element;

  const theme = useTheme<ITheme>();

  const [menuOpen, updateMenuState] = useState(false);
  const { toggle } = useContext(ThemeContext);

  const menuHandler = (): void => {
    window.scrollTo(0, 0);
    updateMenuState(!menuOpen);
  };

  if (router.pathname.match(/^\/compute?/g)) {
    sidePanel = <ComputeSide />;
  }

  if (router.pathname.match(/^\/design?/g)) {
    sidePanel = <DesignSide />;
  }

  if (router.pathname.match(/^\/life\/cinema?/g)) {
    sidePanel = <LifeSide />;
  }

  if (router.pathname.match(/^\/life\/novels?/g)) {
    sidePanel = <NovelSide />;
  }

  if (router.pathname.match(/^\/life\/games?/g)) {
    sidePanel = <GameSide />;
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
      <Menu open={menuOpen} returnHandler={menuHandler} />
      <span
        css={[
          mobileNavWrap(theme),
          menuOpen ? css({ display: 'none' }) : css(),
        ]}
      >
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
            className="icon-half"
            css={themeButtonMobile}
            onClick={toggle}
          />

          <span
            className="icon-menu-outlined"
            css={menuButton}
            onClick={menuHandler}
          />
        </div>
      </span>

      <div
        css={[
          navWrap(theme),
          navCell,
          menuOpen ? css({ display: 'none' }) : css(),
        ]}
      >
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
            <span css={menuButtonText} onClick={menuHandler}>
              Menu
            </span>
            <span className="icon-half" css={themeButton} onClick={toggle} />
          </div>
        </div>
      </div>

      <div css={[gridCss, menuOpen ? css({ display: 'none' }) : css()]}>
        <Cell
          deskPos={{ rowStart: 11, rowEnd: 30, columnEnd: 4, columnStart: 1 }}
          extraCss={[sideWrap]}
        >
          <div css={sidePanelWrap}> {sidePanel}</div>
        </Cell>

        {children}
      </div>
    </>
  );
};

export default Layout;
