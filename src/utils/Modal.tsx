// utils/Modal.tsx

import React from 'react';
import '../css/Modal.css';

interface ModalProps {
  content: React.ReactNode;
  closeDisabled?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, closeDisabled = false, onClose }) => {
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {!closeDisabled && (
          <button className="modal-close-button" onClick={onClose}>
            X
          </button>
        )}
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
