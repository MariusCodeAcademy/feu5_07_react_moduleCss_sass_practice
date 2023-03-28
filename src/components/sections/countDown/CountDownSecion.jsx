import React from 'react';
import Grid from '../../ui/grid/Grid';
import css from './CountDownSecion.module.css';

function CountDownSecion() {
  return (
    <section className={`container ${css.section}`}>
      <h2>Title</h2>
      <Grid cols={4}>
        <h2>item</h2>
        <h2>item</h2>
        <h2>item</h2>
        <h2>item</h2>
      </Grid>
    </section>
  );
}

export default CountDownSecion;
