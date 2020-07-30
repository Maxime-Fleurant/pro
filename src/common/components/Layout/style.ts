import { css, SerializedStyles, keyframes } from '@emotion/core';
import {
  font40,
  titleLineHeight,
  helveticaMedium,
  pointSize40,
  baseColor900,
  helveticaLight,
  textLineHeight,
  fontRegular,
  font20,
  pointSize1,
  helveticaRegular,
  helveticaThin,
  pointSize32,
  pointSize24,
  pointSize16,
  pointSize8,
  font64,
  backgroundColor600,
  pointSize48,
  pointSize120,
  font32,
  font48,
  pointSize12,
  pointSize4,
} from '../../globalStyle';
import { ITheme } from './Theme';

export const gridCss = css([
  css`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 1.4rem;
    grid-auto-rows: ${(76 - 23 * 1.4) / 24}rem;

    margin: 0 2rem;

    @media (max-width: 1023px) {
      grid-auto-rows: auto;
    }
    @media (max-width: 767px) {
      padding-top: 1rem;
      grid-gap: 0.7rem;
    }
  `,
]);

export const nav = (theme: ITheme): SerializedStyles =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '5rem',
    margin: '0 2rem',
    borderBottom: `1px solid ${theme.base.baseColor800}`,
    zIndex: 18,
  });

export const logo = css(
  css`
    @media (max-width: 1023px) {
      padding: 0.85rem 0;
    }
  `,
  { display: 'flex', alignItems: 'center' }
);

export const logoPart = css([helveticaMedium, font40, titleLineHeight]);

export const navLink = (theme: ITheme): SerializedStyles =>
  css([
    theme.text.textColor700,
    helveticaRegular,
    fontRegular,

    css({
      marginRight: pointSize40,
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }),
    css`
      &:hover {
        ${theme.text.textColor800}
      }
    `,
  ]);

export const activeLink = (theme: ITheme): SerializedStyles =>
  css([
    navLink(theme),
    theme.text.textColor900,
    helveticaRegular,
    css`
      &:hover {
        ${theme.text.textColor900}
      }
    `,
  ]);

export const navBorder = css(
  {
    borderBottom: `1px solid ${baseColor900}`,
    height: '100%',
  },
  css`
    @media (max-width: 767px) {
      display: none;
    }
  `
);

export const navCell = css(
  { alignSelf: 'center' },
  css`
    @media (max-width: 767px) {
      display: none;
    }
  `
);

