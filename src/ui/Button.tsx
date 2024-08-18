import React from 'react';
import MuiButton from '@mui/material/Button';

interface ButtonInterface {
  id?: string;
  onClick?: () => void;
  className?: string;
  children: any;
  color?: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
}

const Button: React.FC<ButtonInterface> = ({
  id,
  onClick,
  className,
  children,
  color = 'primary',
  variant = 'outlined',
}) => {
  return (
    <MuiButton id={id} fullWidth color={color} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
