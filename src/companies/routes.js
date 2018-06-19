const ROOT_PATH = process.cwd();

const authenticate = require(`${ROOT_PATH}/src/commons/authenticate`);
const controller = require('./controller');
const validation = require('./validation');

const routes = app => {
  app.post('/company', validation, authenticate, controller.create);
};

module.exports = routes;
