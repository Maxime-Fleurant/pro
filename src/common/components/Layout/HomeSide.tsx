import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';

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
