const ROOT_PATH = process.cwd();

const tv4 = require('tv4');
const fs = require('fs');

const path = `${ROOT_PATH}/src/commons/validation-schema/`;

fs.readdirSync(path).forEach(file => {
  if (file.match('.json')) {
    tv4.addSchema(JSON.parse(fs.readFileSync(`${path}${file}`)));
  }
});

module.exports = json => ({
  toSchema: schemaId => tv4.validateMultiple(json, schemaId)
});
