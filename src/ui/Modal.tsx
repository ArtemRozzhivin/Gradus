import React from 'react';
import { Dialog } from '@mui/material';
import Button from './Button';

interface ModalInterface {
  isOpen: boolean;
  children: any;
  className?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalInterface> = ({ isOpen, children, onClose, className }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className='relative flex justify-center items-center py-14 px-5 min-w-[340px] min-h-[200px]'>
        <div className='absolute right-2 top-2 flex justify-end mb-2'>
          <Button onClick={onClose}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </Button>
        </div>

        <div className='h-full flex-auto flex justify-center items-center'>{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
