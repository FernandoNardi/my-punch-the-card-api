const ROOT_PATH = process.cwd();

const authenticate = require(`${ROOT_PATH}/src/commons/authenticate`);
const controller = require('./hours-controller');

const hoursRoutes = app => {
  app.post('/hours', authenticate, controller.create);
};

module.exports = hoursRoutes;
