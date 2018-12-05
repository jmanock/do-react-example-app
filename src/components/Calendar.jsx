import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import './index.css';
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
    bikes:false,
    cars:true,
    time:'6pm'
  },
  {
    title:'Ford Night',
    start:new Date(2018,11,5),
    end:new Date(2018,11,5),
    bikes:true,
    cars:false,
    time:'6pm'
  },
  {
    title:'Bike Night',
    start:new Date(2018,11,6),
    end:new Date(2018,11,6),
    bikes:false,
    cars:true,
    time:'6pm'
  },
  {
    title:'Van Night + 365 Jeep Life',
    start:new Date(2018,11,7),
    end:new Date(2018,11,7),
    cars:false,
    bikes:false,
    time:'6pm'
  },
  {
    title:'Corvette Meet',
    start:new Date(2018,11,10),
    end:new Date(2018,11,10),
    cars:true,
    bikes:false,
    time:'6pm'
  },
  {
    title:'Paint Night',
    start:new Date(2018,11,10),
    end:new Date(2018,11,10),
    time:'7pm',
    bikes:false,
    cars:true
  },
  {
    title:'Festivals of Speed',
    start:new Date(2018,11,11),
    end:new Date(2018,11,11),
    time:'6pm',
    cars:false,
    bikes:false
  },
  {
    title:'Mopar Night',
    start:new Date(2018,11,12),
    end:new Date(2018,11,12),
    bikes:true,
    cars:false,
    time:'6pm'
  },
  {
    title:'Humble Society Meet',
    start:new Date(2018,11,12),
    end:new Date(2018,11,12),
    cars:true,
    bikes:false,
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
    <BigCalendar localizer={localizer} events={events} popup startAccessor='start' endAccessor='end' className={props.calendarIsOpen ? 'open' : ''} components={{event:Event, toolbar:CustomToolbar}} style={{height:'700px',marginLeft:'40px',marginTop:'20px', marginRight:'30px'}} eventPropGetter={(event,start,end, isSelected) =>{let newStyle = {backgroundColor:'grey', color:'white'}; if(event.cars){newStyle.backgroundColor='orange'}if(event.bikes){newStyle.backgroundColor='pink'} return{className:'',style:newStyle}}}/>
  </div>
)

export default Calendar;
