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
      
    }
  }
}
