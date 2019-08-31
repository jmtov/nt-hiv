import React from 'react';

import Button from '~components/Button';

import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={`full-width ${styles.navbar}`}>
      <Button>Back</Button>
    </div>
  );
}

export default Navbar;
