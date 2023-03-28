import React from 'react';
import Grid from '../../ui/grid/Grid';
import css from './CountDownSecion.module.css';
import SingleCountDown from './SingleCountDown';

function CountDownSecion() {
  return (
    <section className={`container ${css.section}`}>
      <h2 className={css.title}>
        Count Every Second Until the <span>Event</span>
      </h2>
      <Grid cols={4}>
        <SingleCountDown />
        <SingleCountDown />
        <SingleCountDown />
        <SingleCountDown />
      </Grid>
    </section>
  );
}

export default CountDownSecion;
