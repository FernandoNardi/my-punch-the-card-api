const ROOT_PATH = process.cwd();

const { assert } = require('chai');
const sinon = require('sinon');

const validation = require(`${ROOT_PATH}/src/companies/validation`);

describe('UNIT TEST - src/companies/validation.js', () => {
  describe('#company-validation', () => {
    let sandbox;
    
    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('Validation post company. Success company by validation schema. Company without "weeklyHours"', done => {
      const req = {
        body: {
          name: 'Company test',
          phone: [],
          dailyHours: 8,
          daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
        }
      };

      validation(req, {}, err => {
        assert.ifError(err);
        assert.isTrue(req.isValid);
        done();
      });
    });

    it('Validation post company. Error company by validation schema. Invalid body.', done => {
      const res = {
        status: () => {},
        send: () => {}
      };
      const req = {
        body: {
          phone: [],
          daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
        }
      };

      sandbox.stub(res, 'status').callsFake(statusCode => {
        assert.strictEqual(statusCode, 400);
        return res;
      });

      sandbox.stub(res, 'send').callsFake(message => {
        assert.strictEqual(message, 'Invalid format');
        done();
      });

      validation(req, res);
    });

    // to-do (more tests)
  });
});
