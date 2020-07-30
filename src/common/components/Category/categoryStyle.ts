import { css, SerializedStyles } from '@emotion/core';
import {
  font104,
  helveticaBold,
  titleLineHeight,
  pointSize1,
  font20,
  textLineHeight,
  fontRegular,
  helveticaLight,
  helveticaMedium,
  textColor200,
  pointSize24,
  pointSize64,
} from '../../globalStyle';
import { ITheme } from '../Layout/Theme';

export const catTitle = (theme: ITheme): SerializedStyles =>
  css(font104, helveticaBold, theme.text.textColor900);

export const detailButtonCell = css({});

export const detailButton = (theme: ITheme): SerializedStyles =>
  css(
    {
      display: 'flex',
      cursor: 'pointer',
      height: '100%',
      flexFlow: 'column',
      border: `1px solid ${theme.base.baseColor600}`,
      padding: pointSize24,
      boxSizing: 'border-box',
    },
    theme.text.textColor800,
    css`
      @media (max-width: 767px) {
        padding: ${pointSize64};
      }

      &:hover {
        ${theme.text.textColor200};
        ${theme.background.backgroundColor900}
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
