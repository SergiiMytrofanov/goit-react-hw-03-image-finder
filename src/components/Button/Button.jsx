import React from 'react';

const Button = ({ onClick, images, isLoading }) => {
  return images.length > 0 && !isLoading ? (
    <button className="Button" type="button" onClick={onClick}>
      Load More
    </button>
  ) : null;
};

export default Button;
