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
  {
    title:'Euro Car',
    start:new Date(2018,11,4),
    end:new Date(2018,11,4),
    isMine:true,
    time:'6pm'
  },
  {
    title:'Ford Night',
    start:new Date(2018,11,5),
    end:new Date(2018,11,5),
    isMine:false,
    time:'6pm'
  },
  {
    title:'Bike Night',
    start:new Date(2018,11,6),
    end:new Date(2018,11,6),
    isMine:false,
    time:'6pm'
  },
  {
    title:'Van Night + 365 Jeep Life',
    start:new Date(2018,11,7),
    end:new Date(2018,11,7),
    isMine:true,
    time:'6pm'
  },
  {
    title:'Corvette Meet',
    start:new Date(2018,11,10),
    end:new Date(2018,11,10),
    isMine:false,
    time:'6pm'
  },
  {
    title:'Paint Night',
    start:new Date(2018,11,10),
    end:new Date(2018,11,10),
    time:'7pm',
    isMine:true
  },
  {
    title:'Festivals of Speed',
    start:new Date(2018,11,11),
    end:new Date(2018,11,11),
    time:'6pm',
    isMine:false
  },
  {
    title:'Mopar Night',
    start:new Date(2018,11,12),
    end:new Date(2018,11,12),
    isMine:true,
    time:'6pm'
  },
  {
    title:'Humble Society Meet',
    start:new Date(2018,11,12),
    end:new Date(2018,11,12),
    isMine:false,
    time:'6pm'
  }
];

function Event({event}){
  return(
    <span>
      <strong className='eventTitle'>{event.title}</strong>
       <br/>
      <small className='eventTime'>{event.time}</small>
    </span>
  )
}

class CustomToolbar extends Component{
  render(){
    let {localizer:{message},label} = this.props;
    return(
      <div className='rbc-toolbar'>
        <span className='rbc-btn-group'>
          <button type='button' onClick={this.navigate.bind(null, navigate.PREVIOUS)} className='icon'>chevron_left</button>
        </span>
        <span className='rbc-toolbar-label'>{label}</span>
        <span className='rbc-btn-group'>
          <button className='icon' type='button' onClick={this.navigate.bind(null, navigate.NEXT)}>chevron_right</button>
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
    <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'700px',marginLeft:'40px',marginTop:'20px', marginRight:'30px'}} eventPropGetter={(event,start,end, isSelected) =>{let newStyle = {backgroundColor:'grey', color:'white'}; if(event.isMine){newStyle.backgroundColor='orange'} return{className:'',style:newStyle}}}/>
  </div>
)

export default Calendar;
