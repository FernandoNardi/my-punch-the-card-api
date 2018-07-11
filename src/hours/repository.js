const ROOT_PATH = process.cwd();

const database = require(`${ROOT_PATH}/src/commons/database`);

const getCollection = () => database.getCollection('hours');

module.exports = {
  save: async hour => await getCollection().insertOne(hour)
};
