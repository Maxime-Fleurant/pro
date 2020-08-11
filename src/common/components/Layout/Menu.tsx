import { css } from '@emotion/core';
import { FunctionComponent, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'emotion-theming';
import {
  logo,
  logoAnimeHeader,
  logoPart,
  gameMenuLinkWrap,
  gameCatMenu,
  returnButton,
  gridCss,
  withinButton,
  withingButtonText,
  returnGame,
  menuGameLogo,
  backGame,
} from './style';

import { helveticaThin, helveticaMedium } from '../../globalStyle';
import { SimpleCell } from '../Cell/SimpleCell';

import TypescriptIcon from '../icons/Typescript';
import TypegraphqlIcon from '../icons/Typegraphql';
import PostgresIcon from '../icons/Postgres';
import MongoDbIcon from '../icons/Mongodb';
import NeoIcon from '../icons/neo';
import JestIcon from '../icons/Jest';
import PassportIcon from '../icons/Passport';
import JWTIcon from '../icons/JWT';
import GameLogoAnime from './gameLogoAnime';
import { ITheme } from './Theme';

// TYPE
type TMenu = FunctionComponent<{ open: boolean; returnHandler: () => void }>;

const Menu: TMenu = ({ open, returnHandler }) => {
  const theme = useTheme<ITheme>();
  const router = useRouter();

  const [currentPage, updatePage] = useState('menu');
  const [back, updateBack] = useState('');

  let catMenu: JSX.Element;

  const menuHandler = (page: string): void => {
    window.scrollTo(0, 0);
    updatePage(page);
  };

  const returnHandlerInside = (): void => {
    returnHandler();
  };

  useEffect(() => {
    if (router.pathname.match(/^\//g)) {
      updatePage('menu');
    }

    if (router.pathname.match(/^\/compute?/g)) {
      updatePage('compute');
    }

    if (router.pathname.match(/^\/design?/g)) {
      updatePage('design');
    }

    if (router.pathname.match(/^\/life\/cinema?/g)) {
      updatePage('cinema');
    }

    if (router.pathname.match(/^\/life\/novels?/g)) {
      updatePage('novels');
    }

    if (router.pathname.match(/^\/life\/games?/g)) {
      updatePage('games');
    }
  }, [router]);

  useEffect(() => {
    if (currentPage === 'menu') {
      updateBack('');
    }
    if (currentPage === 'design') {
      updateBack('menu');
    }
    if (currentPage === 'compute') {
      updateBack('menu');
    }
    if (currentPage === 'node') {
      updateBack('compute');
    }
    if (currentPage === 'env') {
      updateBack('compute');
    }
    if (currentPage === 'graphql') {
      updateBack('compute');
    }
    if (currentPage === 'front') {
      updateBack('compute');
    }
    if (currentPage === 'database') {
      updateBack('compute');
    }
    if (currentPage === 'designpattern') {
      updateBack('compute');
    }
    if (currentPage === 'di') {
      updateBack('compute');
    }
    if (currentPage === 'testing') {
      updateBack('compute');
    }
    if (currentPage === 'ops') {
      updateBack('compute');
    }
    if (currentPage === 'auth') {
      updateBack('compute');
    }

    if (currentPage === 'project') {
      updateBack('menu');
    }
    if (currentPage === 'life') {
      updateBack('menu');
    }
    if (currentPage === 'cinema') {
      updateBack('life');
    }
    if (currentPage === 'novels') {
      updateBack('life');
    }
    if (currentPage === 'games') {
      updateBack('life');
    }
  }, [currentPage]);

  if (currentPage === 'menu') {
    catMenu = (
      <>
        <div onClick={(): void => menuHandler('design')}>Design</div>
        <div onClick={(): void => menuHandler('compute')}>Compute</div>
        <div onClick={(): void => menuHandler('project')}>Project</div>
        <div onClick={(): void => menuHandler('life')}>Life</div>
        <div onClick={(): void => menuHandler('contact')}>Contact</div>
      </>
    );
  }

  if (currentPage === 'design') {
    catMenu = (
      <>
        <Link href="/design/color">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/design/color">
              <span css={withingButtonText}>Colors</span> <span>🎨</span>
            </a>
          </div>
        </Link>
        <Link href="/design/typography">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/design/typography">
              <span css={withingButtonText}>Typography</span> <span>🖋</span>
            </a>
          </div>
        </Link>
        <Link href="/design/grid">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/design/grid">
              <span css={withingButtonText}>Grid</span> <span>📐</span>
            </a>
          </div>
        </Link>
        <Link href="/design/motion">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/design/motion">
              <span css={withingButtonText}>Motion</span> <span>💠</span>
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'compute') {
    catMenu = (
      <>
        <div onClick={(): void => menuHandler('node')}>Node</div>
        <div onClick={(): void => menuHandler('env')}>Env</div>
        <div onClick={(): void => menuHandler('graphql')}>GraphQL</div>
        <div onClick={(): void => menuHandler('front')}>Front</div>
        <div onClick={(): void => menuHandler('database')}>Database</div>
        <div onClick={(): void => menuHandler('designpattern')}>
          Design Pattern
        </div>
        <div onClick={(): void => menuHandler('di')}>DI</div>
        <div onClick={(): void => menuHandler('testing')}>Testing</div>
        <div onClick={(): void => menuHandler('ops')}>Ops</div>
        <div onClick={(): void => menuHandler('auth')}>Auth</div>
      </>
    );
  }

  if (currentPage === 'node') {
    catMenu = (
      <>
        <Link href="/compute/express">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/express">
              <span css={withingButtonText}>Express</span>
              <span className="icon-expressjs-icon" />
            </a>
          </div>
        </Link>
        <Link href="/compute/nest">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/nest">
              <span css={withingButtonText}>Nest</span>{' '}
              <span className="icon-nestjs" />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'env') {
    catMenu = (
      <>
        <Link href="/compute/typescript">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/typescript">
              <span css={withingButtonText}>Typescript</span> <TypescriptIcon />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'graphql') {
    catMenu = (
      <>
        <Link href="/compute/typegraphql">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/typegraphql">
              <span css={withingButtonText}>TypeGraphQL</span>
              <TypegraphqlIcon />
            </a>
          </div>
        </Link>

        <Link href="/compute/dataloader">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/dataloader">
              <span css={withingButtonText}>DataLoader</span> <span>🧩</span>
            </a>
          </div>
        </Link>

        <Link href="/compute/apollo">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/apollo">
              <span css={withingButtonText}>Apollo</span>
              <span className="icon-a" />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'front') {
    catMenu = (
      <>
        <Link href="/compute/apolloclient">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/apolloclient">
              <span css={withingButtonText}>Apollo Client</span>
              <span className="icon-a" />
            </a>
          </div>
        </Link>

        <Link href="/compute/emotion">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/emotion">
              <span css={withingButtonText}>Css In JS</span>
              <span>👩‍🎤</span>
            </a>
          </div>
        </Link>

        <Link href="/compute/redux">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/redux">
              <span css={withingButtonText}>Redux</span>
              <span className="icon-redux" />
            </a>
          </div>
        </Link>

        <Link href="/compute/react">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/react">
              <span css={withingButtonText}>React</span>
              <span className="icon-react" />
            </a>
          </div>
        </Link>

        <Link href="/compute/next">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/next">
              <span css={withingButtonText}>Next</span>
              <span className="icon-next-js" />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'database') {
    catMenu = (
      <>
        <Link href="/compute/postgres">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/postgres">
              <span css={withingButtonText}>PostgreSQL</span> <PostgresIcon />
            </a>
          </div>
        </Link>

        <Link href="/compute/mongodb">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/mongodb">
              <span css={withingButtonText}>MongoDB</span> <MongoDbIcon />
            </a>
          </div>
        </Link>

        <Link href="/compute/neo4j">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/neo4j">
              <span css={withingButtonText}>Neo4j</span> <NeoIcon />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'designpattern') {
    catMenu = (
      <>
        <Link href="/compute/dbnormalization">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/dbnormalization">
              <span css={withingButtonText}>Normalization</span> <span>💾</span>
            </a>
          </div>
        </Link>

        <Link href="/compute/3layer">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/3layer">
              <span css={withingButtonText}>3-Layer</span> <span>🥪</span>
            </a>
          </div>
        </Link>

        <Link href="/compute/dry">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/dry">
              <span css={withingButtonText}>DRY</span> <span>🌵</span>
            </a>
          </div>
        </Link>

        <Link href="/compute/di">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/di">
              <span css={withingButtonText}>DI</span> <span>🧱</span>
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'di') {
    catMenu = (
      <>
        <Link href="/compute/typedi">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/typedi">
              <span css={withingButtonText}>TypeDI</span> <span>⚙️</span>
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'testing') {
    catMenu = (
      <>
        <Link href="/compute/jest">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/jest">
              <span css={withingButtonText}>Jest</span> <JestIcon />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'ops') {
    catMenu = (
      <>
        <Link href="/compute/docker">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/docker">
              <span css={withingButtonText}>Docker</span>
              <span className="icon-docker-icon" />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'auth') {
    catMenu = (
      <>
        <Link href="/compute/passport">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/passport">
              <span css={withingButtonText}>PassportJS</span> <PassportIcon />
            </a>
          </div>
        </Link>

        <Link href="/compute/jwt">
          <div onClick={returnHandlerInside}>
            <a css={withinButton} href="/compute/jwt">
              <span css={withingButtonText}>JWT</span> <JWTIcon />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'auth') {
    catMenu = (
      <>
        <Link href="/compute/passport">
          <div onClick={returnHandlerInside}>
            <a href="/compute/passport">
              PassportJS <PassportIcon />
            </a>
          </div>
        </Link>

        <Link href="/compute/jwt">
          <div onClick={returnHandlerInside}>
            <a href="/compute/jwt">
              JWT <JWTIcon />
            </a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'project') {
    catMenu = (
      <>
        <div onClick={returnHandlerInside}>
          <a
            href="https://anime.maximefleurant.com/"
            target="_blank"
            rel="noreferrer"
          >
            Anime <span>👁</span>
          </a>
        </div>

        <div onClick={returnHandlerInside}>
          <a
            href="https://maximefleurant.com/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio <span>🌎</span>
          </a>
        </div>
      </>
    );
  }

  if (currentPage === 'life') {
    catMenu = (
      <>
        <div onClick={(): void => menuHandler('cinema')}>Cinema</div>
        <div onClick={(): void => menuHandler('novels')}>Novels</div>
        <div onClick={(): void => menuHandler('games')}>Games</div>
      </>
    );
  }

  if (currentPage === 'cinema') {
    catMenu = (
      <>
        <Link href="/life/cinema/antonioni">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/antonioni">Antonioni</a>
          </div>
        </Link>

        <Link href="/life/cinema/araki">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/araki">Araki</a>
          </div>
        </Link>

        <Link href="/life/cinema/bergman">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/bergman">Bergman</a>
          </div>
        </Link>

        <Link href="/life/cinema/bresson">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/bresson">Bresson</a>
          </div>
        </Link>

        <Link href="/life/cinema/cassavetes">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/cassavetes">Cassavetes</a>
          </div>
        </Link>
        <Link href="/life/cinema/dreyer">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/dreyer">Dreyer</a>
          </div>
        </Link>
        <Link href="/life/cinema/eustache">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/eustache">Eustache</a>
          </div>
        </Link>
        <Link href="/life/cinema/fassbinder">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/fassbinder">Fassbinder</a>
          </div>
        </Link>
        <Link href="/life/cinema/fellini">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/fellini">Fellini</a>
          </div>
        </Link>
        <Link href="/life/cinema/ferrara">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/ferrara">Ferrara</a>
          </div>
        </Link>
        <Link href="/life/cinema/godard">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/godard">Godard</a>
          </div>
        </Link>
        <Link href="/life/cinema/hsiao-hsien">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/hsiao-hsien">Hsiao-Hsien</a>
          </div>
        </Link>
        <Link href="/life/cinema/jarmusch">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/jarmusch">Jarmusch</a>
          </div>
        </Link>
        <Link href="/life/cinema/kitano">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/kitano">Kitano</a>
          </div>
        </Link>
        <Link href="/life/cinema/kubrick">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/kubrick">Kubrick</a>
          </div>
        </Link>
        <Link href="/life/cinema/lynch">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/lynch">Lynch</a>
          </div>
        </Link>
        <Link href="/life/cinema/malick">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/malick">Malick</a>
          </div>
        </Link>
        <Link href="/life/cinema/resnais">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/resnais">Resnais</a>
          </div>
        </Link>
        <Link href="/life/cinema/rohmer">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/rohmer">Rohmer</a>
          </div>
        </Link>
        <Link href="/life/cinema/tarkovsky">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/tarkovsky">Tarkovsky</a>
          </div>
        </Link>
        <Link href="/life/cinema/wai">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/wai">Kar-Wai</a>
          </div>
        </Link>
        <Link href="/life/cinema/wenders">
          <div onClick={returnHandlerInside}>
            <a href="/life/cinema/wenders">Wenders</a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'novels') {
    catMenu = (
      <>
        <Link href="/life/novels/balzac">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/balzac">Balzac</a>
          </div>
        </Link>
        <Link href="/life/novels/coupland">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/coupland">Coupland</a>
          </div>
        </Link>
        <Link href="/life/novels/delillo">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/delillo">Delillo</a>
          </div>
        </Link>
        <Link href="/life/novels/dostoevsky">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/dostoevsky">Dostoevsky</a>
          </div>
        </Link>
        <Link href="/life/novels/ellis">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/ellis">Easton Ellis</a>
          </div>
        </Link>
        <Link href="/life/novels/faulkner">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/faulkner">Faulkner</a>
          </div>
        </Link>
        <Link href="/life/novels/fitzgerald">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/fitzgerald">Fitzgerald</a>
          </div>
        </Link>
        <Link href="/life/novels/franzen">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/franzen">Franzen</a>
          </div>
        </Link>
        <Link href="/life/novels/gibson">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/gibson">Gibson</a>
          </div>
        </Link>
        <Link href="/life/novels/houellebecq">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/houellebecq">Houellebecq</a>
          </div>
        </Link>
        <Link href="/life/novels/kdick">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/kdick">K Dick</a>
          </div>
        </Link>
        <Link href="/life/novels/mcinerney">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/mcinerney">McInerney</a>
          </div>
        </Link>
        <Link href="/life/novels/murakami">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/murakami">Murakami</a>
          </div>
        </Link>
        <Link href="/life/novels/nabokov">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/nabokov">Nabokov</a>
          </div>
        </Link>
        <Link href="/life/novels/orwell">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/orwell">Orwell</a>
          </div>
        </Link>
        <Link href="/life/novels/simmons">
          <div onClick={returnHandlerInside}>
            <a href="/life/novels/simmons">Simmons</a>
          </div>
        </Link>
      </>
    );
  }

  if (currentPage === 'games') {
    catMenu = (
      <>
        <Link href="/life/games/cuphead">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/cuphead">Cuphead</a>
          </div>
        </Link>
        <Link href="/life/games/darksouls">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/darksouls">Dark Souls</a>
          </div>
        </Link>
        <Link href="/life/games/devotion">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/devotion">Devotion</a>
          </div>
        </Link>
        <Link href="/life/games/divinity2">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/divinity2">Divinity</a>
          </div>
        </Link>
        <Link href="/life/games/ethan">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/ethan">Ethan Carter</a>
          </div>
        </Link>
        <Link href="/life/games/gonehome">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/gonehome">Gone Home</a>
          </div>
        </Link>
        <Link href="/life/games/inside">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/inside">Inside</a>
          </div>
        </Link>
        <Link href="/life/games/nier">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/nier">Nier</a>
          </div>
        </Link>
        <Link href="/life/games/obradin">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/obradin">Obra Dinn</a>
          </div>
        </Link>
        <Link href="/life/games/outerwilds">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/outerwilds">Outer Wilds</a>
          </div>
        </Link>
        <Link href="/life/games/outlast">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/outlast">Outlast</a>
          </div>
        </Link>
        <Link href="/life/games/pillars">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/pillars">Pillars</a>
          </div>
        </Link>
        <Link href="/life/games/soma">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/soma">Soma</a>
          </div>
        </Link>
        <Link href="/life/games/stanley">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/stanley">Stanley Parable</a>
          </div>
        </Link>
        <Link href="/life/games/undertale">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/undertale">Undertale</a>
          </div>
        </Link>
        <Link href="/life/games/witness">
          <div onClick={returnHandlerInside}>
            <a href="/life/games/witness">The Witness</a>
          </div>
        </Link>
      </>
    );
  }

  return (
    <div
      css={[
        gridCss,
        !open ? css({ display: 'none' }) : css(),
        { paddingBottom: 0 },
      ]}
    >
      <SimpleCell
        deskPos={{ rowStart: 3, rowEnd: 4, columnStart: 4, columnEnd: 22 }}
      >
        <div css={gameMenuLinkWrap}>
          <div css={logo} onClick={returnHandlerInside}>
            <div css={logoAnimeHeader}>
              <GameLogoAnime />
            </div>
            <span>
              <span
                css={[
                  logoPart,
                  theme.text.textColor700,
                  helveticaThin,
                  menuGameLogo,
                ]}
              >
                Design,
              </span>
              <br />
              <span
                css={[
                  logoPart,
                  theme.text.textColor900,
                  helveticaMedium,
                  menuGameLogo,
                ]}
              >
                Compute.
              </span>
            </span>
          </div>
          <div>
            <div css={backGame}>
              <span
                onClick={(): void => menuHandler(back)}
                css={[
                  returnButton(theme),
                  returnGame(theme),
                  css({
                    display: !back ? 'none' : 'initial',
                  }),
                ]}
              >
                <span className="icon-outline-arrow-back-ios" />
              </span>
              <span css={returnButton} onClick={returnHandlerInside}>
                Home
              </span>
            </div>

            <div css={gameCatMenu}>{catMenu}</div>
          </div>
        </div>
      </SimpleCell>
    </div>
  );
};

export default Menu;
