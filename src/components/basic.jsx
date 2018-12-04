import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
}

let events = [
  {title:'Fucking Food', start:new Date(moment().add(1,'days')), end:new Date(moment().add(1,'days'))},
  {title:'Fuckin', start:new Date(moment().add(4, 'days')), end:new Date(moment().add(4,'days'))}
];

function Event({event}){
  return(
    <span>
      <strong>{event.title}</strong>

    </span>
  )
}

class CustomToolbar extends Component{
  render(){
    let {localizer:{message},label} = this.props;
    return(
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.PREVIOUS)}>Prev</button>
        </span>
        <span className='rbc-toolbar-label'>{label}</span>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.NEXT)}>Next</button>
        </span>
      </div>
    )
  }
  navigate = action =>{
    this.props.onNavigate(action)
  }
}

const Calendar = props =>(
  <div>
    <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'500px'}}/>
  </div>
)

export default Calendar;
