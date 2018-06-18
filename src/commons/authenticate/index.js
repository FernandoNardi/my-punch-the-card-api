const firebase = require('../firebase');

module.exports = async (req, res, next) => {
  const { headers } = req;
  try {
    req.user = await firebase.verify(headers.authorization);
    next();
  } catch (err) {
    res.status(401).send(err);
  }
};
