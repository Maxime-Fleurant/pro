import { useTheme } from 'emotion-theming';
import { ITheme } from './Theme';
import {
  circleSvg,
  circAnime4,
  circAnime3,
  gAnime1,
  gAnime,
  circAnime1,
  circAnime2,
  gAnime2,
  svgWrap,
} from './style';

const LogoAnime = (): JSX.Element => {
  const theme = useTheme<ITheme>();

  return (
    <svg viewBox="0 0 100 100" css={svgWrap}>
      <g>
        <circle
          css={[circleSvg, circAnime4(theme)]}
          cx="50"
          cy="50"
          r="10"
          stroke="#5E656E"
          fill="none"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      <g>
        <circle
          css={[circleSvg, circAnime3(theme)]}
          cx="50"
          cy="50"
          r="30"
          stroke="#9198A1"
          fill="none"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      <g css={[gAnime, gAnime1]}>
        <circle
          css={[circleSvg, circAnime1(theme)]}
          cx="50"
          cy="50"
          r="49"
          stroke=" #C6CBD2"
          fill="none"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      <g css={[gAnime, gAnime2]}>
        <circle
          css={[circleSvg, circAnime2(theme)]}
          cx="50"
          cy="50"
          r="49"
          stroke="#E2E5E9"
          fill="none"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
};

export default LogoAnime;
