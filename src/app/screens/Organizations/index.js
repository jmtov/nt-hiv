import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Navbar from '~components/Navbar';

import OrganizationCard from '~components/OrganizationCard';

import Button from '~components/Button';

import SearchBar from '~components/SearchBar';

import Routes from '~constants/routes';

import { organizations } from './constants';
import styles from './styles.module.scss';

function Organizations() {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(push(Routes.LAST_STEP));
  }, []);

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
        <Button className={`${styles.nextBtn} self-center recipient-btn full-width`} onClick={handleClick}>
          Continuar
        </Button>
      </div>
    </>
  );
}

export default Organizations;
