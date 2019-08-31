import React, { useState } from 'react';

import Navbar from '~components/Navbar';

import Button from '~components/Button';

import Checkbox from '~components/Checkbox';

import Slider from '~components/Slider';

import PillNameAndImage from '~components/PillCard/components/PillNameAndImage';

import styles from './styles.module.scss';

function Pills() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  return (
    <>
      <Navbar />
      <div className={`column ${styles.container}`}>
        <div className={`column center middle ${styles.cardContainer}`}>
          <div className={`column center m-bottom-6 ${styles.card}`}>
            <PillNameAndImage name="ATRIPLA" img="blah" />
            <div className={`column full-width m-bottom-4 ${styles.composition}`}>
              <h2 className={`m-bottom-2 ${styles.title}`}>Composición</h2>
              <p className={`m-bottom-1 ${styles.component}`}>Efavirenz 600 mg</p>
              <p className={`m-bottom-1 ${styles.component}`}>Emtricitabina 200 mg</p>
              <p className={`m-bottom-1 ${styles.component}`}>Tenofovir 300 mg</p>
            </div>
            <div className={`column full-width m-bottom-2 ${styles.quantity}`}>
              <h2 className={`m-bottom-4 ${styles.title}`}>Cantidad de pastillas</h2>
              <Slider className="m-bottom-4" />
              <p className={`m-bottom-1 ${styles.disclaimer}`}>
                Recordá pedir sólo la cantidad de pastillas que necesites para que siempre haya medicación
                disponible para otres.
              </p>
            </div>
            <div className={`row middle ${styles.termsAndConditions}`}>
              <Checkbox
                className="m-right-2"
                selected={acceptedTerms}
                // eslint-disable-next-line react/jsx-no-bind
                onSelect={() => setAcceptedTerms(!acceptedTerms)}
              />
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={styles.link}>
                Acepto términos y condiciones
              </a>
            </div>
          </div>
        </div>
        <Button className={`${styles.nextBtn} self-center recipient-btn full-width`}>Continuar</Button>
      </div>
    </>
  );
}

export default Pills;
