const ROOT_PATH = process.cwd();

const bodyParser = require('body-parser');
const express = require('express');
const winston = require('winston');
const router = new express.Router();

const config = require(`${ROOT_PATH}/src/commons/config`);
const pkg = require(`${ROOT_PATH}/package`);
const hours = require(`${ROOT_PATH}/src/hours/`);

const app = express();
let serverProcess;

const server = (() => {
  const start = (callback) => {
    hours.routes(router);

    app.locals.title = pkg.name;

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
      extended: true
    }));
		
    app.set('port', process.env.PORT || config.get('PORT'));

    app.use('/', router);

    serverProcess = app.listen(app.get('port'), () => {
      winston.info('%s - Version: %s', pkg.name, pkg.version);
      winston.info('Express server listening on port: %s', app.get('port'));
      callback(null, app);
    });
  };

  const close = (callback) => {
    if (serverProcess) {
      serverProcess.close(callback);
    }
  };

  return {
    close,
    start
  };
})();

module.exports = server;
