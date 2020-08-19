import { css, SerializedStyles, keyframes } from '@emotion/core';
import {
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
  pointSize104,
  pointSize56,
  font56,
  pointSize1,
  pointSize2,
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
      padding-top: 10rem;
      grid-gap: 0.7rem;
    }
  `,
]);

export const nav = (theme: ITheme): SerializedStyles =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4.2rem',
    margin: '0 2rem',
    borderBottom: `1px solid ${theme.base.baseColor600}`,
    zIndex: 18,
  });

export const logo = css(
  css`
    z-index: 1;
    @media (max-width: 1023px) {
      padding: 0.85rem 0;
    }
  `,
  { display: 'flex', alignItems: 'center', cursor: 'pointer' }
);

export const logoPart = css([helveticaMedium, font32, titleLineHeight]);

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
    helveticaLight,
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
        ${theme.text.textColor900}!important
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
      color: ${theme.base.baseColor900}!important;

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
  overflow: hidden;
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
      top: 0,
      width: '100%',
      borderBottom: `1px solid ${theme.base.baseColor600}`,
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
    { position: 'fixed', width: '100%', zIndex: 1, top: 0 },
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

export const flexNavWrap = css(
  {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  font32
);

export const flexA = css({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
});

export const menuButtonText = (theme: ITheme): SerializedStyles =>
  css(
    { marginRight: pointSize16, cursor: 'pointer' },
    theme.text.textColor900,
    helveticaThin,
    css`
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      @media (hover: hover) and (pointer: fine) {
        &:hover,
        &:focus,
        &:active {
          -webkit-transform: translateX(-${pointSize8});
          transform: translateX(-${pointSize8});
        }
      }
    `
  );

export const themeButton = (theme: ITheme): SerializedStyles =>
  css(
    theme.text.textColor900,
    helveticaMedium,
    font32,
    { cursor: 'pointer' },
    css`
      @-webkit-keyframes hvr-pop {
        50% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
      @keyframes hvr-pop {
        50% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover,
        &:focus,
        &:active {
          -webkit-animation-name: hvr-pop;
          animation-name: hvr-pop;
          -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
        }
      }
    `
  );

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

export const barWrap = (theme: ITheme): SerializedStyles =>
  css(
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
    `,
    theme.background.backgroundColor100
  );

export const browserButtonWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      borderBottom: `1px solid ${theme.base.baseColor400}`,
      display: 'flex',
      padding: `${pointSize8} ${pointSize16}`,
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
    stroke: theme.base.baseColor600,
  });

