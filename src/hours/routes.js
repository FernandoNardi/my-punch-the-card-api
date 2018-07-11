const ROOT_PATH = process.cwd();

const authenticate = require(`${ROOT_PATH}/src/commons/authenticate`);
const controller = require('./controller');
const validation = require('./validation');

const hoursRoutes = app => {
  app.post('/hours', validation, authenticate, controller.create);
  app.post('/test/hours', controller.create);
};

module.exports = hoursRoutes;
