import styled from 'styled-components';

import HrnestedCss from './HrnestedCss';

interface HrnestedProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const HrnestedStyled = styled.hr<HrnestedProps>`
  ${HrnestedCss};
`;

export default HrnestedStyled;