export const sideLink = (theme: ITheme): SerializedStyles =>
  css([
    helveticaThin,
    textLineHeight,
    theme.text.textColor600,
    fontRegular,
    css({ cursor: 'pointer', display: 'block' }),
    css`
      span {
        opacity: 0;
        ${font20};
      }

      &:hover {
        ${theme.text.textColor800}
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

export const bigSideLink = (theme: ITheme): SerializedStyles =>
  css([
    helveticaMedium,
    textLineHeight,
    theme.text.textColor800,
    fontRegular,
    css({ cursor: 'pointer', display: 'block', marginBottom: pointSize8 }),
    css`
      span {
        opacity: 0;
        ${font20};
      }

      &:hover {
        ${theme.text.textColor800}
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

export const activeSideLink = (theme: ITheme): SerializedStyles =>
  css([
    helveticaLight,
    textLineHeight,
    theme.text.textColor800,
    fontRegular,
    css({ cursor: 'pointer', display: 'block' }),
    css`
      color: ${theme.base.baseColor800}!important;

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

export const bigActiveSideLink = (theme: ITheme): SerializedStyles =>
  css([
    helveticaMedium,
    textLineHeight,
    theme.text.textColor800,
    fontRegular,
    css({ cursor: 'pointer', display: 'block', marginBottom: pointSize8 }),
    css`
      color: ${theme.base.baseColor800}!important;

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

export const menuButton = (theme: ITheme): SerializedStyles =>
  css(
    font64,

    { cursor: 'pointer' },
    css`
      &:before {
        color: ${theme.base.baseColor800};
      }
      @media (min-width: 1023px) {
        display: none;
      }
    `
  );

export const sideBar = (theme: ITheme): SerializedStyles =>
  css(
    {
      position: 'fixed',
      height: '100vh',
      transition: '0.2s ease-out',
      zIndex: 20,
      padding: `0 ${pointSize48}`,
      borderRight: `1px solid ${theme.base.baseColor700}`,
      overflowY: 'auto',
      boxSizing: 'border-box',
    },
    theme.background.backgroundColor100,
    css`
      @media (min-width: 1023px) {
        display: none;
      }
    `
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
    zIndex: 2,
    transition: 'visibility 0.2s, opacity 0.2s ',
  },
  backgroundColor600,
  css`
    @media (min-width: 1023px) {
      display: none;
    }
  `
);

export const navLinkWrapper = css(
  { display: 'flex', alignItems: 'center', height: '100%' },
  css`
    @media (max-width: 1023px) {
      display: none;
    }
  `
);

export const sideLogo = (theme: ITheme): SerializedStyles =>
  css({ borderBottom: `1px solid ${theme.base.baseColor800}` });

export const sideLinkPage = css({ marginTop: pointSize120 });

export const mainSideLink = (theme: ITheme): SerializedStyles =>
  css(
    theme.text.textColor800,
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

export const mobileNavWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      borderTop: `1px solid ${theme.base.baseColor700}`,
      zIndex: 1,
    },
    css`
      @media (min-width: 767px) {
        display: none;
      }
    `,
    theme.background.backgroundColor100
  );

export const mobileNav = css({
  margin: ` ${pointSize24} ${pointSize48}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const backButton = (theme: ITheme): SerializedStyles =>
  css(
    theme.text.textColor800,
    font48,
    { cursor: 'pointer' },
    css`
      &:before {
        color: ${theme.base.baseColor800};
      }
    `
  );

export const centerLogo = css({ textAlign: 'center' });

export const navWrap = (theme: ITheme): SerializedStyles =>
  css(
    { position: 'fixed', width: '100%', zIndex: 1 },
    theme.background.backgroundColor100
  );

export const switchButton = (theme: ITheme): SerializedStyles => {
  return css`
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.333rem;

    input {
      opacity: 0;
      height: 0;
      width: 0;
    }

    input:checked + div:before {
      transform: translateX(1.15rem);
    }

    div {
      display: flex;
      border-radius: 1rem;
      align-items: center;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      ${theme.background.backgroundColor500};

      &:before {
        position: absolute;
        content: '';
        height: 0.85rem;
        width: 0.85rem;
        margin-left: 0.25rem;
        ${theme.background.backgroundColor100};
        border-radius: 1rem;
        transition: 0.2s;
      }
    }
  `;
};

export const flexNavWrap = css({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
});

export const flexA = css({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
});

export const codeBox = (theme: ITheme): SerializedStyles =>
  css(
    {
      backgroundColor: `${theme.base.baseColor100}!important`,
      fontSize: `${pointSize12}!important`,
      padding: `0!important`,
      margin: '0!important',
    },
    css`
      @media (max-width: 1023px) {
        display: inline-block;
        font-size: 1.7vw !important;
        padding-right: ${pointSize24}!important;
      }
    `
  );

export const codeWrap = css({
  width: '100%',
  height: '100%',
});

export const browserWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      display: 'flex',
      flexFlow: 'column',
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
      border: `1px solid ${theme.base.baseColor400}`,
      borderRadius: pointSize4,
      zIndex: 0,
    },
    css`
      @media (max-width: 1023px) {
        width: 100%;
      }
    `
  );

export const barWrap = css(
  {
    overflow: 'hidden',
    zIndex: 0,
    paddingLeft: pointSize16,
    height: '100%',
  },
  css`
    @media (max-width: 1023px) {
      padding-top: 0;
    }
  `
);

export const browserButtonWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      padding: `${pointSize4} ${pointSize16}`,
      borderBottom: `1px solid ${theme.base.baseColor400}`,
    },
    theme.background.backgroundColor200
  );

export const roundButton = css({
  width: pointSize12,
  height: pointSize12,
  marginRight: pointSize8,
  display: 'inline-block',
  borderRadius: '50%',
});

export const closeButton = css({ backgroundColor: '#c14645' });
export const reduceButton = css({ backgroundColor: '#ffbd4c' });
export const enlargeButton = css({ backgroundColor: '#00ca56' });

export const cellWrap = css`
  height: 100%;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }
`;

export const logoSideWrap = css({ display: 'flex', alignItems: 'flex-end' });

export const logoPartSideWrap = css({ marginRight: pointSize40 });

export const circleAnimation1 = keyframes`
  from, to {
    transform: rotate3D(0, 0, 0, 360deg);
  }

  50% {
    transform: rotate3D(1, -1, 0, 360deg);

  }
`;

export const circleAnimation2 = keyframes`
  from, to {
    transform: rotate3D(0, 0, 0, 360deg);
  }

  50% {
    transform: rotate3D(1, 1, 0, 360deg);

  }
`;

export const circleAnimation3 = keyframes`
  from, to {
    transform: rotate3D(0, 0, 0, 360deg);
  }

  50% {
    transform: rotate3D(1, 0, 0, 360deg);

  }
`;

export const circleAnimation4 = keyframes`
  from, to {
    transform: rotate3D(0, 0, 0, 360deg);
  }

  50% {
    transform: rotate3D(1, 1, 1, 360deg);

  }
`;

export const circleAnimation5 = keyframes`
  from, to {
    transform: rotate3D(0, 0, 0, 360deg);
  }

  50% {
    transform: rotate3D(0, 1, 0, 360deg);

  }
`;

export const circAnime1 = css({
  animation: `${circleAnimation1} 8s linear infinite`,
});

export const circAnime2 = css({
  animation: `${circleAnimation2} 8s linear infinite`,
});

export const circAnime3 = css({
  animation: `${circleAnimation3} 5s linear infinite`,
});

export const circAnime5 = css({
  animation: `${circleAnimation5} 5s linear infinite`,
});

export const circAnime4 = css({
  animation: `${circleAnimation4} 3s linear infinite`,
});

export const circleSvg = css({
  transformOrigin: '50% 50%',
  transformStyle: 'preserve-3d',
});
