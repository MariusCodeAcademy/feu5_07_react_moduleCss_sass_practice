import React from 'react';
import CItem from './CItem';
import css from './ConferenceList.module.css';

function ConferenceList({ list }) {
  return (
    <div className={css.wrap}>
      {/* map over sampleArr and generate Citems */}
      {list.map((cObj) => (
        <CItem key={cObj.title} item={cObj} />
      ))}
    </div>
  );
}

export default ConferenceList;
