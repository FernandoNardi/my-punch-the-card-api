const ROOT_PATH = process.cwd();

const { getCollection } = require(`${ROOT_PATH}/src/commons/database`);

const hoursRepository = (() => {
  const collection = () => getCollection('hours');

  const insertOne = (hours) => collection().insertOne(hours);

  return {
    insertOne
  };
})();

module.exports = hoursRepository;
