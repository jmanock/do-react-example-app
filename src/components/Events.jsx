import React from 'react';
import Calendar from './Calendar';
import EventCalendar from './EventCalendar';

const Events = () =>{
  return(
    <div className='container'>
      <EventCalendar />
      <Calendar />
    </div>
  );
};

export default Events;
