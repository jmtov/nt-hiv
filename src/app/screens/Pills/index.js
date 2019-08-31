import React from 'react';

import Button from '~components/Button';

import Navbar from '~components/Navbar';

import PillCard from '~components/PillCard';

import SearchBar from '~components/SearchBar';

import { pills } from './constants';
import styles from './styles.module.scss';

function Pills() {
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
        <Button className={`${styles.nextBtn} self-center recipient-btn full-width`}>Continuar</Button>
      </div>
    </>
  );
}

export default Pills;
