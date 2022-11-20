import {
  format,
  sub,
  formatRelative,
  Duration,
  intervalToDuration,
  formatDuration,
} from 'date-fns';

export enum Formats {
  seconds = 'seconds',
  minutes = 'minutes',
  hours = 'hours',
  days = 'days',
  weeks = 'weeks',
  months = 'months',
  years = 'years',
}

class Dates {
  sub(date: Date | number, duration: Duration) {
    return sub(date, duration);
  }
  formatToMonthDDYYYY(date: Date | number) {
    return format(date, 'MMMM dd yyyy');
  }
  formatRelative(date: Date | number) {
    return formatRelative(date, Date.now());
  }
  formatTimeSinceDate(date: Date | number, format: Formats[]) {
    const durationFromDate = intervalToDuration({start: date, end: Date.now()});
    return formatDuration(durationFromDate, {format});
  }
}

const dates = new Dates();

Object.freeze(dates);

export default dates;
