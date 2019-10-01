import Papa from 'papaparse';
import moment from 'moment';
import { defaultDateFormat } from './dateValidator';

/**
  * Parses a csv file at the filePath using the papaparse library
  * and returns a Promise.

  * This parse function has custom functionality built into it to convert the
  * value corresponding to the header 'createdAt' to a Moment object.
  * This will help in doing any future calculations that needs to be done using 
  * these date values.
*/
const parseCsvFile = filePath => {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      transform: (value, header) => {
        return (header === 'createdAt') ?
          moment(value, defaultDateFormat) : value;
      },
      dynamicTyping: true,
      complete: results => {
        resolve(results.data)
      },
      error: (error) => {
        reject(error)
      }
    })
  })
}

export default parseCsvFile;
