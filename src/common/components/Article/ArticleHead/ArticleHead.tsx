import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import {
  titlewrap,
  upTitleWrap,
  title,
  titleDesc,
  linkWrap,
  titleLink,
  sideInfo,
  subTitleWrap,
  subTitle,
  subTitleLink,
  subLinkSpe,
  mainLinkWrap,
} from './articleHeaderStyle';
import NpmIcon from '../../icons/Npm';
import { ITheme } from '../../Layout/Theme';

// TYPE
export interface IArticleHeadContent {
  titleContent: string;
  logo?: JSX.Element;
  desc?: string;
  wiki?: string;
  npm?: string;
  official?: string;
  git?: string;
  detail?: string;
  sub?: boolean;
}

type TArticleHead = FunctionComponent<IArticleHeadContent>;

// REACT
const ArticleHead: TArticleHead = ({
  titleContent,
  logo,
  desc,
  wiki,
  npm,
  official,
  git,
  detail,
  sub,
}) => {
  const theme = useTheme<ITheme>();

  const officialLink = (
    <a href={official} target="_blank" rel="noreferrer">
      {logo}
    </a>
  );

  const npmLink = npm ? (
    <a href={npm} target="_blank" rel="noreferrer">
      <NpmIcon />
    </a>
  ) : null;
  const wikiLink = wiki ? (
    <a href={wiki} target="_blank" rel="noreferrer">
      <span className="icon-wikipedia" css={subLinkSpe} />
    </a>
  ) : null;
  const gitLink = git ? (
    <a href={git} target="_blank" rel="noreferrer">
      <span className="icon-github-filled" css={subLinkSpe} />
    </a>
  ) : null;

  if (sub) {
    return (
      <div css={[linkWrap, subTitleWrap(theme)]}>
        <span css={subTitle}>{titleContent}</span>
        <div css={subTitleLink}>
          {officialLink}
          {gitLink}
          {npmLink}
          {wikiLink}
        </div>
      </div>
    );
  }

  return (
    <div css={titlewrap}>
      <div css={upTitleWrap}>
        <div css={title}>
          {titleContent}&nbsp;
          {logo}
        </div>

        <div css={titleDesc}>{desc}</div>
      </div>

      <div css={[linkWrap, mainLinkWrap]}>
        <div css={titleLink}>
          {officialLink}
          {gitLink}
          {npmLink}
          {wikiLink}
        </div>
        <span css={sideInfo}>{detail}</span>
      </div>
    </div>
  );
};

export default ArticleHead;