export const circAnime2 = (theme: ITheme): SerializedStyles =>
  css({
    animation: `${circleAnimation3} 8s linear infinite`,
    stroke: theme.base.baseColor600,
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

export const themeButtonMobile = (theme: ITheme): SerializedStyles =>
  css(theme.text.textColor900, helveticaMedium, font56, { cursor: 'pointer' });

export const logoAnimeHeader = css(
  { marginRight: pointSize16 },
  css`
    @media (max-width: 767px) {
      margin-right: ${pointSize24};
    }
  `
);

export const svgWrap = css({
  height: pointSize80,
  display: 'block',
});

export const gamesvgWrap = css(
  {
    height: pointSize104,
    display: 'block',
  },
  css`
    @media (max-width: 767px) {
      height: ${pointSize120};
    }
  `
);

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
      height: 100%;
      width: 100%;
      box-sizing: border-box;

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
      height: 100%;
      width: 100%;
      box-sizing: border-box;

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
      height: 100%;
      width: 100%;
      box-sizing: border-box;

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

export const coverImage = css({
  width: '100%',
});

export const coverImageWrap = css(
  { display: 'flex', alignItems: 'flex-end' },
  css`
    @media (max-width: 1023px) {
      align-items: flex-start;
    }
  `
);

export const bookImageWrap = css({ display: 'flex', alignItems: 'flex-start' });

export const gameMenuWrap = (theme: ITheme): SerializedStyles =>
  css({
    position: 'fixed',
    display: 'none',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    backgroundColor: theme.base.baseColor100,
    justifyContent: 'center',
    zIndex: 10,
  });

export const gameMenuLinkWrap = css({
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const gameCatMenu = (theme: ITheme): SerializedStyles =>
  css(
    theme.text.textColor800,
    {
      textAlign: 'center',
      marginTop: pointSize24,
      marginBottom: pointSize32,
    },
    helveticaLight,
    font32,
    css`
      div {
        padding: ${pointSize24} ${pointSize48};
        border: 1px solid ${theme.base.baseColor600};
        cursor: pointer;

        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          ${theme.background.backgroundColor800};
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transform-origin: 50%;
          transform-origin: 50%;
          -webkit-transition-property: transform;
          transition-property: transform;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
        }
      }

      div {
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            ${theme.text.textColor200};
            &:hover:before {
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
            }
          }
        }
      }

      div:not(:last-child) {
        margin-bottom: ${pointSize24};
      }

      @media (max-width: 767px) {
        font-size: ${pointSize48};

        div {
          padding: ${pointSize32} ${pointSize56};
        }
      }
    `
  );

export const aMenuLink = (theme: ITheme): SerializedStyles => css`
  padding: ${pointSize24} ${pointSize48};
  border: 1px solid ${theme.base.baseColor600};
  cursor: pointer;
  display: block;

  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${theme.background.backgroundColor800};
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${theme.text.textColor200};
      &:hover:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: ${pointSize24};
  }

  @media (max-width: 767px) {
    font-size: ${pointSize48};

    padding: ${pointSize32} ${pointSize56};
  }
`;

export const returnButton = (theme: ITheme): SerializedStyles =>
  css(
    theme.text.textColor800,
    {
      textAlign: 'center',
      flexGrow: 1,
    },
    helveticaLight,
    font32,
    css`
      padding: ${pointSize24} ${pointSize24};
      border: 1px solid ${theme.base.baseColor600};
      cursor: pointer;

      position: relative;
      -webkit-transition-property: color;
      transition-property: color;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;

      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        ${theme.background.backgroundColor800};
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }

      span:before {
        ${theme.text.textColor800};
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover:before {
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }

        &:hover span:before {
          ${theme.text.textColor200};
        }
      }

      @media (max-width: 767px) {
        font-size: ${pointSize48};
        padding: ${pointSize32} ${pointSize32};
      }
    `
  );

export const withinButton = css({ display: 'flex', justifyContent: 'center' });
export const withingButtonText = css({ marginRight: pointSize12 });

export const returnGame = (theme: ITheme): SerializedStyles =>
  css(
    {
      flexGrow: 1,
      padding: pointSize24,
      marginRight: pointSize24,
    },
    css`
      span:before {
        color: ${theme.text.textColor800};
      }

      position: relative;
      -webkit-transition-property: color;
      transition-property: color;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;

      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        ${theme.background.backgroundColor800};
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }

      span:before {
        ${theme.text.textColor800};
      }

      @media (hover: hover) and (pointer: fine) {
        &:hover:before {
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }

        &:hover span:before {
          ${theme.text.textColor200};
        }
      }

      @media (max-width: 767px) {
        font-size: ${pointSize48};
        margin-right: ${pointSize24};
        padding: ${pointSize32};
      }
    `
  );

export const menuGameLogo = css(
  font64,
  css`
    @media (max-width: 767px) {
      font-size: ${pointSize80};
    }
  `
);

export const backGame = css({
  marginTop: pointSize48,

  display: 'flex',
});

export const homeTitle = (theme: ITheme): SerializedStyles =>
  css(theme.text.textColor700, helveticaThin, titleLineHeight);

export const homeTitle2 = (theme: ITheme): SerializedStyles =>
  css(theme.text.textColor900, helveticaMedium, titleLineHeight);

export const logoRowWrap = css({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
});

export const logoRow = (theme: ITheme): SerializedStyles =>
  css(
    {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    font48,
    css`
      @-webkit-keyframes hvr-pop {
        50% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
      @keyframes hvr-pop {
        50% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }

      span {
        ${theme.text.textColor800};
      }

      a {
        display: flex;
      }

      @media (hover: hover) and (pointer: fine) {
        a:hover,
        a:focus,
        a:active {
          webkit-animation-name: hvr-pop;
          animation-name: hvr-pop;
          -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
        }
      }

      span:not(:first-child) {
        margin-top: 1rem;
      }

      @media (max-width: 1023px) {
        font-size: 8vw;

        span:not(:first-child) {
          margin-top: 8vw;
        }
      }
    `
  );

export const homeAnime = keyframes`
  0%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const homeA1 = css({
  animation: `${homeAnime} 2s ease-in-out`,
  animationFillMode: 'forwards',
});

export const homeA2 = css({
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '1s',
  animationFillMode: 'forwards',
});

export const homeA3 = css({
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '2s',
  animationFillMode: 'forwards',
});

export const logoA1 = css({
  opacity: 0,
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '2s',
  animationFillMode: 'forwards',
});

export const logoA2 = css({
  opacity: 0,
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '2.5s',
  animationFillMode: 'forwards',
});

export const logo3A = css({
  opacity: 0,
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '3s',
  animationFillMode: 'forwards',
});

export const logo4A = css({
  opacity: 0,
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '3s',
  animationFillMode: 'forwards',
});

export const logo5A = css({
  opacity: 0,
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '2.5s',
  animationFillMode: 'forwards',
});

export const logo6A = css({
  opacity: 0,
  animation: `${homeAnime} 2s ease-in-out`,
  animationDelay: '2s',
  animationFillMode: 'forwards',
});

export const logoANimeWrap = css({
  zIndex: 10,
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundImage: `linear-gradient(125deg, rgba(0,0,0,1), rgba(0,0,0,0))`,
});

export const animeGradient = keyframes`
0%{
  background-image: linear-gradient(125deg, rgba(0,0,0,1), rgba(0,0,0,1))
}

100% {
  background-image: linear-gradient(125deg, rgba(0,0,0,0), rgba(0,0,0,1))
}
`;

export const actionGradient = css({ animation: `${animeGradient} 2s linear` });

export const contactWrap = css({
  width: '100%',
  textAlign: 'center',
});

export const animeMobileH = css`
  margin: 0 !important;
`;

export const animeMainTextHeader = css({ animationDuration: '1.5s' });

export const screenImage = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const reactRevail = css`
  div {
    width: 100%;
    height: 100%;
  }
`;

export const homeButton = (theme: ITheme): SerializedStyles =>
  css(theme.text.textColor900);

export const menuIndex = css({ zIndex: 1 });

export const returnClick = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const gridDemo = css({
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'repeat(12, 1fr)',
  gridGap: pointSize16,
});

export const gridDemoCell = (theme: ITheme): SerializedStyles =>
  css(theme.background.backgroundColor200, {
    border: `1px solid ${theme.base.baseColor600}`,
  });

export const withinCell = css({ height: '100%', width: '100%' });

export const wrapperCell = css`
  .react-reveal {
    width: 100%;
    height: 100%;
  }
`;

export const wrapCell2 = css({ height: '100%', width: '100%' });

export const splashTitle = (theme: ITheme): SerializedStyles =>
  css(helveticaMedium, font64, theme.text.textColor800);

export const twrapf = (theme: ITheme): SerializedStyles =>
  css(theme.text.textColor900);

export const typoPostWrap = css({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

export const wrapTypoWrap = css({
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const delay = css({ animationDelay: '1.5s', animationFillMode: 'both' });

export const delay2 = css({ animationDelay: '2s', animationFillMode: 'both' });
