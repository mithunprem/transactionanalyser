import Papa from 'papaparse';
import moment from 'moment';

/**
  * Parses a csv file at the filePath provided using the papaparse library
  * and returns a Promise.

  * This parser has custom functionality built into it to convert the value
  * corresponding to the header 'createdAt' to a Moment object. This will help
  * in doing any future calculations that needs to be done using these date
  * fields.
*/
const parseCsvFile = filePath => {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      transform: (value, header) => {
        return (header === 'createdAt') ?
          moment(value, "DD/MM/YYYY, h:mm:ss") : value;
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
