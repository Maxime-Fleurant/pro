import { FunctionComponent } from 'react';

import { css } from '@emotion/core';
import {
  gridCss,
  sideLink,
  activeSideLink,
  circle1,
  circleSvg,
  circAnime1,
  circAnime2,
  circAnime3,
  circAnime4,
  circAnime5,
  circAnime6,
  gAnime,
  gAnime1,
  gAnime2,
  animeWrapp,
} from '../common/components/Layout/style';
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
