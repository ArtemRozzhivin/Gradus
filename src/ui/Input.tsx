import TextField from '@mui/material/TextField';
import React from 'react';

interface InputInterface {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string | null;
}

const Input: React.FC<InputInterface> = ({ value, onChange, className, placeholder }) => {
  return (
    <TextField
      fullWidth
      color='primary'
      label={placeholder}
      variant='outlined'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
