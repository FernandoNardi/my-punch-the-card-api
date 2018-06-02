const controller = require('./hours-controller');

const hoursRoutes = app => {
  app.post('/hours', controller.create);

};

module.exports = hoursRoutes;
