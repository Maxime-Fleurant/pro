export const emotionMain = `
// style.ts
export const browserWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      display: 'flex',
      flexFlow: 'column',
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
      border: \`1px solid \${theme.base.baseColor400}\`,
      borderRadius: pointSize4,
      zIndex: 0,
    },
    css\`
      @media (max-width: 1023px) {
        width: 100%;
      }
    \`
  );

export const barWrap = css(
  {
    overflow: 'hidden',
    zIndex: 0,
    paddingLeft: pointSize16,
    height: '100%',
  },
  css\`
    @media (max-width: 1023px) {
      padding-top: 0;
    }
  \`
);

export const browserButtonWrap = (theme: ITheme): SerializedStyles =>
  css(
    {
      padding: \`\${pointSize4} \${pointSize16}\`,
      borderBottom: \`1px solid \${theme.base.baseColor400}\`,
    },
    theme.background.backgroundColor200
  );

export const roundButton = css({
  width: pointSize12,
  height: pointSize12,
  marginRight: pointSize8,
  display: 'inline-block',
  borderRadius: '50%',
});

`;

export const emotionTheme = `
// theme.tsx
export const ThemeContext = React.createContext(null);

const Theme: FunctionComponent = ({ children }) => {
  const [themeState, updateTheme] = useState(false);

  const toggle = (): void => {
    updateTheme(!themeState);
  };

  let theme = {
    test: false,
    text: {
      textColor1000: css({ color: baseColor1000 }),
      textColor900: css({ color: baseColor900 }),
      textColor800: css({ color: baseColor800 }),
      textColor700: css({ color: baseColor700 }),
      textColor600: css({ color: baseColor600 }),
      textColor500: css({ color: baseColor500 }),
      textColor400: css({ color: baseColor400 }),
      textColor300: css({ color: baseColor300 }),
      textColor200: css({ color: baseColor200 }),
      textColor100: css({ color: baseColor100 }),
    },
    background: {
      backgroundColor1000: css({ backgroundColor: baseColor1000 }),
      backgroundColor900: css({ backgroundColor: baseColor900 }),
      backgroundColor800: css({ backgroundColor: baseColor800 }),
      backgroundColor700: css({ backgroundColor: baseColor700 }),
      backgroundColor600: css({ backgroundColor: baseColor600 }),
      backgroundColor500: css({ backgroundColor: baseColor500 }),
      backgroundColor400: css({ backgroundColor: baseColor400 }),
      backgroundColor300: css({ backgroundColor: baseColor300 }),
      backgroundColor200: css({ backgroundColor: baseColor200 }),
      backgroundColor100: css({ backgroundColor: baseColor100 }),
    },
    base: {
      baseColor1000: '#16191D',
      baseColor900: '#2D3239',
      baseColor800: '#454B54',
      baseColor700: '#5E656E',
      baseColor600: '#787E87',
      baseColor500: '#9198A1',
      baseColor400: '#ABB1BA',
      baseColor300: '#C6CBD2',
      baseColor200: '#E2E5E9',
      baseColor100: '#F0F2F4',
    },
  };

  if (themeState) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: baseColor100 }),
        textColor900: css({ color: baseColor200 }),
        textColor800: css({ color: baseColor300 }),
        textColor700: css({ color: baseColor400 }),
        textColor600: css({ color: baseColor500 }),
        textColor500: css({ color: baseColor600 }),
        textColor400: css({ color: baseColor700 }),
        textColor300: css({ color: baseColor800 }),
        textColor200: css({ color: baseColor900 }),
        textColor100: css({ color: baseColor1000 }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: baseColor100 }),
        backgroundColor900: css({ backgroundColor: baseColor200 }),
        backgroundColor800: css({ backgroundColor: baseColor300 }),
        backgroundColor700: css({ backgroundColor: baseColor400 }),
        backgroundColor600: css({ backgroundColor: baseColor500 }),
        backgroundColor500: css({ backgroundColor: baseColor600 }),
        backgroundColor400: css({ backgroundColor: baseColor700 }),
        backgroundColor300: css({ backgroundColor: baseColor800 }),
        backgroundColor200: css({ backgroundColor: baseColor900 }),
        backgroundColor100: css({ backgroundColor: baseColor1000 }),
      },
      base: {
        baseColor1000: '#F0F2F4',
        baseColor900: '#E2E5E9',
        baseColor800: '#C6CBD2',
        baseColor700: '#ABB1BA',
        baseColor600: '#9198A1',
        baseColor500: '#787E87',
        baseColor400: '#5E656E',
        baseColor300: '#454B54',
        baseColor200: '#2D3239',
        baseColor100: '#16191D',
      },
    };
  }

  return (
    <ThemeContext.Provider value={{ state: themeState, toggle }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;

`;

