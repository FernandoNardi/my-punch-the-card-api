const ROOT_PATH = process.cwd();

const mongoClient = require('mongodb').MongoClient;
const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);

const database = (() => {
  let client;
  const collections = [];
  let db;
  
  const connect = (databaseName, callback) => {
    const connectionUrl = config.get('DATABASE_CONNECTION_URL');
  
    if (client) {
      return process.nextTick(callback, null, client);
    }
  
    mongoClient.connect(connectionUrl, (err, clientResult) => {
      if (err) {
        winston.error(`[MongoDB] Database failed to connect ${connectionUrl}. err: ${err}`);
      } else {
        winston.info('[MongoDB] Database connected.');
      }
      client = clientResult;
      db = client.db(databaseName);
      callback(err, db);
    });
  };
  
  const close = (callback) => {
    winston.debug('[MongoDB] Database trying to disconnect');
    if (client) {
      client.close((err) => {
        if (err) {
          winston.error('[MongoDB] Error on closing database');
        }
        winston.info('[MongoDB] Database disconnect');
        callback(err);
      });
    }
  };
  
  const getCollection = (name) => {
    let collection = collections[name];
    if (!collection) {
      collection = db.collection(name);
      collections[name] = collection;
    }
    return collection;
  };
  
  return {
    connect,
    getCollection,
    close
  };
})();

module.exports = database;