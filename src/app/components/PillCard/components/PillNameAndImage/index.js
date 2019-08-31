import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function PillNameAndImage({ name, img, imgClassName }) {
  return (
    <>
      <h2 className={`${styles.name}`}>{name}</h2>
      <hr className={`separator ${styles.separator} m-bottom-2`} />
      <img alt={name} src={img} className={`m-bottom-2 ${styles.img} ${imgClassName}`} />
    </>
  );
}

PillNameAndImage.propTypes = {
  img: string,
  imgClassName: string,
  name: string
};

export default PillNameAndImage;
