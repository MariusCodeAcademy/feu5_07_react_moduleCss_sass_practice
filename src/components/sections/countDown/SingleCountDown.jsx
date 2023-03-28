import React from 'react';
import css from './SingleCountDown.module.css';

function SingleCountDown() {
  // i value paragrafa paduoti reikse is props
  // value ir h3 elementams uzdeti klase pagal props
  // circle elementui uzdeti klase pagal props

  return (
    <div className={css.circle}>
      <p className={css.value}>0</p>
      <h3 className={css.time}>Days</h3>
    </div>
  );
}

export default SingleCountDown;
