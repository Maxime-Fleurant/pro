import { css, SerializedStyles } from '@emotion/core';
import { ITheme } from '../../Layout/Theme';
import {
  fontRegular,
  helveticaRegular,
  pointSize4,
} from '../../../globalStyle';

export const codeButton = (theme: ITheme): SerializedStyles =>
  css(
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${theme.base.baseColor500}`,
      height: '100%',
      cursor: 'pointer',
      borderRadius: pointSize4,
    },
    fontRegular,
    helveticaRegular,
    theme.text.textColor900
  );
