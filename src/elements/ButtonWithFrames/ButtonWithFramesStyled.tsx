import styled from 'styled-components';

import ButtonWithFramesCss from './ButtonWithFramesCss';

interface ButtonWithFramesProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const ButtonWithFramesStyled = styled.div<ButtonWithFramesProps>`
  ${ButtonWithFramesCss};
`;

export default ButtonWithFramesStyled;