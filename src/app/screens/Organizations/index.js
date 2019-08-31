import React from 'react';

import Navbar from '~components/Navbar';

import OrganizationCard from '~components/OrganizationCard';

import Button from '~components/Button';

import SearchBar from '~components/SearchBar';

import { organizations } from './constants';
import styles from './styles.module.scss';

function Organizations() {
  return (
    <>
      <Navbar />
      <div className={`column ${styles.container}`}>
        <SearchBar className="m-bottom-6" placeholder="¿En qué fundación querés retirar?" />
        <h3 className={`m-bottom-6 ${styles.groupTitle}`}>Fundaciones amigas</h3>
        <div className={`m-bottom-6 ${styles.organizations}`}>
          {organizations.map(organization => (
            <OrganizationCard
              key={organization.id}
              id={organization.id}
              address={organization.address}
              name={organization.name}
              schedule={organization.schedule}
            />
          ))}
        </div>
        <Button className={`${styles.nextBtn} self-center recipient-btn full-width`}>Continuar</Button>
      </div>
    </>
  );
}

export default Organizations;
