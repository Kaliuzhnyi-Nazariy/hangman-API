import React from 'react';
import { ButtonStyled } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    );
}

export default Button;
