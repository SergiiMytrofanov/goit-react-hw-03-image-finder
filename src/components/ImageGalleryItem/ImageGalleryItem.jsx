import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, onItemClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
        onClick={() => onItemClick(webformatURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
