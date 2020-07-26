import { FunctionComponent } from 'react';

import { css } from '@emotion/core';
import { gridCss, sideLink, activeSideLink } from '../common/components/Layout/style';
import { Cell } from '../common/components/Cell/cell';

const Index: FunctionComponent = () => {
  return (
    <>
      <Cell deskPos={{ rowStart: 6, columnEnd: 25, columnStart: 21 }} autoRow extraCss={[sideLink]}>
        <div>Intro</div>
        <div>Prisma1</div>
        <div>
          Apollo <i>E</i>
        </div>
      </Cell>
    </>
  );
};

export default Index;
