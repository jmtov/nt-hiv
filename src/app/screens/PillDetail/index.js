import React, { useState, useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '~components/Navbar';

import Button from '~components/Button';

import Checkbox from '~components/Checkbox';

import Slider from '~components/Slider';

import Routes from '~constants/routes';

import PillNameAndImage from '~components/PillCard/components/PillNameAndImage';

import styles from './styles.module.scss';

function Pills() {
  const dispatch = useDispatch();
  const { currentPill = {} } = useSelector(state => state.pills);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const handleClick = useCallback(() => {
    dispatch(push(Routes.ORGANIZATIONS));
  }, []);

  return (
    <>
      <Navbar />
      <div className={`column ${styles.container}`}>
        <div className={`column center middle ${styles.cardContainer}`}>
          <div className={`column center m-bottom-6 ${styles.card}`}>
            <PillNameAndImage name={currentPill.name} img={currentPill.img} imgClassName={styles.img} />
            <div className={`column full-width m-bottom-4 ${styles.composition}`}>
              <h2 className={`m-bottom-2 ${styles.title}`}>Composición</h2>
              {currentPill.id.drugs.map(component => (
                <p key={component.name} className={`m-bottom-1 ${styles.component}`}>
                  {`${component.name} ${component.mg} mg`}
                </p>
              ))}
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
        <Button className={`${styles.nextBtn} self-center recipient-btn full-width`} onClick={handleClick}>
          Continuar
        </Button>
      </div>
    </>
  );
}

export default Pills;
