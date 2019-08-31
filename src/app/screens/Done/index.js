import React from 'react';

import Button from '~components/Button';

import styles from './styles.module.scss';

function Done() {
  return (
    <>
      <div className={`column center ${styles.container}`}>
        <div className={`column m-bottom-8 ${styles.texts}`}>
          <h1 className={`m-bottom-4 ${styles.title}`}>¡Todo listo!</h1>
          <p className={`m-bottom-4 ${styles.text}`}>La fundación Hablemos de HIV te está esperando.</p>
          <p className={`m-bottom-4 ${styles.text}`}>
            Recordá que solo podemos reservar la medicación que pediste durante las próximas 72 hs.
          </p>
          <h2 className={`m-bottom-3 ${styles.subtitle}`}>¿Qué tengo que llevar?</h2>
          <p className={styles.text}>Solo necesitás presentar tu DNI.</p>
        </div>
        <Button className={`donor-btn ${styles.doneBtn}`}>Finalizar</Button>
      </div>
    </>
  );
}

export default Done;
