import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';

interface InputInterface {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputInterface> = ({ value, onChange, className, placeholder }) => {
  const theme = useTheme();
  return (
    <TextField
      fullWidth
      color="primary"
      label={placeholder}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
