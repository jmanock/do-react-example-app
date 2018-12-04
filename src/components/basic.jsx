import React, {Component} from 'react';
import events from './bigEvents';
import Calendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export let navigate = {
  PREVIOUS:'PREV',
  NEXT:'NEXT',
  TODAY:'TODAY',
  DATE:'DATE'
}

let events = [
  {id:14,title:'Something', start:new Date(new Date().setHours(new Date().getHours() -3)),
  end:new Date(new Date().setHours(new Date().getHours() + 3))},
  {id:15, title:'Knew', start:new Date(new Date().setHours(new Date().getHours() - 2)), end:new Date(new Date().setHours(new Date().getHours() + 2))}
]

const localizer = Calendar.momentLocalizer(moment);

function Event({event}){
  return(
    <span>
      <strong>{event.title}</strong>
      {event.desc && ': '+ event.desc}
    </span>
  )
}

function Book({event}){
  return(
    <div className='rbc-day-bg'>
      <button>Book Class</button>
    </div>
  )
}

class CustomToolBar extends Component{
  
}
//
// const allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);
//
// class Cal extends Component{
//   state = {
//     view:'month',
//     date:new Date(),
//     width:500
//   };
// next(){
//
// }
//   render(){
//     return(
//       <div style={{height:700}}>
//         <Calendar style={{height:500, width:this.state.width}} toolbar={false} events={events} step={60} views={allViews} view={this.state.view} onView={()=>{}} date={this.state.date} onNavigate={date => this.setState({date})} localizer={localizer} />
//       </div>
//     );
//   }
// }



// const localizer = Calendar.momentLocalizer(moment);
// class Cal extends Component{
//   state = {
//     events:[
//       {start:new Date(), end:new Date(moment().add(1,'days')), title:'workin'}
//     ],
//     view:'month',
//     date:new Date()
//   };
//   render(){
//     return(
//       <div className=''>
//         <Calendar localizer={localizer} defaultDate={new Date()} defaultView='month' events={this.state.events} style={{height:'100vh'}} toolbar={true}/>
//       </div>
//     );
//   }
// }

export default Cal;
