import { FunctionComponent } from 'react';
import Link from 'next/link';
import { insideLink } from '../ArticleHead/articleHeaderStyle';

// Type
type TTextLink = FunctionComponent<{
  logo: JSX.Element;
  href: string;
  text: string;
  outside?: boolean;
}>;

// React
const TextLink: TTextLink = ({ logo, href, text, outside }) => {
  if (outside)
    return (
      <a css={insideLink} href={href} target="_blank" rel="noreferrer">
        {text} {logo}
      </a>
    );

  return (
    <Link href={href}>
      <a css={insideLink} href={href}>
        {text} {logo}
      </a>
    </Link>
  );
};

export default TextLink;
