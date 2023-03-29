import React from 'react';
import SectionTitle from '../../ui/title/SectionTitle';
import css from './ConferenceSection.module.css';

function ConferenceSection() {
  return (
    <section className={css.section}>
      <SectionTitle title="Schedule" subtitle="Conference Schedule" />
    </section>
  );
}

export default ConferenceSection;
