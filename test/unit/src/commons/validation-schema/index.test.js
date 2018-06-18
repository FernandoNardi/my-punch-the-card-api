const ROOT_PATH = process.cwd();

const { assert } = require('chai');

const validating = require(`${ROOT_PATH}/src/commons/validation-schema`);

describe.only('UNIT TEST - src/commons/validation-schema/index.js', () => {
  describe('#company-post', () => {
    it('Success validation "company", object with "dailyHours".', () => {
      const company = {
        name: 'Company test',
        phone: [
          {
            name: 'cel',
            number: '31988885555'
          },
          {
            name: 'cel 2',
            number: '31988885555'
          }
        ],
        dailyHours: 8,
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isTrue(isValid.valid);
    });

    it('Success validation "company", object with "weeklyHours".', () => {
      const company = {
        name: 'Company test',
        phone: [
          {
            name: 'cel',
            number: '31988885555'
          },
          {
            name: 'cel 2',
            number: '31988885555'
          }
        ],
        weeklyHours: 40,
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isTrue(isValid.valid);
    });
    
    it('Success validation "company", object without "phone".', () => {
      const company = {
        name: 'Company test',
        weeklyHours: 40,
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isTrue(isValid.valid);
    });

    it('Error validation "company", object without "name"', () => {
      const company = {
        weeklyHours: 40,
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isFalse(isValid.valid);
    });

    it('Error validation "company", object with "name" different of string', () => {
      const company = {
        name: { 'number': 13246 },
        weeklyHours: 40,
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isFalse(isValid.valid);
    });

    it('Error validation "company", object without "weeklyHours" and "dailyHours"', () => {
      const company = {
        name: 'Company test',
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isFalse(isValid.valid);
    });

    it('Error validation "company", object without "daysOfWeek"', () => {
      const company = {
        weeklyHours: 40,
        name: 'Company test'
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isFalse(isValid.valid);
    });

    it('Error validation "company", object with "daysOfWeek" where the array has some value not allowed', () => {
      const company = {
        weeklyHours: 40,
        name: 'Company test',
        daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'test']
      };

      const isValid = validating(company).toSchema('company-post');
      assert.isFalse(isValid.valid);
    });
  });
});
