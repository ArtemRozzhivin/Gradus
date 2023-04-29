import React from 'react';
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface ButtonInterface {
  onClick?: () => void;
  className?: string;
  children: any;
  primary?: boolean;
  outlined?: boolean;
}

const Button: React.FC<ButtonInterface> = ({ onClick, className, children, primary, outlined }) => {
  const theme = useTheme();

  return (
    <MuiButton color="primary" variant="contained" onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
