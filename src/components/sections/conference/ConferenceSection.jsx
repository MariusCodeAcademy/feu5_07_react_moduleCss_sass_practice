import React from 'react';
import Grid from '../../ui/grid/Grid';
import SectionTitle from '../../ui/title/SectionTitle';
import css from './ConferenceSection.module.css';
import FilterItem from './filterItem/FilterItem';

function ConferenceSection() {
  return (
    <section className={css.section}>
      <div className="container">
        <SectionTitle title="Schedule" subtitle="Conference Schedule" />
        <Grid className={css.control}>
          <FilterItem title="Day 1" date="2020-02-02" />
        </Grid>
      </div>
    </section>
  );
}

export default ConferenceSection;
