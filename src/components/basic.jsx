import React, {Component} from 'react';
import events from './bigEvents';
import Calendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = Calendar.momentLocalizer(moment);

const allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);

class Cal extends Component{
  state = {
    view:'month',
    date:new Date(),
    width:500
  };
next(){

}
  render(){
    return(
      <div style={{height:700}}>

        <button onClick={this.next()}>Next</button>
        <Calendar style={{height:500, width:this.state.width}} toolbar={false} events={events} step={60} views={allViews} view={this.state.view} onView={()=>{}} date={this.state.date} onNavigate={date => this.setState({date})} localizer={localizer} />
      </div>
    );
  }
}



// const localizer = Calendar.momentLocalizer(moment);
// class Cal extends Component{
//   state = {
//     events:[
//       {start:new Date(), end:new Date(moment().add(1,'days')), title:'workin'}
//     ]
//   };
//   render(){
//     return(
//       <div className=''>
//         <Calendar localizer={localizer} defaultDate={new Date()} defaultView='month' events={this.state.events} style={{height:'100vh'}} />
//       </div>
//     );
//   }
// }

export default Cal;
