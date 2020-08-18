import { FunctionComponent, MouseEventHandler } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import { relativeCell, relativeChildren } from './cellStyle';

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
  allRatio?: number;
  fit?: boolean;
  contain?: boolean;
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
  allRatio,
  contain,
  fit,
}) => {
  let withRatioCss = css``;
  let withtabPos = css``;
  let withMobilPos = css``;
  let withBackground = css``;
  let fitElem = css();

  const componentCss = css`
    grid-row-start: ${deskPos.rowStart};
    grid-row-end: ${deskPos.rowEnd};
    grid-column-start: ${deskPos.columnStart};
    grid-column-end: ${deskPos.columnEnd};
  `;

  if (tabPos) {
    withtabPos = css`
      @media (max-width: 1023px) {
        grid-row-start: ${tabPos.rowStart};
        grid-row-end: ${tabPos.rowEnd};
        grid-column-start: ${tabPos.columnStart};
        grid-column-end: ${tabPos.columnEnd};
      }
    `;
  }

  if (mobilPos) {
    withMobilPos = css`
      @media (max-width: 767px) {
        grid-row-start: ${mobilPos.rowStart};
        grid-row-end: ${mobilPos.rowEnd};
        grid-column-start: ${mobilPos.columnStart};
        grid-column-end: ${mobilPos.columnEnd};
      }
    `;
  }

  if (ratio) {
    withRatioCss = css`
      @media (max-width: 1023px) {
        padding-top: ${100 * ratio}%;
      }
    `;
  }

  if (fit) {
    fitElem = css({ backgroundPosition: 'fit' });
  }

  if (allRatio) {
    withRatioCss = css`
      padding-top: ${100 * allRatio}%;
    `;
  }

  if (backgroundImg) {
    withBackground = css({
      backgroundImage: `url("${backgroundImg}")`,
      backgroundSize: contain ? 'contain' : 'cover',
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
          fitElem,
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
        fitElem,
        ...extraCss,
      ]}
    >
      {children}
    </div>
  );
};
