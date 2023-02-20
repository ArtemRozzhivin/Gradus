import clsx from 'clsx';
import React from 'react';

interface ButtonInterface {
  onClick: () => void;
  className?: string;
  children: any;
  onlyBorder?: boolean;
}

const Button: React.FC<ButtonInterface> = ({ onClick, className, children, onlyBorder }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-second p-2 rounded-lg inline-block',
        {
          'bg-transparent border border-solid border-second text-second': onlyBorder,
        },
        className,
      )}>
      {children}
    </button>
  );
};

export default Button;
