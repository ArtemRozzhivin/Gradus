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
      <div className="p-3">
        <div className="flex justify-end mb-2">
          <Button onlyBorder onClick={onClose}>
            Close
          </Button>
        </div>

        <div>{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
