import React from 'react';
import { Dialog } from '@mui/material';
import Button from './Button';

interface ModalInterface {
  isOpen: boolean;
  children: any;
  onClose: () => void;
}

const Modal: React.FC<ModalInterface> = ({ isOpen, children, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="flex justify-end">
        <Button className="" onlyBorder onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="p-5">{children}</div>
    </Dialog>
  );
};

export default Modal;
