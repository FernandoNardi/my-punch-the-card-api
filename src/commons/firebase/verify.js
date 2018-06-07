const admin = require('firebase-admin');
const checkRevoked = true;

module.exports = async idToken => await admin.auth().verifyIdToken(idToken, checkRevoked);
