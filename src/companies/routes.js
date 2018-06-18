const ROOT_PATH = process.cwd();

const authenticate = require(`${ROOT_PATH}/src/commons/authenticate`);
const controller = require('./controller');

const routes = app => {
  app.post('/company', authenticate, controller.create);
};

module.exports = routes;
