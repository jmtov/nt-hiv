import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Button from '~components/Button';

import styles from './styles.module.scss';

import Routes from 'constants/routes';

function Welcome() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(push(Routes.PILLS));
  }, []);

  return (
    <div className={`column ${styles.container}`}>
      <div className="column m-bottom-8">
        <h1 className={`m-bottom-3 ${styles.appTitle}`}>¡Hola!</h1>
        <h2 className={`m-bottom-3 ${styles.subtitle}`}>Queremos darte una mano ;)</h2>
        <h2 className={styles.subtitle}>¿Cómo podemos ayudarte hoy?</h2>
      </div>
      <hr className="separator full-width m-bottom-10" />
      <div className={`row wrap full-width ${styles.actions}`}>
        <Button className={`${styles.welcomeButton} donor-btn m-bottom-4 m-right-4`} onClick={handleClick}>
          quiero donar
        </Button>
        <Button
          className={`${styles.welcomeButton} recipient-btn m-bottom-4 m-right-4`}
          onClick={handleClick}
        >
          quiero pedir
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
