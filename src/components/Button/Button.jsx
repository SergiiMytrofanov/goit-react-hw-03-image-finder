import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, images, isLoading }) => {
  return images.length > 0 && !isLoading ? (
    <button className={styles.Button} type="button" onClick={onClick}>
      Load More
    </button>
  ) : null;
};

export default Button;
