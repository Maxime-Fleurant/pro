import { FunctionComponent } from 'react';
import Link from 'next/link';
import { detailButton, detailButtonText, detailButtonLogo } from './categoryStyle';

// TYPE
interface ICategoryItem {
  detail: string;
  name: string;
  href: string;
  logo: JSX.Element;
}

type TCategoryItem = FunctionComponent<ICategoryItem>;

// REACT
const CategoryItem: TCategoryItem = ({ detail, name, logo, href }) => {
  return (
    <Link href={href}>
      <div css={detailButton}>
        <div css={detailButtonText}>{detail}</div>
        <div css={detailButtonLogo}>
          {name} {logo}
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
