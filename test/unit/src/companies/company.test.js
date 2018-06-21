const ROOT_PATH = process.cwd();

const { assert } = require('chai');
const sinon = require('sinon');

const Company = require(`${ROOT_PATH}/src/companies/company`);

describe('UNIT TEST - src/companies/company.js', () => {
  describe('#instance company', () => {
    const body = {
      name: 'company-test',
      dailyHours: 8,
      daysOfWeek: 40,
      phone: [{
        name: 'cel-test',
        number: '31978953214'
      }],
      weeklyHours: []
    };

    it.only('Success save company in database.', async () => {
      const company = await new Company()
        .setName(body.name)
        .setDailyHours(body.dailyHours)
        .setDaysOfWeek(body.daysOfWeek)
        .setPhone(body.phone)
        .setWeeklyHours(body.weeklyHours)
        .save();

      console.log(company);
    });
  });
});
