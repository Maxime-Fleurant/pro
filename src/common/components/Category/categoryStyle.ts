import { css } from '@emotion/core';
import {
  font104,
  helveticaBold,
  font48,
  titleLineHeight,
  pointSize1,
  baseColor600,
  pointSize16,
  font20,
  textLineHeight,
  fontRegular,
  helveticaLight,
  textColor900,
  helveticaMedium,
  textColor200,
  backgroundColor900,
  font32,
  pointSize32,
  pointSize24,
  pointSize64,
} from '../../globalStyle';

export const catTitle = css(font104, helveticaBold);

export const bigButton = css(
  font48,
  titleLineHeight,
  helveticaBold,
  {
    display: 'flex',
    border: `${pointSize1} solid ${baseColor600}`,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  css`
    @media (max-width: 1023px) {
      box-sizing: border-box;
      ${font104}
    }

    &:hover {
      ${textColor200};
      ${backgroundColor900}
    }
  `
);

export const bigButtonContent = css(
  font48,
  titleLineHeight,
  helveticaBold
  // css`
  //   @media (max-width: 1023px) {
  //     display: none;
  //   }
  // `
);

export const detailButtonCell = css({});

export const detailButton = css(
  {
    display: 'flex',
    cursor: 'pointer',
    height: '100%',
    flexFlow: 'column',
    border: `${pointSize1} solid ${baseColor600}`,
    padding: pointSize24,
    boxSizing: 'border-box',
  },
  textColor900,
  css`
    @media (max-width: 767px) {
      padding: ${pointSize64};
    }

    &:hover {
      ${textColor200};
      ${backgroundColor900}
    }
  `
);

export const detailButtonText = css(
  { flexGrow: 1, hyphens: 'auto' },
  font20,
  textLineHeight,
  helveticaLight,
  css`
    @media (max-width: 767px) {
      font-size: 6vw;
    }
  `
);

export const detailButtonLogo = css(
  { textAlign: 'right' },
  fontRegular,
  titleLineHeight,
  helveticaMedium,
  css`
    @media (max-width: 767px) {
      font-size: 8vw;
    }
  `
);

export const mobileIcon = css(
  { display: 'none', fontSize: '10vw' },
  css`
    @media (max-width: 1023px) {
      display: block;
    }
  `
);
