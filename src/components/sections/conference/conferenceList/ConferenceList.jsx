import React from 'react';
import CItem from './CItem';
import css from './ConferenceList.module.css';

function ConferenceList({ list }) {
  const sampleArr = [1, 2, 3, 4];

  return (
    <div className={css.wrap}>
      {/* map over sampleArr and generate Citems */}
      {sampleArr.map((sk) => (
        <CItem key={sk} />
      ))}
    </div>
  );
}

export default ConferenceList;
