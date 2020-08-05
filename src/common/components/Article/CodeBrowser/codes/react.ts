export const reactMain = `
// app.tsx
function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </CacheProvider>
  );
}

export default MyApp;


// component.tsx
// TYPE
export interface ICodeBrowser {
  language: string;
  code: string;
  heightAuto?: boolean;
}

type TCodeBrowser = FunctionComponent<ICodeBrowser>;

const CodeBrowser: TCodeBrowser = ({ language, code, heightAuto }) => {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  const theme = useTheme<ITheme>();

  let auto = css();

  if (heightAuto) {
    auto = css({ height: 'auto' });
  }

  return (
    <div css={cellWrap}>
      <div css={[browserWrap(theme), auto]}>
        <div css={browserButtonWrap}>
          <span css={[roundButton, closeButton]} />
          <span css={[roundButton, reduceButton]} />
          <span css={[roundButton, enlargeButton]} />
        </div>
        <div css={barWrap}>
          <SimpleBar css={{ height: '100%' }}>
            <pre css={codeBox}>
              <code className={language}>
                <div>{code}</div>
              </code>
            </pre>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default CodeBrowser;

`;

export const reactContext = `
// context.tsx
export const ThemeContext = React.createContext(null);

const Theme: FunctionComponent = ({ children }) => {
  const [themeState, updateTheme] = useState(false);

  const toggle = (): void => {
    updateTheme(!themeState);
  };

  return (
    <ThemeContext.Provider value={{ state: themeState, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;


// useContext.tsx
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
      <div css={[navWrap(theme), navCell]}>
        <div css={nav}>
          <div css={flexNavWrap}>
            <span
              className="icon-menu-outlined"
              css={menuButton}
              onClick={menuHandler}
            />
            <div css={navLinkWrapper}>
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
          deskPos={{ rowStart: 6, columnEnd: 4, columnStart: 1 }}
          extraCss={[sideWrap]}
          autoRow
        >
          {/* <div css={sidePanelWrap}> {sidePanel}</div> */}
        </Cell>

        {children}
      </div>
    </>
  );
};

export default Layout;

`;

export const reactTs = `
// typedComponent.tsx
// TYPE
interface Content {
  header: IArticleHeadContent;
  content: JSX.Element;
  code: ICodeBrowser;
  extraSpace?: number;
}

interface IArticle {
  articleHeader: IArticleHeadContent;
  headerContent: JSX.Element;
  headerCode: ICodeBrowser;
  headerContentHeightExtra?: number;
  content: Content[];
}

type TArticle = FunctionComponent<IArticle>;

// REACT
const Article: TArticle = ({
  articleHeader,
  headerContent,
  headerCode,
  content,
  headerContentHeightExtra,
}) => {
  let contentJsx: JSX.Element[];
  let deskRowStart = 13;
  let tabRowStart = 10;
  let mobilRowStart = 6;

  const mainExtraSpace = css\`
    @media (min-width: 1023px) {
      margin-bottom: \${headerContentHeightExtra}rem;
    }
  \`;

  if (content.length) {
    contentJsx = content.map((contentElem) => {
      const extraSpace = css\`
        @media (min-width: 1023px) {
          margin-bottom: \${contentElem.extraSpace}rem;
        }
      \`;

      const currentContentJSX = (
        <>
          <SimpleCell
            deskPos={{
              rowStart: deskRowStart,
              rowEnd: deskRowStart + 1,
              columnStart: 4,
              columnEnd: 13,
            }}
            tabPos={{
              rowStart: tabRowStart,
              rowEnd: tabRowStart + 1,
              columnStart: 1,
              columnEnd: 25,
            }}
            mobilPos={{
              rowStart: mobilRowStart,
              rowEnd: mobilRowStart + 1,
              columnStart: 1,
              columnEnd: 25,
            }}
          >
            <ArticleHead
              sub
              logo={contentElem.header.logo}
              titleContent={contentElem.header.titleContent}
              official={contentElem.header.official}
            />
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: deskRowStart + 1,
              rowEnd: deskRowStart + 2,
              columnStart: 4,
              columnEnd: 13,
            }}
            tabPos={{
              rowStart: tabRowStart + 1,
              rowEnd: tabRowStart + 2,
              columnStart: 1,
              columnEnd: 25,
            }}
            mobilPos={{
              rowStart: mobilRowStart + 1,
              rowEnd: mobilRowStart + 2,
              columnStart: 1,
              columnEnd: 25,
            }}
            extraCss={[extraSpace]}
          >
            <div css={mainText}>{contentElem.content}</div>
          </SimpleCell>

          <SimpleCell
            deskPos={{
              rowStart: deskRowStart + 1,
              rowEnd: deskRowStart + 2,
              columnStart: 13,
              columnEnd: 22,
            }}
            tabPos={{
              rowStart: tabRowStart + 2,
              rowEnd: tabRowStart + 3,
              columnStart: 1,
              columnEnd: 25,
            }}
            mobilPos={{
              rowStart: mobilRowStart + 2,
              rowEnd: mobilRowStart + 3,
              columnStart: 1,
              columnEnd: 25,
            }}
            relative={!contentElem.code.heightAuto}
            ratio={contentElem.code.heightAuto ? undefined : 0.665}
          >
            <CodeBrowser
              language={contentElem.code.language}
              code={contentElem.code.code}
              heightAuto={contentElem.code.heightAuto}
            />
          </SimpleCell>
        </>
      );

      deskRowStart += 4;
      tabRowStart += 4;
      mobilRowStart += 5;

      return currentContentJSX;
    });
  }

  return (
    <>
      <SimpleCell
        deskPos={{ rowStart: 9, rowEnd: 10, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent={articleHeader.titleContent}
          logo={articleHeader.logo}
          desc={articleHeader.desc}
          npm={articleHeader.npm}
          official={articleHeader.official}
          git={articleHeader.git}
          wiki={articleHeader.wiki}
          detail={articleHeader.detail}
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 11, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
        extraCss={[mainExtraSpace]}
      >
        <div css={mainText}>{headerContent}</div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 10, rowEnd: 11, columnStart: 13, columnEnd: 22 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 1, columnEnd: 25 }}
        ratio={0.625}
        relative
      >
        <CodeBrowser language={headerCode.language} code={headerCode.code} />
      </SimpleCell>

      {contentJsx}
    </>
  );
};

export default Article;

`;
