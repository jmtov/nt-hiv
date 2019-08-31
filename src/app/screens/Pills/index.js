import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Button from '~components/Button';

import Navbar from '~components/Navbar';

import PillCard from '~components/PillCard';

import SearchBar from '~components/SearchBar';

import Routes from '~constants/routes';

import { pills } from './constants';
import styles from './styles.module.scss';

function Pills() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(push(Routes.PILL_DETAIL));
  }, []);

  return (
    <>
      <Navbar />
      <div className={`column ${styles.container}`}>
        <SearchBar className="m-bottom-6" placeholder="¿Qué medicamento estás buscando?" />
        <h3 className={`m-bottom-6 ${styles.groupTitle}`}>Medicamentos más utilizados</h3>
        <div className={`m-bottom-6 ${styles.pills}`}>
          {pills.map(pill => (
            <PillCard key={pill.id} id={pill.id} name={pill.name} mg={pill.mg} img={pill.img} />
          ))}
        </div>
        <Button className={`${styles.nextBtn} self-center recipient-btn full-width`} onClick={handleClick}>
          Continuar
        </Button>
      </div>
    </>
  );
}

export default Pills;
