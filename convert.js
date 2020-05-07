const csvToJson = require('convert-csv-to-json');

const input = './covid-19-all.csv';
const output = './public/covid19.json';

csvToJson.fieldDelimiter(',')
    .formatValueByType()
    .generateJsonFileFromCsv(input, output);
