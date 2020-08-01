import { FunctionComponent } from 'react';

import { css } from '@emotion/core';
import { animeWrapp } from '../common/components/Layout/style';
import { Cell } from '../common/components/Cell/cell';
import LogoAnime from '../common/components/Layout/logoAnime';

const Index: FunctionComponent = () => {
  return (
    <>
      <Cell deskPos={{ rowStart: 6, rowEnd: 9, columnEnd: 1, columnStart: 4 }}>
        <div css={animeWrapp}></div>
      </Cell>
    </>
  );
};

export default Index;
