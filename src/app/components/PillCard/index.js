import React, { Component } from 'react';
import { bool, func, number, string } from 'prop-types';
import cn from 'classnames';

import Button from '~components/Button';

import Checkbox from '~components/Checkbox';

import PillNameAndImage from './components/PillNameAndImage';
import styles from './styles.module.scss';

class PillCard extends Component {
  handleClick = () => this.props.onSelect(this.props);

  render() {
    const { name, mg, img, selected, disabled } = this.props;
    return (
      <Button
        disabled={disabled}
        className={cn('column center start', styles.card, { [styles.selected]: selected })}
        onClick={this.handleClick}
      >
        <PillNameAndImage name={name} img={img} />
        {mg && <span className={styles.mg}>{`${mg} mg`}</span>}
        <Checkbox className={styles.selectedIndicator} selected={selected} />
      </Button>
    );
  }
}

PillCard.propTypes = {
  disabled: bool,
  img: string,
  mg: number,
  name: string,
  selected: bool,
  onSelect: func
};

export default PillCard;
