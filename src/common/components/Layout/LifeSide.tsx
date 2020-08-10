import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { activeSideLink, sideLink, linkBlockWrapp, bigSideLink } from './style';

import CLink from '../CLink';
import { ITheme } from './Theme';

const LifeSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Cinema</a>
        </div>

        <CLink
          href="/life/cinema/antonioni"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Antonioni</a>
        </CLink>

        <CLink
          href="/life/cinema/araki"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Araki</a>
        </CLink>

        <CLink
          href="/life/cinema/bergman"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Bergman</a>
        </CLink>

        <CLink
          href="/life/cinema/bresson"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Bresson</a>
        </CLink>

        <CLink
          href="/life/cinema/cassavetes"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Cassavetes</a>
        </CLink>

        <CLink
          href="/life/cinema/dreyer"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Dreyer</a>
        </CLink>

        <CLink
          href="/life/cinema/eustache"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Eustache</a>
        </CLink>

        <CLink
          href="/life/cinema/fassbinder"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Fassbinder</a>
        </CLink>

        <CLink
          href="/life/cinema/fellini"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Fellini</a>
        </CLink>

        <CLink
          href="/life/cinema/ferrara"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Ferrara</a>
        </CLink>

        <CLink
          href="/life/cinema/godard"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Godard</a>
        </CLink>

        <CLink
          href="/life/cinema/hsiao-hsien"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Hsiao-Hsien</a>
        </CLink>

        <CLink
          href="/life/cinema/jarmusch"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Jarmusch</a>
        </CLink>

        <CLink
          href="/life/cinema/kitano"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Kitano</a>
        </CLink>

        <CLink
          href="/life/cinema/kubrick"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Kubrick</a>
        </CLink>

        <CLink
          href="/life/cinema/lynch"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Lynch</a>
        </CLink>

        <CLink
          href="/life/cinema/malick"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Malick</a>
        </CLink>

        <CLink
          href="/life/cinema/resnais"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Resnais</a>
        </CLink>

        <CLink
          href="/life/cinema/rohmer"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Rohmer</a>
        </CLink>

        <CLink
          href="/life/cinema/tarkovsky"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Tarkovsky</a>
        </CLink>

        <CLink
          href="/life/cinema/wai"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Kar-Wai</a>
        </CLink>

        <CLink
          href="/life/cinema/wenders"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Wenders</a>
        </CLink>
      </div>
    </>
  );
};

export default LifeSide;
