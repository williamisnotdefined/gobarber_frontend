import React, { ButtonHTMLAttributes } from 'react';

import { Button as ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ButtonStyled type="button" {...rest}>
    {children}
  </ButtonStyled>
);

export default Button;
