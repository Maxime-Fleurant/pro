import { FunctionComponent } from 'react';
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link';
import {
  detailButton,
  detailButtonText,
  detailButtonLogo,
} from './categoryStyle';
import { wrapperCell, wrapCell2 } from '../Layout/style';

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
    <div css={[wrapperCell, wrapCell2]}>
      <Zoom duration={1500}>
        <Link href={href}>
          <div css={detailButton}>
            <div css={detailButtonText}>{detail}</div>
            <div css={detailButtonLogo}>
              {name} {logo}
            </div>
          </div>
        </Link>
      </Zoom>
    </div>
  );
};

export default CategoryItem;
