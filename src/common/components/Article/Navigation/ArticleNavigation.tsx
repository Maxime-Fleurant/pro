import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { Cell } from '../../Cell/cell';
import {
  bigSideLink,
  sideWrap,
  sideLink,
  linkBlockWrapp,
  sidePanelWrap,
} from '../../Layout/style';
import { rightSideLink, sideBorder } from './ArticleNavigationStyle';
import { ITheme } from '../../Layout/Theme';

// Type
interface INavigationItem {
  name: string;
  href: string;
  outside?: boolean;
  domain?: boolean;
}

interface INavigationBlock {
  name: string;
  items: INavigationItem[];
}

type TArticleNavigationContent = INavigationBlock[];

type TArticleNavigation = FunctionComponent<{
  content: TArticleNavigationContent;
}>;

// React
const ArticleNavigation: TArticleNavigation = ({ content }) => {
  const theme = useTheme<ITheme>();

  const contentJSX = content.map((block) => {
    const itemsJsx = block.items.map((item) => {
      let itemLink = <a href={item.href}>{item.name}</a>;

      if (item.outside) {
        itemLink = (
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        );
      }

      if (item.domain) {
        itemLink = (
          <Link href={item.href}>
            <a>{item.name}</a>
          </Link>
        );
      }

      return (
        <div key={item.href} css={[sideLink(theme)]}>
          {itemLink}
        </div>
      );
    });

    return (
      <div key={block.name} css={linkBlockWrapp}>
        <div css={[bigSideLink(theme)]}>{block.name}</div>
        {itemsJsx}
      </div>
    );
  });

  return (
    <Cell
      deskPos={{ rowStart: 6, columnStart: 22, columnEnd: 25 }}
      autoRow
      extraCss={[sideWrap]}
    >
      <div css={sideBorder}>{contentJSX}</div>
    </Cell>
  );
};

export default ArticleNavigation;
