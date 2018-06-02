const ROOT_PATH = process.cwd();

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const router = new express.Router();

const pkg = require(`${ROOT_PATH}/package`);
const hours = require(`${ROOT_PATH}/src/hours/`);

module.exports = () => {
  const app = express();

  hours.routes(router);

  app.locals.title = pkg.name;

  app.use(morgan('tiny'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use('/', router);
  return app;
};
