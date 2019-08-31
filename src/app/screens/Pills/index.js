import React, { useCallback, useEffect, useState } from 'react';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as pillsActions } from '~redux/Pills/actions';

import Button from '~components/Button';

import Navbar from '~components/Navbar';

import PillCard from '~components/PillCard';

import SearchBar from '~components/SearchBar';

import Routes from '~constants/routes';

import styles from './styles.module.scss';

function Pills() {
  const dispatch = useDispatch();
  const [currentPill, setCurrentPill] = useState(null);
  const { pills } = useSelector(state => state.pills);

  useEffect(() => {
    dispatch(pillsActions.getPills());
  }, []);

  const handleNext = useCallback(() => {
    if (currentPill) {
      dispatch(pillsActions.setCurrentPill(currentPill));
      dispatch(push(Routes.PILL_DETAIL));
    }
  }, [currentPill]);

  const handleChange = useCallback(event => {
    dispatch(pillsActions.getPills(event.target.value));
  }, []);

  const handleSelect = useCallback(pill => {
    if (currentPill?.name === pill?.name) {
      setCurrentPill(null);
    } else {
      setCurrentPill(pill);
    }
  });

  return (
    <>
      <Navbar />
      <div className={`column ${styles.container}`}>
        <SearchBar
          className="m-bottom-6"
          placeholder="¿Qué medicamento estás buscando?"
          onChange={handleChange}
        />
        <h3 className={`m-bottom-6 ${styles.groupTitle}`}>Medicamentos más utilizados</h3>
        <div className={`m-bottom-6 ${styles.pills}`}>
          {!!pills.length &&
            pills.map(pill => (
              <PillCard
                key={pill}
                id={pill}
                name={pill.name}
                mg={pill.mg}
                img={pill.image_url}
                onSelect={handleSelect}
                disabled={currentPill?.name && currentPill.name !== pill.name}
                selected={pill.name === currentPill?.name}
              />
            ))}
        </div>
        <Button
          className={`${styles.nextBtn} self-center recipient-btn full-width`}
          disabled={!currentPill}
          onClick={handleNext}
        >
          Continuar
        </Button>
      </div>
    </>
  );
}

export default Pills;
