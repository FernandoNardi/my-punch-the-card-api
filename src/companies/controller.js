const ROOT_PATH = process.cwd();

const Company = require('./company');
const status = require(`${ROOT_PATH}/src/commons/status-code`);
const { user: User } = require('../user');

module.exports = {
  async create(req, res) {
    const { body, user } = req;
    try {
      const company = await new Company()
        .setName(body.name)
        .setDailyHours(body.dailyHours)
        .setDaysOfWeek(body.daysOfWeek)
        .setPhone(body.phone)
        .setWeeklyHours(body.weeklyHours)
        .setUser(user.uid)
        .save();
      
      await new User()
        .setUid(user.uid)
        .setCompany(company._id)
        .save();

      res.status(status.created).send(company);
    } catch (err) {
      res.status(status.badRequest).send(err);
    }
  }
};