export const cssGrid = `
// gridSetup.ts
export const gridCss = css([
  css\`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 1.4rem;

    padding-bottom: 10rem;

    margin: 0 2rem;

    @media (max-width: 1023px) {
      grid-auto-rows: auto;
    }
    @media (max-width: 767px) {
      padding-top: 1rem;
      grid-gap: 0.7rem;
    }
  \`,
]);


// gridCell.tsx
// TYPE
interface IPos {
  rowStart: number;
  rowEnd?: number;
  columnStart: number;
  columnEnd: number;
}

type TCell = FunctionComponent<{
  deskPos: IPos;
  tabPos?: IPos;
  mobilPos?: IPos;
  ratio?: number;
  extraCss?: SerializedStyles[];
  backgroundImg?: string | null;
  onClick?: MouseEventHandler;
  relative?: boolean;
  endRowCallback?: (endRow: number) => void;
}>;

// REACT
export const SimpleCell: TCell = ({
  deskPos,
  tabPos,
  ratio,
  children,
  extraCss = [],
  backgroundImg,
  onClick,
  relative,
  mobilPos,
}) => {
  let withRatioCss = css\`\`;
  let withtabPos = css\`\`;
  let withMobilPos = css\`\`;
  let withBackground = css\`\`;

  const componentCss = css\`
    grid-row-start: \${deskPos.rowStart};
    grid-row-end: \${deskPos.rowEnd};
    grid-column-start: \${deskPos.columnStart};
    grid-column-end: \${deskPos.columnEnd};
  \`;

  if (tabPos) {
    withtabPos = css\`
      @media (max-width: 1023px) {
        grid-row-start: \${tabPos.rowStart};
        grid-row-end: \${tabPos.rowEnd};
        grid-column-start: \${tabPos.columnStart};
        grid-column-end: \${tabPos.columnEnd};
      }
    \`;
  }

  if (mobilPos) {
    withMobilPos = css\`
      @media (max-width: 767px) {
        grid-row-start: \${mobilPos.rowStart};
        grid-row-end: \${mobilPos.rowEnd};
        grid-column-start: \${mobilPos.columnStart};
        grid-column-end: \${mobilPos.columnEnd};
      }
    \`;
  }

  if (ratio) {
    withRatioCss = css\`
      @media (max-width: 1023px) {
        padding-top: \${100 * ratio}%;
      }
    \`;
  }

  if (backgroundImg) {
    withBackground = css({
      backgroundImage: \`url("\${backgroundImg}")\`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });
  }

  if (relative) {
    return (
      <div
        onClick={onClick}
        css={[
          relativeCell,
          componentCss,
          withRatioCss,
          withtabPos,
          withBackground,
          withMobilPos,
          ...extraCss,
        ]}
      >
        <div css={relativeChildren}>{children}</div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      css={[
        componentCss,
        withRatioCss,
        withtabPos,
        withBackground,
        withMobilPos,
        ...extraCss,
      ]}
    >
      {children}
    </div>
  );
};


`;
