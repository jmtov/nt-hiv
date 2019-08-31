import React, { Component } from 'react';
import { func, number, string } from 'prop-types';
import cn from 'classnames';

import Button from '~components/Button';

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
    const { name, mg, img } = this.props;
    const { selected } = this.state;
    return (
      <Button
        className={cn('column', styles.card, { [styles.selected]: selected })}
        onClick={this.handleClick}
      >
        <h2 className={`full-width ${styles.name}`}>{name}</h2>
        <hr className={`separator full-width ${styles.separator} m-bottom-2`} />
        <img alt={name} src={img} className={`m-bottom-2 ${styles.img} full-width`} />
        <span className={styles.mg}>{`${mg} mg`}</span>
        <div className={styles.selectedIndicator} />
      </Button>
    );
  }
}

PillCard.propTypes = {
  img: string,
  mg: number,
  name: string,
  onSelect: func
};

export default PillCard;
