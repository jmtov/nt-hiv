import React from 'react';

import Button from '~components/Button';

import styles from './styles.module.scss';

function Welcome() {
  return (
    <div className={`column ${styles.container}`}>
      <div className="item-0 column m-bottom-8">
        <h1 className={styles.appTitle}>¡Hola!</h1>
        <h2 className={`${styles.subtitle} m-bottom-4`}>Queremos darte una mano ;)</h2>
        <h2 className={styles.subtitle}>¿Cómo podemos ayudarte hoy?</h2>
      </div>
      <hr className="item-0 separator full-width m-bottom-10" />
      <div className={`row wrap full-width ${styles.actions}`}>
        <Button className={`${styles.welcomeButton} donor-btn m-bottom-4 m-right-4`}>quiero donar</Button>
        <Button className={`${styles.welcomeButton} recipient-btn m-bottom-4 m-right-4`}>quiero pedir</Button>
      </div>
    </div>
  );
}

export default Welcome;
