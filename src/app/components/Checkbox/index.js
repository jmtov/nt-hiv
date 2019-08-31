import React from 'react';
import { bool, func, string } from 'prop-types';
import cn from 'classnames';

import Button from '~components/Button';

import styles from './styles.module.scss';

function Checkbox({ className, selected, onSelect }) {
  return (
    <Button
      onClick={onSelect}
      className={cn('row middle center', styles.checkbox, className, { [styles.selected]: selected })}
    />
  );
}

Checkbox.propTypes = {
  className: string,
  selected: bool,
  onSelect: func
};

export default Checkbox;
