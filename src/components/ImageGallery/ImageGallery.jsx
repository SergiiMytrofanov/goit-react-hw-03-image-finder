import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map((image, index) => (
        <li key={index}>
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
