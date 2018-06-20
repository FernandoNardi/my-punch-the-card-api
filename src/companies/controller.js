const ROOT_PATH = process.cwd();

const create = require('./create');
const status = require(`${ROOT_PATH}/src/commons/status-code`);

module.exports = {
  async create(req, res) {
    try {
      await create(req.body);
      res.status(status.created).send();
    } catch (err) {
      res.status(status.badRequest).send();
    }
  }
};
