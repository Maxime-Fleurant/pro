export const main = `
const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter();
  let sidePanel: JSX.Element;
  let menuPos = closeSideBar;
  let layer = css({ visibility: 'hidden', opacity: 0 });
  const theme = useTheme<ITheme>();

  const [menuOpen, updateMenuState] = useState(false);
  const { toggle } = useContext(ThemeContext);

  const menuHandler = (): void => {
    updateMenuState(!menuOpen);
  };

  if (menuOpen) {
    menuPos = openSideBar;
    layer = css({ visibility: 'visible', opacity: 0.7 });
  }

  if (router.pathname.match(/^\\/compute?/g)) {
    sidePanel = <ComputeSide />;
  }

  if (router.pathname.match(/^\\/design?/g)) {
    sidePanel = <DesignSide />;
  }

  return (
    <>
      <Global
        styles={css\`
          body {
            \${theme.background.backgroundColor100}
          }

          .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
            background-color: #9198a1;
          }

          * {
            transition: background-color 0.25s ease;
          }
        \`}
      />
      <span css={mobileNavWrap}>
        <div css={mobileNav}>
          <span
            className="icon-outline-arrow-back-ios"
            css={backButton}
            onClick={router.back}
          />
          <div css={[logo, centerLogo]}>
            <span>
              <span css={[logoPart, theme.text.textColor700, helveticaThin]}>
                Design
              </span>
              <br />
              <span css={[logoPart, theme.text.textColor900, helveticaMedium]}>
                Compute
              </span>
            </span>
          </div>
          <span
            className="icon-menu-outlined"
            css={menuButton}
            onClick={menuHandler}
          />
        </div>
      </span>
      <span css={[sideBar(theme), menuPos]} onClick={menuHandler}>
        <div css={[logo, sideLogo(theme)]}>
          <span>
            <span css={[logoPart, theme.text.textColor700, helveticaThin]}>
              Design,
            </span>
            <br />
            <span css={[logoPart, theme.text.textColor900, helveticaMedium]}>
              Compute.
            </span>
          </span>
        </div>

        <div css={mainSideLink}>
          <Link href="/design">
            <a>Design</a>
          </Link>

          <Link href="/compute">
            <a>Compute</a>
          </Link>

          <Link href="/qsd">
            <a>Project</a>
          </Link>

          <Link href="/qsd">
            <a>Life</a>
          </Link>
        </div>
        <div css={sideLinkPage}>
          <ComputeSide />
        </div>
      </span>
      <span css={css([openLayer, layer])} onClick={menuHandler} />
      <div css={[navWrap(theme), navCell]}>
        <div css={nav}>
          <div css={logo}>
            <span>
              <span css={[logoPart, theme.text.textColor700, helveticaThin]}>
                Design,
              </span>
              <br />
              <span css={[logoPart, theme.text.textColor900, helveticaMedium]}>
                Compute.
              </span>
            </span>
          </div>
          <div css={flexNavWrap}>
            <span
              className="icon-menu-outlined"
              css={menuButton}
              onClick={menuHandler}
            />
            <div css={navLinkWrapper}>
              <CLink
                href="/design"
                main
                nonActiveCss={navLink(theme)}
                activeCss={activeLink(theme)}
              >
                <a>Design</a>
              </CLink>

              <CLink
                href="/compute"
                main
                nonActiveCss={navLink(theme)}
                activeCss={activeLink(theme)}
              >
                <a>Compute</a>
              </CLink>

              <span css={navLink(theme)}>Project</span>
              <span css={navLink(theme)}>Life</span>
              <label css={switchButton(theme)}>
                qsd
                <input onChange={toggle} type="checkbox" />
                <div />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div css={gridCss}>
        <Cell
          deskPos={{ rowStart: 6, columnEnd: 5, columnStart: 1 }}
          extraCss={[sideWrap]}
          autoRow
        >
          {sidePanel}
        </Cell>

        {children}
      </div>
      ;
    </>
  );
};

export default Layout;

`;
