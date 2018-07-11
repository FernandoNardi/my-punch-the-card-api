const ROOT_PATH = process.cwd();

const validating = require(`${ROOT_PATH}/src/commons/validation-schema`);
const status = require(`${ROOT_PATH}/src/commons/status-code`);
const errorMessage = require(`${ROOT_PATH}/src/commons/errors/messages`);

module.exports = (req, res, next) => {
  const check = validating(req.body).toSchema('hour-post');
  req.isValid = check.valid;
  if (req.isValid) {
    return process.nextTick(next);
  }
  res.status(status.badRequest).send(errorMessage.invalidFormat);
};
