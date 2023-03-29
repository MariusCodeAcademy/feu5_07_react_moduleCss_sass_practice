import React from 'react';
import Grid from '../../ui/grid/Grid';
import SingleEvent from './SingleEvent';

function EventList({ list }) {
  return (
    <Grid ul>
      {list.map((eObj) => (
        <SingleEvent key={eObj.title} item={eObj} />
      ))}
    </Grid>
  );
}

export default EventList;
