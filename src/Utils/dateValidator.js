import moment from 'moment';

/**
 * Checks if the passed in date string is valid by comparing it
 * with the set of valid date formats.
 */
export const dateValidator = dateValue => {
  return moment(dateValue, validDateFormats, true).isValid();
}

/**
 * Compares the two dates and returns true if the toDate is same or
 * after the from data.
 */
export const compareDates = ( fromDate, toDate ) => {
  const dateFormat = "DD/MM/YYYY hh:mm:ss";
  return (moment(toDate, dateFormat)).isSameOrAfter(moment(fromDate, dateFormat));
}

/**
 * Set of valid date format strings.
 */
const validDateFormats = [
  "DD/MM/YYYY",
  "DD-MM-YYYY",
  "DD/MM/YYYY HH:mm:ss",
  "DD-MM-YYYY HH:mm:ss",
]
