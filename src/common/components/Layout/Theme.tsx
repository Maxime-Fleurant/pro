import { css, SerializedStyles } from '@emotion/core';
import React, { FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import {
  baseColor1000,
  baseColor900,
  baseColor800,
  baseColor700,
  baseColor600,
  baseColor400,
  baseColor300,
  baseColor500,
  baseColor200,
  baseColor100,
} from '../../globalStyle';

// TYPE
type TTheme = FunctionComponent;

export interface ITheme {
  text: {
    textColor1000: SerializedStyles;
    textColor900: SerializedStyles;
    textColor800: SerializedStyles;
    textColor700: SerializedStyles;
    textColor600: SerializedStyles;
    textColor500: SerializedStyles;
    textColor400: SerializedStyles;
    textColor300: SerializedStyles;
    textColor200: SerializedStyles;
    textColor100: SerializedStyles;
  };
  background: {
    backgroundColor1000: SerializedStyles;
    backgroundColor900: SerializedStyles;
    backgroundColor800: SerializedStyles;
    backgroundColor700: SerializedStyles;
    backgroundColor600: SerializedStyles;
    backgroundColor500: SerializedStyles;
    backgroundColor400: SerializedStyles;
    backgroundColor300: SerializedStyles;
    backgroundColor200: SerializedStyles;
    backgroundColor100: SerializedStyles;
  };
  base: {
    baseColor1000: string;
    baseColor900: string;
    baseColor800: string;
    baseColor700: string;
    baseColor600: string;
    baseColor500: string;
    baseColor400: string;
    baseColor300: string;
    baseColor200: string;
    baseColor100: string;
  };
}

export const ThemeContext = React.createContext(null);

const Theme: FunctionComponent = ({ children }) => {
  const [themeState, updateTheme] = useState(0);

  const toggle = (): void => {
    if (themeState === 9) {
      updateTheme(0);
    } else {
      updateTheme(themeState + 1);
    }
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

  if (themeState === 1) {
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

  if (themeState === 4) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#321B1F' }),
        textColor900: css({ color: '#40262A' }),
        textColor800: css({ color: '#5D3C41' }),
        textColor700: css({ color: '#78545A' }),
        textColor600: css({ color: '#78545A' }),
        textColor500: css({ color: '#A1787E' }),
        textColor400: css({ color: '#B99299' }),
        textColor300: css({ color: '#D0AFB4' }),
        textColor200: css({ color: '#E4CDD1' }),
        textColor100: css({ color: '#EEDDE0' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#321B1F' }),
        backgroundColor900: css({ backgroundColor: '#40262A' }),
        backgroundColor800: css({ backgroundColor: '#5D3C41' }),
        backgroundColor700: css({ backgroundColor: '#78545A' }),
        backgroundColor600: css({ backgroundColor: '#78545A' }),
        backgroundColor500: css({ backgroundColor: '#A1787E' }),
        backgroundColor400: css({ backgroundColor: '#B99299' }),
        backgroundColor300: css({ backgroundColor: '#D0AFB4' }),
        backgroundColor200: css({ backgroundColor: '#E4CDD1' }),
        backgroundColor100: css({ backgroundColor: '#EEDDE0' }),
      },
      base: {
        baseColor1000: '#321B1F',
        baseColor900: '#40262A',
        baseColor800: '#5D3C41',
        baseColor700: '#78545A',
        baseColor600: '#78545A',
        baseColor500: '#A1787E',
        baseColor400: '#B99299',
        baseColor300: '#D0AFB4',
        baseColor200: '#E4CDD1',
        baseColor100: '#EEDDE0',
      },
    };
  }

  if (themeState === 5) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#EEDDE0' }),
        textColor900: css({ color: '#E4CDD1' }),
        textColor800: css({ color: '#D0AFB4' }),
        textColor700: css({ color: '#B99299' }),
        textColor600: css({ color: '#A1787E' }),
        textColor500: css({ color: '#78545A' }),
        textColor400: css({ color: '#78545A' }),
        textColor300: css({ color: '#5D3C41' }),
        textColor200: css({ color: '#40262A' }),
        textColor100: css({ color: '#321B1F' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#EEDDE0' }),
        backgroundColor900: css({ backgroundColor: '#E4CDD1' }),
        backgroundColor800: css({ backgroundColor: '#D0AFB4' }),
        backgroundColor700: css({ backgroundColor: '#B99299' }),
        backgroundColor600: css({ backgroundColor: '#A1787E' }),
        backgroundColor500: css({ backgroundColor: '#78545A' }),
        backgroundColor400: css({ backgroundColor: '#78545A' }),
        backgroundColor300: css({ backgroundColor: '#5D3C41' }),
        backgroundColor200: css({ backgroundColor: '#40262A' }),
        backgroundColor100: css({ backgroundColor: '#321B1F' }),
      },
      base: {
        baseColor1000: '#EEDDE0',
        baseColor900: '#E4CDD1',
        baseColor800: '#D0AFB4',
        baseColor700: '#B99299',
        baseColor600: '#A1787E',
        baseColor500: '#78545A',
        baseColor400: '#78545A',
        baseColor300: '#5D3C41',
        baseColor200: '#40262A',
        baseColor100: '#321B1F',
      },
    };
  }

  if (themeState === 2) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#1B1B32' }),
        textColor900: css({ color: '#262640' }),
        textColor800: css({ color: '#3C3C5D' }),
        textColor700: css({ color: '#545478' }),
        textColor600: css({ color: '#545478' }),
        textColor500: css({ color: '#7878A1' }),
        textColor400: css({ color: '#9292B9' }),
        textColor300: css({ color: '#AFAFD0' }),
        textColor200: css({ color: '#CDCDE4' }),
        textColor100: css({ color: '#DDDDEE' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#1B1B32' }),
        backgroundColor900: css({ backgroundColor: '#262640' }),
        backgroundColor800: css({ backgroundColor: '#3C3C5D' }),
        backgroundColor700: css({ backgroundColor: '#545478' }),
        backgroundColor600: css({ backgroundColor: '#545478' }),
        backgroundColor500: css({ backgroundColor: '#7878A1' }),
        backgroundColor400: css({ backgroundColor: '#9292B9' }),
        backgroundColor300: css({ backgroundColor: '#AFAFD0' }),
        backgroundColor200: css({ backgroundColor: '#CDCDE4' }),
        backgroundColor100: css({ backgroundColor: '#DDDDEE' }),
      },
      base: {
        baseColor1000: '#1B1B32',
        baseColor900: '#262640',
        baseColor800: '#3C3C5D',
        baseColor700: '#545478',
        baseColor600: '#545478',
        baseColor500: '#7878A1',
        baseColor400: '#9292B9',
        baseColor300: '#AFAFD0',
        baseColor200: '#CDCDE4',
        baseColor100: '#DDDDEE',
      },
    };
  }

  if (themeState === 3) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#DDDDEE' }),
        textColor900: css({ color: '#CDCDE4' }),
        textColor800: css({ color: '#AFAFD0' }),
        textColor700: css({ color: '#9292B9' }),
        textColor600: css({ color: '#7878A1' }),
        textColor500: css({ color: '#545478' }),
        textColor400: css({ color: '#545478' }),
        textColor300: css({ color: '#3C3C5D' }),
        textColor200: css({ color: '#262640' }),
        textColor100: css({ color: '#1B1B32' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#DDDDEE' }),
        backgroundColor900: css({ backgroundColor: '#CDCDE4' }),
        backgroundColor800: css({ backgroundColor: '#AFAFD0' }),
        backgroundColor700: css({ backgroundColor: '#9292B9' }),
        backgroundColor600: css({ backgroundColor: '#7878A1' }),
        backgroundColor500: css({ backgroundColor: '#545478' }),
        backgroundColor400: css({ backgroundColor: '#545478' }),
        backgroundColor300: css({ backgroundColor: '#3C3C5D' }),
        backgroundColor200: css({ backgroundColor: '#262640' }),
        backgroundColor100: css({ backgroundColor: '#1B1B32' }),
      },
      base: {
        baseColor1000: '#DDDDEE',
        baseColor900: '#CDCDE4',
        baseColor800: '#AFAFD0',
        baseColor700: '#9292B9',
        baseColor600: '#7878A1',
        baseColor500: '#545478',
        baseColor400: '#545478',
        baseColor300: '#3C3C5D',
        baseColor200: '#262640',
        baseColor100: '#1B1B32',
      },
    };
  }

  if (themeState === 6) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#1B322E' }),
        textColor900: css({ color: '#26403C' }),
        textColor800: css({ color: '#3C5D58' }),
        textColor700: css({ color: '#547872' }),
        textColor600: css({ color: '#547872' }),
        textColor500: css({ color: '#78A19A' }),
        textColor400: css({ color: '#92B9B3' }),
        textColor300: css({ color: '#AFD0CA' }),
        textColor200: css({ color: '#CDE4E0' }),
        textColor100: css({ color: '#DDEEEB' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#1B322E' }),
        backgroundColor900: css({ backgroundColor: '#26403C' }),
        backgroundColor800: css({ backgroundColor: '#3C5D58' }),
        backgroundColor700: css({ backgroundColor: '#547872' }),
        backgroundColor600: css({ backgroundColor: '#547872' }),
        backgroundColor500: css({ backgroundColor: '#78A19A' }),
        backgroundColor400: css({ backgroundColor: '#92B9B3' }),
        backgroundColor300: css({ backgroundColor: '#AFD0CA' }),
        backgroundColor200: css({ backgroundColor: '#CDE4E0' }),
        backgroundColor100: css({ backgroundColor: '#DDEEEB' }),
      },
      base: {
        baseColor1000: '#1B322E',
        baseColor900: '#26403C',
        baseColor800: '#3C5D58',
        baseColor700: '#547872',
        baseColor600: '#547872',
        baseColor500: '#78A19A',
        baseColor400: '#92B9B3',
        baseColor300: '#AFD0CA',
        baseColor200: '#CDE4E0',
        baseColor100: '#DDEEEB',
      },
    };
  }

  if (themeState === 7) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#DDEEEB' }),
        textColor900: css({ color: '#CDE4E0' }),
        textColor800: css({ color: '#AFD0CA' }),
        textColor700: css({ color: '#92B9B3' }),
        textColor600: css({ color: '#78A19A' }),
        textColor500: css({ color: '#547872' }),
        textColor400: css({ color: '#547872' }),
        textColor300: css({ color: '#3C5D58' }),
        textColor200: css({ color: '#26403C' }),
        textColor100: css({ color: '#1B322E' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#DDEEEB' }),
        backgroundColor900: css({ backgroundColor: '#CDE4E0' }),
        backgroundColor800: css({ backgroundColor: '#AFD0CA' }),
        backgroundColor700: css({ backgroundColor: '#92B9B3' }),
        backgroundColor600: css({ backgroundColor: '#78A19A' }),
        backgroundColor500: css({ backgroundColor: '#547872' }),
        backgroundColor400: css({ backgroundColor: '#547872' }),
        backgroundColor300: css({ backgroundColor: '#3C5D58' }),
        backgroundColor200: css({ backgroundColor: '#26403C' }),
        backgroundColor100: css({ backgroundColor: '#1B322E' }),
      },
      base: {
        baseColor1000: '#DDEEEB',
        baseColor900: '#CDE4E0',
        baseColor800: '#AFD0CA',
        baseColor700: '#92B9B3',
        baseColor600: '#78A19A',
        baseColor500: '#547872',
        baseColor400: '#547872',
        baseColor300: '#3C5D58',
        baseColor200: '#26403C',
        baseColor100: '#1B322E',
      },
    };
  }

  if (themeState === 8) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#32321B' }),
        textColor900: css({ color: '#404026' }),
        textColor800: css({ color: '#5D5D3C' }),
        textColor700: css({ color: '#787854' }),
        textColor600: css({ color: '#787854' }),
        textColor500: css({ color: '#A1A178' }),
        textColor400: css({ color: '#B9B992' }),
        textColor300: css({ color: '#D0D0AF' }),
        textColor200: css({ color: '#E4E4CD' }),
        textColor100: css({ color: '#EEEEDD' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#32321B' }),
        backgroundColor900: css({ backgroundColor: '#404026' }),
        backgroundColor800: css({ backgroundColor: '#5D5D3C' }),
        backgroundColor700: css({ backgroundColor: '#787854' }),
        backgroundColor600: css({ backgroundColor: '#787854' }),
        backgroundColor500: css({ backgroundColor: '#A1A178' }),
        backgroundColor400: css({ backgroundColor: '#B9B992' }),
        backgroundColor300: css({ backgroundColor: '#D0D0AF' }),
        backgroundColor200: css({ backgroundColor: '#E4E4CD' }),
        backgroundColor100: css({ backgroundColor: '#EEEEDD' }),
      },
      base: {
        baseColor1000: '#32321B',
        baseColor900: '#404026',
        baseColor800: '#5D5D3C',
        baseColor700: '#787854',
        baseColor600: '#787854',
        baseColor500: '#A1A178',
        baseColor400: '#B9B992',
        baseColor300: '#D0D0AF',
        baseColor200: '#E4E4CD',
        baseColor100: '#EEEEDD',
      },
    };
  }

  if (themeState === 9) {
    theme = {
      test: true,
      text: {
        textColor1000: css({ color: '#EEEEDD' }),
        textColor900: css({ color: '#E4E4CD' }),
        textColor800: css({ color: '#D0D0AF' }),
        textColor700: css({ color: '#B9B992' }),
        textColor600: css({ color: '#A1A178' }),
        textColor500: css({ color: '#787854' }),
        textColor400: css({ color: '#787854' }),
        textColor300: css({ color: '#5D5D3C' }),
        textColor200: css({ color: '#404026' }),
        textColor100: css({ color: '#32321B' }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: '#EEEEDD' }),
        backgroundColor900: css({ backgroundColor: '#E4E4CD' }),
        backgroundColor800: css({ backgroundColor: '#D0D0AF' }),
        backgroundColor700: css({ backgroundColor: '#B9B992' }),
        backgroundColor600: css({ backgroundColor: '#A1A178' }),
        backgroundColor500: css({ backgroundColor: '#787854' }),
        backgroundColor400: css({ backgroundColor: '#787854' }),
        backgroundColor300: css({ backgroundColor: '#5D5D3C' }),
        backgroundColor200: css({ backgroundColor: '#404026' }),
        backgroundColor100: css({ backgroundColor: '#32321B' }),
      },
      base: {
        baseColor1000: '#EEEEDD',
        baseColor900: '#E4E4CD',
        baseColor800: '#D0D0AF',
        baseColor700: '#B9B992',
        baseColor600: '#A1A178',
        baseColor500: '#787854',
        baseColor400: '#787854',
        baseColor300: '#5D5D3C',
        baseColor200: '#404026',
        baseColor100: '#32321B',
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
