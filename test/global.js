const ROOT_PATH = process.cwd();

const config = require(`${ROOT_PATH}/src/commons/config`);
const database = require(`${ROOT_PATH}/src/commons/database`);

before(async () => {
  config.set('DATABASE_CONNECTION_URL', 'mongodb://localhost:27017/card-test');
  await database.connect();
});

after(async () => {
  await database.db.dropDatabase();
  await database.close();
});