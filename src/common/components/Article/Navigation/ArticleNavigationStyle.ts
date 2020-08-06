import { css, SerializedStyles } from '@emotion/core';
import { ITheme } from '../../Layout/Theme';
import { pointSize24 } from '../../../globalStyle';

export const rightSideLink = css({ textAlign: 'right' });

export const sideBorder = (theme: ITheme): SerializedStyles =>
  css({
    paddingLeft: pointSize24,
    borderLeft: `1px solid ${theme.base.baseColor600}`,
  });
