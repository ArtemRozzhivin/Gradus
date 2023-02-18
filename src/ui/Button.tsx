import clsx from 'clsx';
import React from 'react';

interface ButtonInterface {
  onClick: () => void;
  className?: string;
  children: string;
}

const Button: React.FC<ButtonInterface> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={clsx('bg-second p-2 rounded-lg', {}, className)}>
      {children}
    </button>
  );
};

export default Button;
