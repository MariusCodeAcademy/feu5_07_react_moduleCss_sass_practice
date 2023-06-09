/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import css from './FilterItem.module.css';

// 1. istrinti state
// 2, mygtuko paspaudimas turi iskviesti gauta is props fn
// 3. activeClass priklausys nuo props

function FilterItem({ title, date, isActive, onToggle }) {
  const activeClass = isActive ? css.active : '';
  return (
    <div
      onClick={onToggle}
      className={[css.redPill, activeClass].join(' ')}
      role="button"
    >
      <h3 className={css.title}>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

export default FilterItem;
