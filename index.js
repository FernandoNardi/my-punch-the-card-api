const ROOT_PATH = process.cwd();

const winston = require('winston');

const database = require(`${ROOT_PATH}/src/commons/database`);
const server = require(`${ROOT_PATH}/src/commons/server`);

process.title = require('./package.json').name;

winston.info('[APP] Starting server initialization');

const initialize = async () => {
  try {
    await database.connect();
    server.start();
  } catch (err) {
    winston.error('[APP] initialization failed', err);
  }
};

initialize();
