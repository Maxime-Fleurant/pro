import SimpleBar from 'simplebar-react';
import ScrollAnimation from 'react-animate-on-scroll';
import prismjs from 'prismjs';
import { useEffect, FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import '../../../../../node_modules/prismjs/components/prism-jsx.js';
import '../../../../../node_modules/prismjs/components/prism-tsx.js';
import '../../../../../node_modules/prismjs/components/prism-typescript.js';
import '../../../../../node_modules/prismjs/components/prism-javascript.js';
import '../../../../../node_modules/prismjs/components/prism-yaml.js';
import {
  browserWrap,
  browserButtonWrap,
  roundButton,
  closeButton,
  reduceButton,
  enlargeButton,
  barWrap,
  codeBox,
  cellWrap,
} from '../../Layout/style';
import { ITheme } from '../../Layout/Theme.jsx';

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
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animateOnce
              duration={1.5}
              offset={50}
            >
              <pre css={codeBox}>
                <code className={language}>
                  <div>{code}</div>
                </code>
              </pre>{' '}
            </ScrollAnimation>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default CodeBrowser;
