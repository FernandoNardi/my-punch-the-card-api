const ROOT_PATH = process.cwd();

const { series } = require('async');

const config = require(`${ROOT_PATH}/src/commons/config`);
const database = require(`${ROOT_PATH}/src/commons/database`);

let db;

before(done => {
  database.connect(config.get('DATABASE_NAME_TEST'), (err, resultDb) => {
    db = resultDb;
    done(err);
  });
});

after(done => {
  series([
    next => db.dropDatabase(next),
    next => database.close(next)
  ], done);
});