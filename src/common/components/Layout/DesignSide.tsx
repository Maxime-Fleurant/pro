import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { activeSideLink, sideLink, linkBlockWrapp, bigSideLink } from './style';

import CLink from '../CLink';
import { ITheme } from './Theme';

const DesignSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Design</a>
        </div>

        <CLink
          href="/design/color"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Color</a>
        </CLink>

        <CLink
          href="/design/typography"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Typography</a>
        </CLink>

        <CLink
          href="/design/grid"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Grid</a>
        </CLink>

        <CLink
          href="/design/motion"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Motion</a>
        </CLink>
      </div>
    </>
  );
};

export default DesignSide;
