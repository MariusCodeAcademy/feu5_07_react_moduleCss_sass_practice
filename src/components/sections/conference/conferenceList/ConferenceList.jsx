import React from 'react';
import CItem from './CItem';
import css from './ConferenceList.module.css';

function ConferenceList({ list }) {
  return (
    <div className={css.wrap}>
      {list.length === 0 && <h2>Nera eventu, go outside</h2>}
      {/* map over sampleArr and generate Citems */}
      {list.length > 0 &&
        list.map((cObj) => <CItem key={cObj.title} item={cObj} />)}
    </div>
  );
}

export default ConferenceList;
