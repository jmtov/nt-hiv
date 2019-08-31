import React from 'react';

import Button from '~components/Button';

import backIcon from '../../assets/icon-back.png';

import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={`full-width ${styles.navbar}`}>
      <Button className={styles.backBtn}>
        <img alt="back" src={backIcon} className={styles.icon} />
      </Button>
    </div>
  );
}

export default Navbar;
