import Papa from 'papaparse';
import moment from 'moment';

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