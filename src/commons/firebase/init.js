const ROOT_PATH = process.cwd();

const admin = require('firebase-admin');

const config = require(`${ROOT_PATH}/src/commons/config`);
const serviceAccount = require(`${ROOT_PATH}/my-punch-the-card-firebase.json`);

module.exports = () => admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.get('FIREBASE_DATABASEURL')
});
