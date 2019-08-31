import React from 'react';
import { func, string } from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

function Slider({ className, onClick }) {
  return <input className={cn(styles.slider, className)} type="range" onChange={onClick} />;
}

Slider.propTypes = {
  className: string,
  onClick: func
};

Slider.defaultProps = {
  className: ''
};

export default Slider;
