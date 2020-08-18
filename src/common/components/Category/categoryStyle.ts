import { css, SerializedStyles } from '@emotion/core';
import {
  font104,
  helveticaBold,
  titleLineHeight,
  font20,
  textLineHeight,
  fontRegular,
  helveticaLight,
  helveticaMedium,
  pointSize24,
  pointSize64,
} from '../../globalStyle';
import { ITheme } from '../Layout/Theme';

export const catTitle = (theme: ITheme): SerializedStyles =>
  css(font104, helveticaBold, theme.text.textColor900, {
    height: '100%',
    borderBottom: `1px solid ${theme.base.baseColor800}`,
  });

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
    `
  );

export const detailButtonText = css(
  { flexGrow: 1, hyphens: 'auto' },
  font20,
  textLineHeight,
  helveticaLight,
  css`
    @media (max-width: 767px) {
      font-size: 4vw;
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
      font-size: 6vw;
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
