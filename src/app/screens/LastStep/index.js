import React from 'react';

import Navbar from '~components/Navbar';

import Button from '~components/Button';

import styles from './styles.module.scss';

function PillDetail() {
  return (
    <>
      <Navbar />
      <div className={`column center ${styles.container}`}>
        <div className={`column m-bottom-8 ${styles.texts}`}>
          <h1 className={`m-bottom-4 ${styles.title}`}>¡Último paso!</h1>
          <p className={`m-bottom-4 ${styles.text}`}>
            Lo único que necesitamos para finalizar es que escanees el frente de tu DNI.
          </p>
          <h2 className={`m-bottom-3 italic ${styles.subtitle}`}>¿Para qué necesitan mi DNI?</h2>
          <p className={styles.text}>
            Para asegurarnos de que el medicamento que pediste sea retirado y esté reservado solo para vos.
          </p>
        </div>
        <h2 className={`m-bottom-4 ${styles.subtitle}`}>Escanear acá</h2>
        <Button className={`m-bottom-10 ${styles.scanBtn}`}>Scan Icon Here</Button>
      </div>
    </>
  );
}

export default PillDetail;
