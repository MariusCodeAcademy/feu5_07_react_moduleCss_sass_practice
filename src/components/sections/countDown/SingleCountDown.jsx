import React from 'react';
import css from './SingleCountDown.module.css';

function SingleCountDown({ circle, value, time }) {
  // i value paragrafa paduoti reikse is props
  // value ir h3 elementams uzdeti klase pagal props
  // circle elementui uzdeti klase pagal props
  // let colorClass = '';
  // switch (props.circle) {
  //   case 'violet':
  //     colorClass = css.violet;
  //     break;
  //   case 'sky':
  //     colorClass = css.sky;
  //     break;
  //   case 'blue':
  //     colorClass = css.blue;
  //     break;
  //   case 'green':
  //     colorClass = css.green;
  //     break;
  //   default:
  //     colorClass = '';
  // }

  return (
    <div className={`${css.circle} ${css[circle]}`}>
      <p className={css.value}>{value}</p>
      <h3 className={css.time}>{time}</h3>
    </div>
  );
}

export default SingleCountDown;
