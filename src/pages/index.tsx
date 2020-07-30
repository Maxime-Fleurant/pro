import { FunctionComponent } from 'react';
import Snap from 'snapsvg-cjs';
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
} from '../common/components/Layout/style';
import { Cell } from '../common/components/Cell/cell';

const Index: FunctionComponent = () => {
  return (
    <>
      <Cell deskPos={{ rowStart: 6, rowEnd: 9, columnEnd: 1, columnStart: 4 }}>
        <div>
          <svg viewBox="0 0 100 100">
            <circle
              css={[circleSvg, circAnime4]}
              cx="50"
              cy="50"
              r="10"
              stroke="grey"
              fill="none"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            <circle
              css={[circleSvg, circAnime3]}
              cx="50"
              cy="50"
              r="30"
              stroke="red"
              fill="none"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />

            <circle
              css={[circleSvg, circAnime1]}
              cx="50"
              cy="50"
              r="40"
              stroke="purple"
              fill="none"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              css={[circleSvg, circAnime2]}
              cx="50"
              cy="50"
              r="40"
              stroke="grey"
              fill="none"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />

            <circle
              css={[circleSvg, circAnime5]}
              cx="50"
              cy="50"
              r="49"
              stroke="red"
              fill="none"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </Cell>
    </>
  );
};

export default Index;
