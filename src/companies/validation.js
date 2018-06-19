const ROOT_PATH = process.cwd();

const validating = require(`${ROOT_PATH}/src/commons/validation-schema`);

module.exports = (req, res, next) => {
  const { body: company } = req;
  const check = validating(company).toSchema('company-post');
  req.isValid = check.valid;
  if (req.isValid) {
    return process.nextTick(next);
  }
  res.status(400).send('Invalid format');
};

