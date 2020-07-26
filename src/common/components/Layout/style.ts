import { css } from '@emotion/core';
import {
  font40,
  titleLineHeight,
  helveticaMedium,
  pointSize40,
  textColor900,
  baseColor900,
  helveticaLight,
  textLineHeight,
  textColor600,
  fontRegular,
  font20,
  pointSize1,
  textColor800,
  helveticaRegular,
  helveticaThin,
  pointSize32,
  pointSize24,
  pointSize16,
  pointSize8,
  font48,
  font56,
  font64,
  backgroundColor400,
  backgroundColor300,
  backgroundColor100,
  backgroundColor600,
  backgroundColor900,
  pointSize48,
  baseColor600,
  baseColor700,
  pointSize120,
  font32,
} from '../../globalStyle';

export const gridCss = css([
  css`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 1.4rem;
    grid-auto-rows: ${(76 - 23 * 1.4) / 24}rem;

    margin: 0 2rem;
    padding: 1rem 0;

    @media (max-width: 1023px) {
      grid-auto-rows: auto;
    }
    @media (max-width: 767px) {
      grid-gap: 0.7rem;
    }
  `,
]);

export const nav = css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' });
export const logo = css(
  css`
    @media (max-width: 1023px) {
      padding: ${pointSize24} 0;
    }
  `,
  { display: 'flex', alignItems: 'center' }
);
export const logoPart = css([helveticaMedium, font40, titleLineHeight]);
export const navLink = css([
  textColor600,
  helveticaLight,
  fontRegular,
  css({ marginRight: pointSize40, cursor: 'pointer' }),
  css`
    &:hover {
      ${textColor800}
    }
  `,
]);
export const activeLink = css([
  navLink,
  textColor900,
  helveticaRegular,
  css`
    &:hover {
      ${textColor900}
    }
  `,
]);
export const navBorder = css({
  borderBottom: `${pointSize1} solid ${baseColor900}`,
  height: '100%',
});
export const navCell = css({ alignSelf: 'center' });

export const sideLink = css([
  helveticaThin,
  textLineHeight,
  textColor600,
  fontRegular,
  css({ cursor: 'pointer', display: 'block' }),
  css`
    span {
      opacity: 0;
      ${font20};
    }

    &:hover {
      ${textColor800}
      span {
        opacity: 1;
      }
    }
  `,
  css`
    @media (max-width: 767px) {
      ${font32}

      span {
        ${fontRegular};
      }
    }
  `,
]);

export const bigSideLink = css([
  helveticaMedium,
  textLineHeight,
  textColor900,
  fontRegular,
  css({ cursor: 'pointer', display: 'block', marginBottom: pointSize8 }),
  css`
    span {
      opacity: 0;
      ${font20};
    }

    &:hover {
      ${textColor800}
      span {
        opacity: 1;
      }
    }
  `,
  css`
    @media (max-width: 767px) {
      ${font32}

      span {
        ${fontRegular};
      }
    }
  `,
]);

export const activeSideLink = css([
  helveticaLight,
  textLineHeight,
  textColor900,
  fontRegular,
  css({ cursor: 'pointer', display: 'block' }),
  css`
    color: ${baseColor900}!important;

    span {
      ${font20};
      opacity: 1 !important;
    }
  `,
  css`
    @media (max-width: 767px) {
      ${font32}

      span {
        ${fontRegular};
      }
    }
  `,
]);

export const bigActiveSideLink = css([
  helveticaMedium,
  textLineHeight,
  textColor900,
  fontRegular,
  css({ cursor: 'pointer', display: 'block', marginBottom: pointSize8 }),
  css`
    color: ${baseColor900}!important;

    span {
      ${font20};
      opacity: 1 !important;
    }
  `,
  css`
    @media (max-width: 767px) {
      ${font32}
    }
  `,
]);

export const linkBlockWrapp = css({
  marginBottom: pointSize32,
});

export const sideWrap = css`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const rightSideLink = css({ textAlign: 'right' });

export const menuButton = css(
  font64,
  { cursor: 'pointer' },
  css`
    @media (min-width: 1023px) {
      display: none;
    }
  `
);

export const sideBar = css(
  {
    position: 'fixed',
    height: '100vh',
    transition: '0.2s ease-out',
    zIndex: 20,
    padding: `${pointSize24} ${pointSize48}`,
    borderRight: `${pointSize1} solid ${baseColor700}`,
    overflowY: 'auto',
    boxSizing: 'border-box',
  },
  backgroundColor100
);

export const closeSideBar = css({ transform: 'translateX(-105%)' });

export const openSideBar = css({ transform: 'translateX(0%)' });

export const openLayer = css(
  {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    opacity: 0.7,
    visibility: 'hidden',
    cursor: 'pointer',
    transition: 'visibility 0.2s, opacity 0.2s ',
  },
  backgroundColor600
);

export const navLinkWrapper = css`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const sideLogo = css({ borderBottom: `${pointSize1} solid ${baseColor900}` });

export const sideLinkPage = css({ marginTop: pointSize120 });

export const mainSideLink = css(
  { marginTop: pointSize32 },
  css`
    a {
      display: block;
      ${font32};
      ${helveticaRegular};
      margin-bottom: ${pointSize16};
    }
  `
);
