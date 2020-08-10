import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { activeSideLink, sideLink, linkBlockWrapp, bigSideLink } from './style';

import CLink from '../CLink';
import { ITheme } from './Theme';

const GameSide: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={linkBlockWrapp}>
        <div css={bigSideLink(theme)}>
          <a>Games</a>
        </div>

        <CLink
          href="/life/games/cuphead"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Cuphead</a>
        </CLink>

        <CLink
          href="/life/games/darksouls"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Dark Souls</a>
        </CLink>

        <CLink
          href="/life/games/devotion"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Devotion</a>
        </CLink>

        <CLink
          href="/life/games/divinity2"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Divinity: Original Sin II</a>
        </CLink>
        <CLink
          href="/life/games/ethan"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>The Vanishing of Ethan Carter</a>
        </CLink>
        <CLink
          href="/life/games/gonehome"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Gone Home</a>
        </CLink>
        <CLink
          href="/life/games/inside"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Inside</a>
        </CLink>

        <CLink
          href="/life/games/nier"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Nier: Automata</a>
        </CLink>
        <CLink
          href="/life/games/obradin"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Return of the Obra Dinn</a>
        </CLink>
        <CLink
          href="/life/games/outerwilds"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Outer Wilds</a>
        </CLink>
        <CLink
          href="/life/games/outlast"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Outlast</a>
        </CLink>

        <CLink
          href="/life/games/pillars"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Pillars of Eternity</a>
        </CLink>

        <CLink
          href="/life/games/soma"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Soma</a>
        </CLink>

        <CLink
          href="/life/games/stanley"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>The Stanley Parable</a>
        </CLink>

        <CLink
          href="/life/games/undertale"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>Undertale</a>
        </CLink>

        <CLink
          href="/life/games/witness"
          nonActiveCss={sideLink(theme)}
          activeCss={activeSideLink(theme)}
        >
          <a>The Witness</a>
        </CLink>
      </div>
    </>
  );
};

export default GameSide;
