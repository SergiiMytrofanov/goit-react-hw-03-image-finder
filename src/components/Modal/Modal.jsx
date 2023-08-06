import React, { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const modalInstance = basicLightbox.create(`
      <div class=${styles.Modal}>
        <img src="${largeImageURL}" alt="Large Image" />
      </div>
    `);

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        modalInstance.close();
      }
    };

    modalInstance.show();

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [largeImageURL]);

  return null;
};

export default Modal;
