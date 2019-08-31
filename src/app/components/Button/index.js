import React from 'react';
import { func, string } from 'prop-types';
import cn from 'classnames';

import { BUTTON_TYPES } from '~constants/buttons';

import styles from './styles.module.scss';

function Button({ className, children, onClick, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      tabIndex={0}
      className={cn('center middle', styles.button, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: string,
  type: string,
  onClick: func
};

Button.defaultProps = {
  className: '',
  type: BUTTON_TYPES.BUTTON
};

export default Button;
