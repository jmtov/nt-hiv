import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import searchIcon from '../../assets/icon-search.png';

import styles from './styles.module.scss';

function SearchBar({ className, placeholder }) {
  return (
    <div className={cn('row middle', styles.inputContainer, className)}>
      <div className={styles.iconContainer}>
        <img src={searchIcon} className={styles.icon} alt={searchIcon} />
      </div>
      <input className={`column center full-width ${styles.input}`} placeholder={placeholder} />
    </div>
  );
}

SearchBar.propTypes = {
  className: string,
  placeholder: string
};

export default SearchBar;
