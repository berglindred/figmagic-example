import styled from 'styled-components';

import MyDesignSystemButtonCss from './MyDesignSystemButtonCss';

interface MyDesignSystemButtonProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const MyDesignSystemButtonStyled = styled.button<MyDesignSystemButtonProps>`
  ${MyDesignSystemButtonCss};
`;

export default MyDesignSystemButtonStyled;