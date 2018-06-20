const repository = require('./repository');

module.exports = async company =>
  await repository.save({
    ...company,
    createdAt: new Date()
  });
