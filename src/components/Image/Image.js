import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, fallback: customFallback = images.noImage, className, alt, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      onError={handleError}
      src={fallback || src}
      alt={alt}
      ref={ref}
      {...props}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
};
export default Image;
