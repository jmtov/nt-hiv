import React from 'react';
import { bool, func, string } from 'prop-types';
import cn from 'classnames';

import { BUTTON_TYPES } from '~constants/buttons';

function Button({ className, children, disabled, onClick, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button disabled={disabled} tabIndex={0} className={cn(className)} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: string,
  disabled: bool,
  type: string,
  onClick: func
};

Button.defaultProps = {
  className: '',
  type: BUTTON_TYPES.BUTTON
};

export default Button;
