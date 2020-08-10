import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { activeSideLink, sideLink, linkBlockWrapp, bigSideLink } from './style';

import CLink from '../CLink';
import { ITheme } from './Theme';

const NovelSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Novels</a>
        </div>

        <CLink
          href="/life/novels/balzac"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Balzac</a>
        </CLink>

        <CLink
          href="/life/novels/coupland"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Coupland</a>
        </CLink>

        <CLink
          href="/life/novels/delillo"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Delillo</a>
        </CLink>

        <CLink
          href="/life/novels/dostoevsky"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Dostoevsky</a>
        </CLink>

        <CLink
          href="/life/novels/ellis"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Easton Ellis</a>
        </CLink>

        <CLink
          href="/life/novels/faulkner"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Faulkner</a>
        </CLink>

        <CLink
          href="/life/novels/fitzgerald"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Fitzgerald</a>
        </CLink>

        <CLink
          href="/life/novels/franzen"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Franzen</a>
        </CLink>

        <CLink
          href="/life/novels/gibson"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Gibson</a>
        </CLink>

        <CLink
          href="/life/novels/houellebecq"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Houellebecq</a>
        </CLink>

        <CLink
          href="/life/novels/kdick"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>K Dick</a>
        </CLink>

        <CLink
          href="/life/novels/king"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>King</a>
        </CLink>

        <CLink
          href="/life/novels/mcinerney"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>McInerney</a>
        </CLink>

        <CLink
          href="/life/novels/murakami"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Murakami</a>
        </CLink>

        <CLink
          href="/life/novels/nabokov"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Nabokov</a>
        </CLink>

        <CLink
          href="/life/novels/orwell"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Orwell</a>
        </CLink>

        <CLink
          href="/life/novels/simmons"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Simmons</a>
        </CLink>
      </div>
    </>
  );
};

export default NovelSide;
