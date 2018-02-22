const ROOT_PATH = process.cwd();

const { routes: hours } = require(`${ROOT_PATH}/src/hours/`);

const routes = (app) => {
  hours(app);
};

module.exports = routes;
