import React, { useCallback } from 'react';
import { goBack } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Button from '~components/Button';

import backIcon from '~assets/icon-back.png';

import appLogo from '~assets/app-logo.png';

import styles from './styles.module.scss';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(goBack());
  }, []);

  return (
    <div className={`row full-width space-between ${styles.navbar}`}>
      <Button className={styles.navbarBtn} onClick={handleClick}>
        <img alt="back" src={backIcon} className={styles.icon} />
      </Button>
      <Button className={styles.navbarBtn}>
        <img alt="appLogo" src={appLogo} className={styles.icon} />
      </Button>
    </div>
  );
}

export default Navbar;
