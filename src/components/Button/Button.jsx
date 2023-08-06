import React from 'react';

const Button = ({ onClick, showButton }) => {
  return showButton ? (
    <button className="Button" type="button" onClick={onClick}>
      Load More
    </button>
  ) : null;
};

export default Button;
