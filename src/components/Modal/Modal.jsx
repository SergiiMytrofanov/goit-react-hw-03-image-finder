import React, { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const modalInstance = basicLightbox.create(`
      <div class="modal">
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
