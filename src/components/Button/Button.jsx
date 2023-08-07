import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { onClick, images, isLoading } = this.props;
    return images.length > 0 && !isLoading ? (
      <button className={styles.Button} type="button" onClick={onClick}>
        Load More
      </button>
    ) : null;
  }
}

export default Button;
