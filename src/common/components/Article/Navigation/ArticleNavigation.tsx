import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Cell } from '../../Cell/cell';
import { useTheme } from 'emotion-theming';
import { bigSideLink, sideWrap, sideLink, linkBlockWrapp } from '../../Layout/style';
import { rightSideLink } from './ArticleNavigationStyle';
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

type TArticleNavigation = FunctionComponent<{ content: TArticleNavigationContent }>;

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
        <div key={item.href} css={[sideLink(theme), rightSideLink]}>
          {itemLink}
        </div>
      );
    });

    return (
      <div key={block.name} css={linkBlockWrapp}>
        <div css={[bigSideLink(theme), rightSideLink]}>{block.name}</div>
        {itemsJsx}
      </div>
    );
  });

  return (
    <Cell deskPos={{ rowStart: 6, columnStart: 21, columnEnd: 25 }} autoRow extraCss={[sideWrap]}>
      {contentJSX}
    </Cell>
  );
};

export default ArticleNavigation;
