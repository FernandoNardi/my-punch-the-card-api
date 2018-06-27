const repository = require('./repository');

class Company {
  constructor() {
    this.name;
    this.dailyHours;
    this.weeklyHours;  
    this.daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    this.phone;
    this.created = new Date();
    this.active = true;
  }

  setDailyHours(dailyHours) {
    this.dailyHours = dailyHours;
    return this;
  }

  setDaysOfWeek(daysOfWeek) {
    if (daysOfWeek && daysOfWeek.length) {
      this.daysOfWeek = daysOfWeek;
    }
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setWeeklyHours(weeklyHours) {
    this.weeklyHours = weeklyHours;
    return this;
  }

  async save() {
    try {
      const companyToSave = Object.assign(this);
      const result = await repository.save(companyToSave);
      if (result.insertedCount) {
        return companyToSave;
      }
      throw new Error('Company not inserted.');
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Company;