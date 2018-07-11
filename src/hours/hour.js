const repository = require('./repository');
const objectId = require('mongodb').ObjectId;

class Hour {
  constructor() {
    this.point;
    this.timezone;
    this.created = new Date();
    this.user;
    this.company;
  }

  setPoint(point) {
    this.point = new Date(point);
    return this;
  }

  setTimezone(timezone) {
    this.timezone = timezone;
    return this;
  }

  setUser(uid) {
    this.user = { uid };
    return this;
  }

  setCompany(_id) {
    this.company = { _id: objectId(_id) };
    return this;
  }

  async save() {
    const hourToSave = Object.assign(this);
    const result = await repository.save(hourToSave);
    if (result.insertedCount) {
      return {
        _id: result.insertedId,
        ...hourToSave
      };
    }
    throw new Error('Hour not inserted.');
  }
}

module.exports = Hour;
