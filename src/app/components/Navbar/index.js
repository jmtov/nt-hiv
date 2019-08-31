import React, { useCallback } from 'react';
import { goBack } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Button from '~components/Button';

import backIcon from '../../assets/icon-back.png';

import styles from './styles.module.scss';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(goBack());
  }, []);

  return (
    <div className={`full-width ${styles.navbar}`}>
      <Button className={styles.backBtn} onClick={handleClick}>
        <img alt="back" src={backIcon} className={styles.icon} />
      </Button>
    </div>
  );
}

export default Navbar;
