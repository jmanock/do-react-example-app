import React, {Component} from 'react';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Calendar extends Component{
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
      selectedMonth:day.date,
      selectedDay:day.date.clone(),
      showEvents:true
    });
  }

  goToCurrentMonthView(){
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth:moment()
    });
  }

  showCalendar(){
    this.setState({
      selectedMonth:this.state.selectedMonth,
      selectedDay:this.state.selectedDay,
      showEvents:false
    });
  }

  renderMonthLabel(){
    const currentMonthView = this.state.selectedMonth;
    return(
      <span className='box month-label'>
        {currentMonthView.format('MMMM YYYY')}
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
      <span className='box today-label' onClick={this.gotToCurrentMonthView}>
        Today
      </span>
    );
  }

  renderWeeks(){
    const currentMontView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const monthEvents = this.state.selectedMonthEvents;

    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView.clone().startOf('month').subtract(1,'d').day('Monday');
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while(!done){
      weeks.push(
        <Week previusCurrentNextView={previousCurrentNextView.clone()} currentMonthView={currentMonthView} monthEvents={monthEvents} selected={currentSelectedDay} select={day => this.select(day)} />
      );
      previousCurrentNextView.add(1,'w');
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }

  handleAdd(){
    const monthEvents = this.state.selectedMonthEvents;
    const currentSelectedDate = this.state.selectedDay;

    let newEvents = [];
    var eventTitle = prompt('Please enter a name for your event:');

    switch(eventTitle){
      case '':
        alert('Event name cannot be empty.');
        break;
      case null:
        alert('Changed your mind? you can add one later!');
        break;
      default:
        var newEvent = {
          title:eventTitle,
          date:currentSelectedDate,
          dynamic:true
        };

        newEvents.push(newEvent);
        for(var i = 0; i<newEvents.length; i++){
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
    let isAfterDay = moment().startOf('day').subtract(1,'d');

    if(currentSelectedDate.isAfter(isAfterDay)){
      this.handleAdd();
    }else{
      if(confirm('Are you sure you want to add an event in the past?')){
        this.handleAdd();
      }else{}
    }
  }

  removeEvent(i){
    const monthEvents = this.state.selectedMonthEvents.slice();
    const currentSelectedDate = this.state.selectedDay;

    if(confirm('Are you sure you want to remove this event?')){
      let index = i;

      if(index != -1){
        monthEvents.splice(index,1);
      }else{
        alert('no events to remove on this day!');
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
      title:'Something Something darkside',
      date:moment(),
      dynamic:false
    };

    var event2 = {
      title:'SOmething else fun today',
      date:moment().startOf('day').subtract(2,'d').add(2,'h'),
      dynamic:false
    };

    var event3 ={
      title:'The Greenbrier',
      date:moment().startOf('day').subtract(7,'d').add(18, 'h')
    };

    allEvents.push(event1);
    allEvents.push(event2);
    allEvents.push(event3);

    for(var i = 0; i < allEvents.length; i++){
      monthEvents.push(allEvents[i]);
    }

    this.setState({
      selectedMonthEvents:monthEvents
    });
  }

  render(){
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDat = this.state.selectedDay;
    const showEvents = this.state.showEvents;

    if(showEvents){
      return(
        <section className='main-calendar'>
          
        </section>
      )
    }
  }
}
