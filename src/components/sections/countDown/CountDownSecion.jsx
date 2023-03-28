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
        <SingleCountDown time='Days' value={5} circle={'violet'} />
        <SingleCountDown time='Hours' value={5} circle={'sky'} />
        <SingleCountDown time='Minutes' value={5} circle={'blue'} />
        <SingleCountDown time='Seconds' value={5} circle={'green'} />
      </Grid>
    </section>
  );
}

export default CountDownSecion;
