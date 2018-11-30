import Ract, {Component} from 'react';
import moment from 'moment';

const ReactCSSTransitionGroup = React.addonsCSSTRansitionGroup;


class Calendar extends Compnent{
  state = {
    selectedMonth:moment(),
    selectedDay:moment().startOf('day'),
    selectedMonthEvents:[],
    showEvents:false
  };
  this.initialiseEvents();

  previous(){
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth:currentMonthView.subtract(1,'month')
    });
  }

  next(){
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth:currentMonthView.add(1,'month')
    });
  }

  select(day){
    this.setState({
      selectedMonth:day.day,
      selectedDay:day.date.clone(),
      showEvents:true
    });
  }

  goToCurrentMonthView(){
    const currentMonthView = this.state.selectedMonth;
    return(
      <span className='box month-label'>
        {currentMontView.format('MMMM YYYY')}
      </span>
    );
  }

  renderDayLabel(){
    const currentSelectedDay = this.state.selectedDay;
    return(
      <span className='box month-label'>
        {currentSelectedDay.format('DD MMMM YYYY')}
      </span>
    );
  }

  renderTodayLabel(){
    const currentSelectedDay = this.state.selectedDay;
    return(
      <span className='box today-label' onClick={this.goToCurrentMonthView}>
        Today
      </span>
    );
  }

  renderWeeks(){
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const monthEvents = this.state.selectedMonthEvents;

    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView.clone().startOf('month').subtract(1,'d').day('Monday');

    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while(!done){
      weeks.push(
        <Week previousCurrentNextView={previousCurrentNextView.clone()} currentMonthView={currentMonthView} monthEvents={monthEvents} selected={currentSelectedDay} select={day => this.select(day)} />
      );
      previousCurrentNextView.add(1,'w');
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
    }
    return weeks;
  }

  handleAdd(){
    const monthEvents = this.state.selectedMonthEvents;
    const currentEvents = this.state.selectedMonthEvents;
    const currentSelectedDate = this.state.selectedDay;

    let newEvents = [];
    var eventTitle = prompt('Please enter a name for your event:');

    switch(eventTitle){
      case '':
        alert('Event name cannot be empty');
        break;
      case null:
        alert('Changed your mind? You can add one later!');
        break;
      default:
        var newEvent = {
          title:eventTitle,
          date:currentSelectedDate,
          dynamic:true
        };

        newEvents.push(newEvent);
        for(var i = 0; i < newEvents.length; i++){
          monthEvents.push(newEvents[i]);
        }

        this.setState({
          selectedMonthEvents:monthEvents
        });
        break;
    }
  }

  addEvent(){
    const currentSelectedDate = this.state.selectedDay;
    let isAfterDay = moment().startOf('day').subtract(1, 'd');

    if(currentSelectedDate.isAfter(isAfterDay)){
      this.handleAdd();
    }else{
      if(confirm('are you sure you want to add an event in the post?')){
        this.handleAdd();
      }else{

      }
    }
  }

  removeEvent(i){
    const monthEvents = this.state.selectedMonthEvents.slice();
    const currentSelectedDate = this.state.selectedDay;

    if(confirm('Are you sure you want to remove this event?')){
      let index = i;
      if(index != -1){
        monthEvents.splice(index,1);
      } else{
        alert('no events to remove on this day');
      }
      this.setState({
        selectedMonthEvents:monthEvents
      });
    }
  }

  initialiseEvents(){
    const monthEvents = this.state.selectedMonthEvents;
    let allEvents = [];
    var event1 = {
      title:'Something Something something dark side',
      date:moment(),
      dynamic:false
    };
    var event2 = {
      title:'somethinElse something else something else',
      date:moment().startOf('day').subtract(2,'d').add(2, 'h'),
      dynamic:false
    };
    var event3 = {
      
    }
  }
}
