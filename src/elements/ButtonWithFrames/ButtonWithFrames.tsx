import * as React from 'react';

import ButtonWithFramesStyled from './ButtonWithFramesStyled';

interface ButtonWithFramesProps {
 children: any;
  [propName: string]: {};
}

const ButtonWithFrames: React.FC<ButtonWithFramesProps> = ({ children }) => (
  <ButtonWithFramesStyled {...props}>{children ? children : "Button text"}</ButtonWithFramesStyled>
);

export default ButtonWithFrames;