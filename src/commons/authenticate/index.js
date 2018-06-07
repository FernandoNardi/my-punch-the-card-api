const firebase = require('../firebase');

module.exports = async (req, res, next) => {
  const { headers } = req;
  try {
    const user = await firebase.verify(headers.authorization);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send(err);
  }
};
