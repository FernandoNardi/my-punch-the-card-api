const ROOT_PATH = process.cwd();

const field = require('sgt-fields');
const mongoClient = require('mongodb').MongoClient;
const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);

const database = {
  connect: async databaseName => {
    if (!this.client) {
      const connectionUrl = config.get('DATABASE_CONNECTION_URL');
      try {
        this.client = await mongoClient.connect(connectionUrl);
      } catch (err) {
        winston.error(`[MongoDB] Database failed to connect ${connectionUrl}. err: ${err}`);
        throw err;
      }

      winston.info('[MongoDB] Database connected.');
      this.db = this.client.db(databaseName);
    }
  },
  close: async () => {
    winston.debug('[MongoDB] Database trying to disconnect');
    if (this.client) {
      try {
        await this.client.close();
        winston.info('[MongoDB] Database disconnect');
      } catch (err) {
        winston.error('[MongoDB] Error on closing database');
        throw err;
      }
    }
  },
  getCollection: name => {
    let collection = field.get(this, 'collections.name');
    if (!collection) {
      collection = this.db.collection(name);
      this.collections[name] = collection;
    }
    return collection;
  }
};

module.exports = database;