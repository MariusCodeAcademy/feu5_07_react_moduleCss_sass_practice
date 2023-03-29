import React from 'react';
import Button from '../../ui/button/Button';

function SingleEvent({ item }) {
  // Prideti <Icon /> componenta
  // sustilizuoti

  return (
    <li>
      <p>
        {/* <Icon name={item.icon} /> */}
        <i className={`fa fa-${item.icon}`} aria-hidden="true" />
      </p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Button>{item.action}</Button>
    </li>
  );
}

export default SingleEvent;
