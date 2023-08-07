
import React from 'react';
import * as basicLightbox from 'basiclightbox';
import styles from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    this.modalInstance = basicLightbox.create(`
      <div class=${styles.Overlay}>
        <div class=${styles.Modal}>
          <img src="${this.props.largeImageURL}" alt="Large Image" />
        </div>
      </div>
    `);

    this.modalInstance.show();
    window.addEventListener('keydown', this.handleEscapeKey);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.modalInstance.close();
    window.removeEventListener('keydown', this.handleEscapeKey);
    document.body.style.overflow = 'auto';
    this.props.onClose(); 
  }

  handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      this.modalInstance.close();
    }
  };

  render() {
    return null;
  }
}

export default Modal;
