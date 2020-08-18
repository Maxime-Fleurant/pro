import Head from 'next/head';
import { SimpleCell } from '../common/components/Cell/SimpleCell';

import {
  mainText,
  bigSubTitle,
} from '../common/components/Article/ArticleHead/articleHeaderStyle';
import { contactWrap } from '../common/components/Layout/style';

const King = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <SimpleCell
        deskPos={{ rowStart: 9, rowEnd: 12, columnStart: 4, columnEnd: 22 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <div css={contactWrap}>
          <span css={bigSubTitle}>Maxime Fleurant</span>
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 13, rowEnd: 14, columnStart: 4, columnEnd: 22 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          <div css={contactWrap}>maximefleurant.pro@gmail.com </div>
        </div>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 14, rowEnd: 15, columnStart: 4, columnEnd: 22 }}
        tabPos={{ rowStart: 11, rowEnd: 12, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 25 }}
      >
        <div css={mainText}>
          <div css={contactWrap}>
            <a href="https://www.linkedin.com/in/maxime-fleurant-025357a8/">
              Linkedin
            </a>
          </div>
        </div>
      </SimpleCell>
    </>
  );
};

export default King;
