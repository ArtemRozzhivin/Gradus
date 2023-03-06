import clsx from 'clsx';
import React from 'react';

interface ButtonInterface {
  onClick?: () => void;
  className?: string;
  children: any;
  primary?: boolean;
  red?: boolean;
  onlyBorder?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  onClick,
  className,
  children,
  primary,
  red,
  onlyBorder,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-block',
        {
          'bg-second p-2 text-xs rounded-lg': primary,
          'bg-red-500 text-white p-2 text-xs rounded-lg': red,
          'bg-transparent border border-solid border-second text-second': onlyBorder,
        },
        className,
      )}>
      {children}
    </button>
  );
};

export default Button;
