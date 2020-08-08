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
  pointSize80,
} from '../../globalStyle';
import { ITheme } from './Theme';

export const gridCss = css([
  css`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 1.4rem;

    padding-bottom: 10rem;

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
  { display: 'flex', alignItems: 'center', cursor: 'pointer' }
);

export const logoPart = css([helveticaMedium, font40, titleLineHeight]);

export const navLink = (theme: ITheme): SerializedStyles =>
  css([
    theme.text.textColor700,
    helveticaLight,
    fontRegular,

    css({
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
    helveticaLight,
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
    css({ display: 'block' }),
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
  marginBottom: pointSize24,
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
      borderRight: `1px solid ${theme.base.baseColor800}`,
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

export const sideLinkPage = css({ marginTop: pointSize48 });

export const mainSideLink = (theme: ITheme): SerializedStyles =>
  css(
    theme.text.textColor800,
    { marginTop: pointSize48 },
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
      borderTop: `1px solid ${theme.base.baseColor800}`,
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
      fontSize: `0.55rem!important`,
      padding: `0!important`,
      margin: '0!important',
    },
    css`
      @media (max-width: 1023px) {
        display: inline-block;
        font-size: 1.6vw !important;
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

export const circleAnimation3 = keyframes`
from, to {
  transform: rotateX(0deg);
}

50% {
  transform: rotateX(360deg);

}
`;

export const circleAnimation4 = keyframes`
  from, to {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(360deg);

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

export const circAnime1 = (theme: ITheme): SerializedStyles =>
  css({
    animation: `${circleAnimation3} 8s linear infinite`,
    stroke: theme.base.baseColor800,
  });

export const circAnime2 = (theme: ITheme): SerializedStyles =>
  css({
    animation: `${circleAnimation3} 8s linear infinite`,
    stroke: theme.base.baseColor800,
  });

export const circAnime3 = (theme: ITheme): SerializedStyles =>
  css({
    animation: `${circleAnimation3} 5s linear infinite`,
    stroke: theme.base.baseColor600,
  });

export const circAnime4 = (theme: ITheme): SerializedStyles =>
  css({
    animation: `${circleAnimation4} 3s linear infinite`,
    stroke: theme.base.baseColor500,
  });

export const circleSvg = css({
  transformOrigin: '50% 50%',
  transformStyle: 'preserve-3d',
});

export const gAnime = css({
  transformOrigin: 'center',
  transformStyle: 'preserve-3d',
});

export const gAnime1 = css({
  transform: 'rotateZ(45deg)',
});

export const gAnime2 = css({
  transform: 'rotateZ(-45deg)',
});

export const animeWrapp = css({ width: '50%' });

export const logoAnimeHeader = css({ marginRight: pointSize16 });

export const svgWrap = css({
  height: pointSize80,
  display: 'block',
});

export const svgWrapFull = css({
  width: '100%',
  display: 'block',
});

export const sidePanelWrap = (theme: ITheme): SerializedStyles =>
  css({
    textAlign: 'right',
    paddingRight: pointSize24,
    borderRight: `1px solid ${theme.base.baseColor600}`,
  });

export const themeSideWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: pointSize48,
    },
    theme.text.textColor800,
    helveticaRegular,
    font32
  );

export const leftSide = css({
  position: 'fixed',
  width: '8.2rem',
  marginLeft: '2rem',
  marginTop: '13.9rem',
  top: 0,
  height: '60vh',
  textAlign: 'right',
});

export const anchorPos = css({
  position: 'absolute',
  top: '-15rem',
});

export const githubLinkCaption = css({
  fontStyle: 'oblique',
});

export const quote = css({
  fontStyle: 'oblique',
  width: '100%',

  display: 'block',
});

export const colorAnime1 = (theme: ITheme): SerializedStyles =>
  css(
    css`
      background: linear-gradient(
        0deg,
        #242724,
        #6204ca,
        #f203c1,
        #e68a44,
        #a9a9aa
      );
      background-size: 200% 200%;

      -webkit-animation: AnimationName 10s ease-in-out infinite;
      -moz-animation: AnimationName 10s ease-in-out infinite;
      animation: AnimationName 10s ease-in-out infinite;

      @-webkit-keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
      @-moz-keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
      @keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
    `,
    { border: `1px solid ${theme.base.baseColor600}` }
  );

export const colorAnime2 = (theme: ITheme): SerializedStyles =>
  css(
    css`
      background: linear-gradient(
        0deg,
        #2b2f35,
        #5318d4,
        #03c3e1,
        #00da01,
        #a9c502,
        #a9afb2
      );
      background-size: 200% 200%;

      -webkit-animation: AnimationName 10s ease-in-out infinite;
      -moz-animation: AnimationName 10s ease-in-out infinite;
      animation: AnimationName 10s ease-in-out infinite;

      @-webkit-keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
      @-moz-keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
      @keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
    `,
    { border: `1px solid ${theme.base.baseColor600}`, animationDelay: '-3s' }
  );

export const colorAnime3 = (theme: ITheme): SerializedStyles =>
  css(
    css`
      background: linear-gradient(
        0deg,
        #2c312e,
        #00473c,
        #b50b31,
        #00dc00,
        #adb2b0
      );
      background-size: 200% 200%;

      -webkit-animation: AnimationName 10s ease-in-out infinite;
      -moz-animation: AnimationName 10s ease-in-out infinite;
      animation: AnimationName 10s ease-in-out infinite;

      @-webkit-keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
      @-moz-keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
      @keyframes AnimationName {
        0% {
          background-position: 51% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 51% 0%;
        }
      }
    `,
    { border: `1px solid ${theme.base.baseColor600}`, animationDelay: '-9s' }
  );

export const videoWrap = css`
  width: 100%;
  height: 100%;

  div:first-child {
    width: 100%;
    height: 100%;
  }
`;
