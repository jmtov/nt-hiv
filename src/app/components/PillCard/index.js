import React, { Component } from 'react';
import { func, number, string } from 'prop-types';
import cn from 'classnames';

import Button from '~components/Button';

import Checkbox from '~components/Checkbox';

import PillNameAndImage from './components/PillNameAndImage';
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
  img: string,
  mg: number,
  name: string,
  onSelect: func
};

export default PillCard;
