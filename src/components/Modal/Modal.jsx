import React, { useState, useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};

export default Modal;
