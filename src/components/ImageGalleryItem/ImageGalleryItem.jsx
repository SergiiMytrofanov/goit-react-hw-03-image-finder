import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className="gallery-item">
      <img src={image.src} alt={image.alt} />
    </li>
  );
};

export default ImageGalleryItem;
