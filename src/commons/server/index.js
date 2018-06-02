const ROOT_PATH = process.cwd();

const express = require('./express');
const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);
const pkg = require(`${ROOT_PATH}/package`);

const server = {
  serverProcess: null,
  start: () => {
    const port = process.env.PORT || config.get('PORT');
    const app = express();

    this.serverProcess = app.listen(port, () => {  
      winston.info('%s - Version: %s', pkg.name, pkg.version);
      winston.info('Express server listening on port: %s', app.get('port'));
      winston.info('[APP] initialized SUCCESSFULLY');
    });  
  },
  close: callback => {
    if (this.serverProcess) {
      this.serverProcess.close(callback);
    }
  }
};

module.exports = server;
