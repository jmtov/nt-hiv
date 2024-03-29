import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Button from '~components/Button';

import Routes from '~constants/routes';

import styles from './styles.module.scss';

function Done() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(push(Routes.HOME));
  }, []);

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
        <Button className={`donor-btn ${styles.doneBtn}`} onClick={handleClick}>
          Finalizar
        </Button>
      </div>
    </>
  );
}

export default Done;
