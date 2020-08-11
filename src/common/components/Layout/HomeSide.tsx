import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { activeSideLink, sideLink, linkBlockWrapp, bigSideLink } from './style';

import CLink from '../CLink';
import { ITheme } from './Theme';

const HomeSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      {/* <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>M. Fleurant</a>
        </div>
      </div> */}
    </>
  );
};

export default HomeSide;
