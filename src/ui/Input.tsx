import clsx from 'clsx';
import React from 'react';

interface InputInterface {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputInterface> = ({ value, onChange, className, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx('w-full text-lg p-2 rounded-md text-black', {}, className)}
      placeholder={placeholder}
    />
  );
};

export default Input;
