const ROOT_PATH = process.cwd();

const bodyParser = require('body-parser');
const express = require('express');
const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);
const pkg = require(`${ROOT_PATH}/package`);

const app = express();
let serverProcess;

const server = (() => {
  const start = (callback) => {
    app.locals.title = pkg.name;

    app.use(bodyParser.json({
      type: '*/*'
    }));

    app.use(bodyParser.urlencoded({
      extended: true
    }));
		
    app.set('port', process.env.PORT || config.get('PORT'));

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
