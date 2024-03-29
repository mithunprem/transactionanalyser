import moment from 'moment';

/**
 * Checks if the passed in date string is valid by comparing it
 * with the set of valid date formats.
 */
export const dateValidator = dateValue => {
  const isValidDate = moment(dateValue, validDateFormats, true).isValid();
  const errorMessage = isValidDate ? '' : 'Date is not in a valid format';
  return { isValidDate, errorMessage };
}

/**
 * Compares the two dates and returns true if the toDate is same or
 * after the from data.
 */
export const compareDates = ( fromDate, toDate ) => {
  return (moment(toDate, defaultDateFormat)).isSameOrAfter(moment(fromDate, defaultDateFormat));
}

/**
 * Set of valid date format strings.
 */
const validDateFormats = [
  "DD/MM/YYYY",
  "DD-MM-YYYY",
  "DD/MM/YYYY HH:mm:ss",
  "DD-MM-YYYY HH:mm:ss"
]

export const defaultDateFormat = "DD/MM/YYYY HH:mm:ss";
