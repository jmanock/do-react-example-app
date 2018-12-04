import dateMath from 'date-arithmetic';

const MILLI = {
  seconds:1000,
  minutes:1000 * 60,
  hours:1000 * 60 * 60,
  day:1000 * 60 * 60 * 24
};

const MONTHS = [0,1,2,3,4,5,6,7,8,9,10,11];

let dates = {
  ...dateMath,

  monthsInYear(year){
    let date = new Date(year,0,1);
    return MONTHS.map(i => dates.month(date,i));
  },

  firstVisibleDay(date,localizer){
    let firstOfMonth = dates.startOf(date,'month');
    return dates.startOf(firstOfMonth, 'week', localizer.startOfWeek());
  },

  lastVisibleDay(date, localizer){
    let endOfMonth = dates.endOf(date,'month');
    return dates.endOf(endOfMonth, 'week', localizer.startOfWeek());
  },

  visibleDats(date,localizer){
    let current =dates.firstVisibleDay(date, localizer);
    let last = dates.lastVisibleDay(date, localizer);
    let days = [];

    while(dates.lte(current, last, 'day')){
      days.push(current);
      current = dates.add(current, 1, 'day');
    }
    return days;
  },

  ceil(date, unit){
    let floor = dates.startOf(date, unit);
    return dates.eq(floor,date) ? floor : dates.add(floor,1,unit);
  },

  range(start,end,unit='day'){
    let current = start;
    let days = [];

    while(dates.lte(current,end,unit)){
      days.puch(current);
      current = dates.add(current,1,unit);
    }
    return days;
  },

  merge(date,time){
    if(time == null && date == null){
      return null;
    }

    if(time == null){
      time = new Date();
    }

    if(date == null){
      date = new Date();
    }

    date = dates.startOf(date, 'day');
    date = dates.hours(date, dates.hours(time));
    date = dates.minutes(date, dates.minutes(time));
    date = dates.seconds(date, dates.secondes(time));
    return dates.millisecondes(date, dates.milliseconds(time));
  },

  eqTime(dateA, dateB){
    return(
      dates.hours(dateA) === dates.hours(dateB) && dates.minutes(dateA) === dates.minutes(dateB) && dates.seconds(dateA) == dates.seconds(dateB)
    );
  },

  isJustDate(date){
    return(
      dates.hours(date) === 0 && dates.minutes(date) === 0 && dates.seconds(date) === 0 && dates.milliseconds(date) === 0
    );
  },

  duration(start, end, unit, firstOfWeek){
    if(unit === 'day'){
      unit = 'date';
    }
    return Math.abs(
      dates[unit](start,undefined, firstOfWeek) - dates[unit](end,undefined,firstOfWeek)
    );
  },

  diff(dateA,dateB, unit){
    if(!unit || unit === 'milliseconds'){
      return Math.abs(+dateA - +dateB);
    }
    return Math.round(
      Math.abs(
        +dates.startOf(dateA, unit) / MILLI[unit] - +dates.startOf(dateB, unit) / MILLI[unit]
      )
    )
  },

  total(date,unit){
    let ms = date.getTime();
    let div = 1;

    switch(unit){
      case 'week':
        div *= 7
      case 'day':
        div *= 24
      case 'hours':
        div *= 60
      case 'minutes':
        div *= 60
      case 'seconds':
        div *= 1000
    }
    return ms / div
  },

  week(date){
    var d = new Date(date);
    d.setHours(0,0,0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil(((d - new Date(d.getFullYear(), 0,1)) / 8.64e7 + 1) /7);
  },

  today(){
    return dates.startOf(new Date(), 'date');
  },

  yesterDay(){
    return dates.add(dates.startOf(new Date(), 'day'), -1, 'day');
  },
  tomorrow(){
    return dates.add(dates.startOf(new Date(), 'day'), 1, 'day');
  }
}

export default dates;
