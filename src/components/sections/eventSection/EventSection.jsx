import React from 'react';
import SectionTitle from '../../ui/title/SectionTitle';
import EventList from './EventList';

const initData = [
  {
    icon: 'facebook',
    title: 'Meet the Leaders',
    description:
      'Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one.',
    action: 'Buy Tickets',
  },
  {
    icon: 'instagram',
    title: 'Day Long Meetup',
    description:
      'Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one.',
    action: 'Buy Tickets',
  },
  {
    icon: 'shower',
    title: 'Ask Questions',
    description:
      'Lost the plot lurgy on your bike mate Oxford hanky panky blow off haggle golly gosh do one.',
    action: 'Buy Tickets',
  },
];

function EventSection() {
  return (
    <section>
      <div className='container'>
        <SectionTitle title={'The Event'} subtitle={'SaasLand in Town'} />
        <EventList list={initData} />
      </div>
    </section>
  );
}

export default EventSection;
