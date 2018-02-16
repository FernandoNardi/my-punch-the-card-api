const ROOT_PATH = process.cwd();

const async = require('async');
const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);
const database = require(`${ROOT_PATH}/src/commons/database`);
const server = require(`${ROOT_PATH}/src/commons/server`);

process.title = require('./package.json').name;

winston.info('[APP] Starting server initialization');

async.series([
  next => database.connect(config.get('DATABASE_NAME'), next),
  next => server.start(next)
], err => {
  if (err) {
    winston.error('[APP] initialization failed', err);
  } else {
    winston.info('[APP] initialized SUCCESSFULLY');
  }
});