import React from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';

const Counter = ({ currentIndexItem, itemsLength }) => (
  <p className={style.counter}>
    {currentIndexItem}/{itemsLength}
  </p>
);

Counter.propTypes = {
  currentIndexItem: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
};

export default Counter;
