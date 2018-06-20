const ROOT_PATH = process.cwd();

const database = require(`${ROOT_PATH}/src/commons/database`);

const getCollection = () => database.getCollection('companies');

module.exports = {
  save: async company => await getCollection().insertOne(company)
};
