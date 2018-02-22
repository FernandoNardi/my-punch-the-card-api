const controller = require('./hours-controller');

const hoursRoutes = (app) => {
  app.route('/hours')
    .post(controller.create);

};

module.exports = hoursRoutes;
