const ROOT_PATH = process.cwd();

const { assert } = require('chai');
const sinon = require('sinon');

const Company = require(`${ROOT_PATH}/src/companies/company`);
const repository = require(`${ROOT_PATH}/src/companies/repository`);

describe('UNIT TEST - src/companies/company.js', () => {
  describe('#instance company', () => {
    const now = new Date();
    let sandbox;
    let clock;
    const body = {
      name: 'company-test',
      dailyHours: 8,
      weeklyHours: 40,
      phone: [{
        name: 'cel-test',
        number: '31978953214'
      }],
      daysOfWeek: []
    };
  
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      clock = sinon.useFakeTimers(now);
    });

    afterEach(() => {
      sandbox.restore();
      clock.restore();
    });

    it('Success save company in database.', async () => {
      const companyInserted =  {
        daysOfWeek: [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday' ],
        created: now,
        active: true,
        name: 'company-test',
        dailyHours: 8,
        phone: [{ name: 'cel-test', number: '31978953214' }],
        weeklyHours: 40
      };

      sandbox.stub(repository, 'save').callsFake(async companyToSave => {
        assert.deepEqual(companyToSave, companyInserted);
        return await {
          insertedCount: 1
        };
      });

      const company = await new Company()
        .setName(body.name)
        .setDailyHours(body.dailyHours)
        .setDaysOfWeek(body.daysOfWeek)
        .setPhone(body.phone)
        .setWeeklyHours(body.weeklyHours)
        .save();

      assert.deepEqual(company, companyInserted);
    });

    // corrigir test
    it('Not save company in database.', async () => {
      const companyInserted = {
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        created: now,
        active: true,
        name: 'company-test',
        dailyHours: 8,
        phone: [{
          name: 'cel-test',
          number: '31978953214'
        }],
        weeklyHours: 40
      };

      sandbox.stub(repository, 'save').callsFake(async companyToSave => {
        assert.deepEqual(companyToSave, companyInserted);
        return await {
          insertedCount: 1
        };
      });
      
      try {
        return await new Company()
          .setName(body.name)
          .setDailyHours(body.dailyHours)
          .setDaysOfWeek(body.daysOfWeek)
          .setPhone(body.phone)
          .setWeeklyHours(body.weeklyHours)
          .save();
      } catch (err) {
        assert.strictEqual(err.message, 'Company not inserted.');
      }
    });
  });
});
