import React from 'react';
import css from './SingleCountDown.module.css';

function SingleCountDown() {
  return (
    <div className={css.circle}>
      <p className={css.value}>0</p>
      <h3 className={css.time}>Days</h3>
    </div>
  );
}

export default SingleCountDown;
