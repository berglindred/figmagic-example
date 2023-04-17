import * as React from 'react';

import HrnestedStyled from './HrnestedStyled';

interface HrnestedProps {
 children: any;
  [propName: string]: {};
}

const Hrnested: React.FC<HrnestedProps> = ({ children }) => (
  <HrnestedStyled {...props} />
);

export default Hrnested;