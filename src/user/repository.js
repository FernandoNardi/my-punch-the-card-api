const ROOT_PATH = process.cwd();

const database = require(`${ROOT_PATH}/src/commons/database`);

const getCollection = () => database.getCollection('users');

module.exports = {
  save: async user => await getCollection().insertOne(user)
};
