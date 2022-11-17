import {
  format,
  sub,
  formatRelative,
  Duration,
  intervalToDuration,
  formatDuration,
} from 'date-fns';

class Dates {
  sub(date: Date, duration: Duration) {
    return sub(date, duration);
  }
  formatToMonthDDYYYY(date: Date) {
    return format(date, 'MMMM dd yyyy');
  }
  formatRelative(date: Date) {
    return formatRelative(date, Date.now());
  }
  formatDaysSinceDate(date: Date) {
    const durationFromDate = intervalToDuration({start: date, end: Date.now()});
    return formatDuration(durationFromDate, {format: ['days']});
  }
}

const dates = new Dates();

Object.freeze(dates);

export default dates;
