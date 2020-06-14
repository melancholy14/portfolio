import React from 'react';
import { MdClose } from 'react-icons/md';

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ show, onClose, children }: ModalProps) {
  return (
    <div
      className={`${
        show ? 'visible' : 'invisible'
      } transition-visibility duration-75 fixed w-full h-full z-50 left-0 top-0 w-full bg-opacity-25 bg-black`}
    >
      <div
        className={`bg-white text-gray-800 ${
          show ? 'w-5/12' : 'w-0'
        } transition-width duration-75 p-12 h-full rounded-tr-3xl rounded-br-3xl`}
      >
        <div className="flex justify-end">
          <button type="button" onClick={onClose}>
            <MdClose size="2rem" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
