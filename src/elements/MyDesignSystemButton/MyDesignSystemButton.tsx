import * as React from 'react';

import MyDesignSystemButtonStyled from './MyDesignSystemButtonStyled';

interface MyDesignSystemButtonProps {
 children: any;
  [propName: string]: {};
}

const MyDesignSystemButton: React.FC<MyDesignSystemButtonProps> = ({ children }) => (
  <MyDesignSystemButtonStyled {...props}>{children ? children : "Button text"}</MyDesignSystemButtonStyled>
);

export default MyDesignSystemButton;