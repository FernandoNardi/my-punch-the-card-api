const ROOT_PATH = process.cwd();

const field = require('sgt-fields');
const mongoClient = require('mongodb').MongoClient;
const winston = require('winston');

const config = require(`${ROOT_PATH}/src/commons/config`);

const database = {
  db: null,
  collections: [],
  async connect() {
    if (!this.client) {
      const connectionUrl = config.get('DATABASE_CONNECTION_URL');
      try {
        this.db = await mongoClient.connect(connectionUrl);
        winston.info('[MongoDB] Database connected.');
      } catch (err) {
        winston.error(`[MongoDB] Database failed to connect ${connectionUrl}. err: ${err}`);
        throw err;
      }
    }
  },
  async close() {
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
  getCollection(name) {
    let collection = field.get(this, 'collections.name');
    if (!collection) {
      collection = this.db.collection(name);
      this.collections[name] = collection;
    }
    return collection;
  }
};

module.exports = database;