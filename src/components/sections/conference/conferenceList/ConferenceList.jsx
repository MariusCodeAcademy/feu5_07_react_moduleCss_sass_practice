import React from 'react';
import CItem from './CItem';
import css from './ConferenceList.module.css';

function ConferenceList() {
  const sampleArr = [1, 2, 3, 4];

  return (
    <div className={css.wrap}>
      {/* map over sampleArr and generate Citems */}
      <CItem />
      <CItem />
      <CItem />
    </div>
  );
}

export default ConferenceList;
