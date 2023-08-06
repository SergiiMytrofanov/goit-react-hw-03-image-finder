import React from 'react';

const ImageGalleryItem = ({ webformatURL, onItemClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={onItemClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
