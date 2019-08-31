import React, { Component } from 'react';
import { func, string } from 'prop-types';
import cn from 'classnames';

import Button from '~components/Button';

import Checkbox from '~components/Checkbox';

import styles from './styles.module.scss';

class PillCard extends Component {
  state = {
    selected: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
    this.props.onSelect?.(this.props);
  };

  render() {
    const { address, name, schedule } = this.props;
    const { selected } = this.state;
    return (
      <Button
        className={cn('column center start', styles.card, { [styles.selected]: selected })}
        onClick={this.handleClick}
      >
        <h2 className={`${styles.name}`}>{name}</h2>
        <hr className={`separator ${styles.separator} m-bottom-2`} />
        <div className={`column m-bottom-2 full-width start ${styles.dataWrapper}`}>
          <h3 className={`m-bottom-1 ${styles.title}`}>Dirección:</h3>
          <p className={`${styles.content}`}>{address}</p>
        </div>
        <div className={`column m-bottom-2 full-width start ${styles.dataWrapper}`}>
          <h3 className={`m-bottom-1 ${styles.title}`}>Horarios:</h3>
          <p className={`${styles.content}`}>{schedule}</p>
        </div>
        <Checkbox className={styles.selectedIndicator} selected={selected} />
      </Button>
    );
  }
}

PillCard.propTypes = {
  address: string,
  name: string,
  schedule: string,
  onSelect: func
};

export default PillCard;
