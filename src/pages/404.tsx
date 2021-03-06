import Head from 'next/head';
import { SimpleCell } from '../common/components/Cell/SimpleCell';
import { bigSubTitle } from '../common/components/Article/ArticleHead/articleHeaderStyle';
import { contactWrap } from '../common/components/Layout/style';

const King = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <SimpleCell
        deskPos={{ rowStart: 9, rowEnd: 12, columnStart: 4, columnEnd: 22 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
      >
        <div css={contactWrap}>
          <span css={bigSubTitle}>OOPS 🚧</span>
        </div>
      </SimpleCell>
    </>
  );
};

export default King;
