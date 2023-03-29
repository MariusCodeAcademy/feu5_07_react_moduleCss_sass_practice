import React, { useState } from 'react';
import Grid from '../../ui/grid/Grid';
import SectionTitle from '../../ui/title/SectionTitle';
import ConferenceList from './conferenceList/ConferenceList';
import css from './ConferenceSection.module.css';
import FilterItem from './filterItem/FilterItem';

const initFilters = [
  {
    id: 1,
    title: 'Day 1',
    date: '2020-02-02',
    isActive: true,
  },
  {
    id: 2,
    title: 'Day 2',
    date: '2020-02-05',
    isActive: false,
  },
  {
    id: 3,
    title: 'Day 3',
    date: '2020-02-06',
    isActive: false,
  },
];

const initConferences = [
  {
    time: '10:30 - 12:30 AM',
    room: 'Room 2',
    title: 'Opening Conference',
    speaker: 'Hanson Deck',
    img: 'https://picsum.photos/200/300',
    date: '2020-02-02',
  },
  {
    time: '10:30 - 12:30 AM',
    room: 'Room 2',
    title: 'Digital World Event Information',
    speaker: 'Hanson Deck',
    img: 'https://picsum.photos/200/300',
    date: '2020-02-02',
  },
  {
    time: '10:30 - 12:30 AM',
    room: 'Room 2',
    title: 'Digital Marketing Theory',
    speaker: 'Hanson Deck',
    img: 'https://picsum.photos/200/300',
    date: '2020-02-05',
  },
];

function ConferenceSection() {
  const [filters, setFilters] = useState(initFilters);
  // console.log('initFilters ===', initFilters);

  function handleToggleFilter(idOfToggleEl) {
    // console.log('handleToggleFilter ===', idOfToggleEl);
    // pakeisti to el ant kurio paspausta isActive i priesinga
    setFilters((prevFilter) =>
      prevFilter.map((fObj) => {
        // el ant kurio paspausta
        if (fObj.id === idOfToggleEl) {
          // isActive i priesinga arba true
          return { ...fObj, isActive: true };
        }
        // visu kitu i false
        return { ...fObj, isActive: false };
      }),
    );
  }

  return (
    <section className={css.section}>
      <div className="container">
        <SectionTitle title="Schedule" subtitle="Conference Schedule" />
        <Grid className={css.control}>
          {filters.map((fObj) => (
            <FilterItem
              key={fObj.id}
              title={fObj.title}
              date={fObj.date}
              isActive={fObj.isActive}
              onToggle={() => {
                handleToggleFilter(fObj.id);
              }}
            />
          ))}
        </Grid>
        <ConferenceList list={initConferences} />
      </div>
    </section>
  );
}

export default ConferenceSection;
