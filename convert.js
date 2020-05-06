const csvToJson = require('convert-csv-to-json');

const input = './us_states_covid19_daily.csv';
const output = './public/covid19.json';

csvToJson.fieldDelimiter(',')
    .formatValueByType()
    .generateJsonFileFromCsv(input, output);
