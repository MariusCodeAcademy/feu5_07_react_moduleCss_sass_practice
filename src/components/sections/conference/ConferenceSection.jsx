import React from 'react';
import SectionTitle from '../../ui/title/SectionTitle';
import css from './ConferenceSection.module.css';
import FilterItem from './filterItem/FilterItem';

function ConferenceSection() {
  return (
    <section className={css.section}>
      <SectionTitle title="Schedule" subtitle="Conference Schedule" />
      <div className="control">
        <FilterItem title="Day 1" date="2020-02-02" />
      </div>
    </section>
  );
}

export default ConferenceSection;
