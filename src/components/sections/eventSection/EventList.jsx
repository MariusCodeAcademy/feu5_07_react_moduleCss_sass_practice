import React from 'react';
import Grid from '../../ui/grid/Grid';
import SingleEvent from './SingleEvent';

function EventList(props) {
  return (
    <Grid ul>
      {props.list.map((eObj) => (
        <SingleEvent key={eObj.title} item={eObj} />
      ))}
    </Grid>
  );
}

export default EventList;
