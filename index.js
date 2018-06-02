const ROOT_PATH = process.cwd();

const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);
const database = require(`${ROOT_PATH}/src/commons/database`);
const server = require(`${ROOT_PATH}/src/commons/server`);

process.title = require('./package.json').name;

winston.info('[APP] Starting server initialization');

const initialize = async () => {
  try {
    await database.connect(config.get('DATABASE_NAME'));
    server.start();
  } catch (err) {
    winston.error('[APP] initialization failed', err);
  }
};

initialize();
