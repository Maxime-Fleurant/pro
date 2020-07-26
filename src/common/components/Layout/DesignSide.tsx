import { FunctionComponent } from 'react';
import { Cell } from '../Cell/cell';
import { activeSideLink, sideLink } from './style';
import PostgresIcon from '../icons/Postgres';
import CLink from '../CLink';

const DesignSide: FunctionComponent = () => {
  return (
    <Cell deskPos={{ rowStart: 6, columnEnd: 5, columnStart: 1 }} autoRow extraCss={[sideLink]}>
      <div>Design </div>
      <div>
        sds&nbsp;
        <PostgresIcon />
      </div>
    </Cell>
  );
};

export default DesignSide;
