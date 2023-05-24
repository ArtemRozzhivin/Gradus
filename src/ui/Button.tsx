import React from 'react';
import MuiButton from '@mui/material/Button';

interface ButtonInterface {
  onClick?: () => void;
  className?: string;
  children: any;
  primary?: boolean;
  outlined?: boolean;
}

const Button: React.FC<ButtonInterface> = ({ onClick, className, children, primary, outlined }) => {
  return (
    <MuiButton fullWidth color="primary" variant="contained" onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
