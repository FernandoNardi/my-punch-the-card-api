const repository = require('./repository');

class Company {
  constructor() {
    this.name;
    this.daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    this.dailyHours = 8;
    this.weeklyHours = 40;  
    this.phone = [];
    this.created = new Date();
    this.active = true;
    this.user;
  }

  setDailyHours(dailyHours) {
    if (dailyHours) {
      this.dailyHours = dailyHours;
    }
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
    if (weeklyHours) {
      this.weeklyHours = weeklyHours;
    }
    return this;
  }

  setUser(uid) {
    this.user = { uid };
    return this;
  }
  
  async save() {
    const companyToSave = Object.assign(this);
    const result = await repository.save(companyToSave);
    if (result.insertedCount) {
      return {
        _id: result.insertedId,
        ...companyToSave
      };
    }
    throw new Error('Company not inserted.');
  }
}

module.exports = Company;