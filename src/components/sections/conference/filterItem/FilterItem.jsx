import React from 'react';
import css from './FilterItem.module.css';

function FilterItem() {
  return (
    <div className={css.redPill} role="button">
      <h3 className={css.title}>title</h3>
      <p>date</p>
    </div>
  );
}

export default FilterItem;
