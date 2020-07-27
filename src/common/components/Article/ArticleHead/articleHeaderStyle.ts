import { css } from '@emotion/core';
import {
  helveticaMedium,
  textLineHeight,
  font48,
  textColor900,
  textColor700,
  helveticaThin,
  fontRegular,
  pointSize8,
  baseColor900,
  pointSize1,
  helveticaLight,
  font20,
  pointSize4,
  helveticaRegular,
  font32,
  pointSize56,
} from '../../../globalStyle';

export const title = css(
  { display: 'flex', alignItems: 'center' },
  helveticaMedium,
  textLineHeight,
  font48,
  textColor900
);

export const titleDesc = css(
  { textAlign: 'justify' },
  textColor700,
  helveticaThin,
  textLineHeight,
  fontRegular,
  css`
    @media (max-width: 1023px) {
      margin-bottom: ${pointSize56};
    }
  `
);

export const titleLink = css(
  fontRegular,
  { marginBottom: pointSize8 },
  css`
    a {
      margin-right: ${[pointSize8]};
    }
  `
);

export const subTitleLink = css(
  fontRegular,
  { marginBottom: pointSize8 },
  css`
    a {
      margin-left: ${[pointSize8]};
    }
  `
);

export const titlewrap = css({
  display: 'flex',
  height: '100%',
  flexFlow: 'column',
  borderBottom: `${pointSize1} solid ${baseColor900}`,
});

export const upTitleWrap = css({ flexGrow: 1 });

export const mainText = css(
  { textAlign: 'justify', wordBreak: 'break-word', hyphens: 'auto' },
  textColor900,
  helveticaLight,
  textLineHeight,
  fontRegular
);

export const linkWrap = css({ display: 'flex', justifyContent: 'space-between' });

export const sideInfo = css(textColor900, helveticaThin, font20);

export const video = css({ width: '100%', height: '100%' });

export const insideLink = css(
  { cursor: 'pointer', alignItems: 'center' },
  helveticaRegular,
  css`
    span {
      ${font20}
    }
  `
);
export const insideLinkIcon = css(fontRegular, font20);

export const subTitleWrap = css({ alignItems: 'baseline' });

export const subTitle = css(font32, helveticaRegular, textColor900);

export const subTitleCell = css({ borderBottom: `${pointSize1} solid ${baseColor900}` });
