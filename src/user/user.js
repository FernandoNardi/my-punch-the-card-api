const repository = require('./repository');

class User {
  constructor() {
    this.uid;
    this.company;
  }

  setUid(uid) {
    this.uid = uid;
    return this;
  }

  setCompany(_id) {
    this.company = { _id };
    return this;
  }

  async save() {
    const userToSave = Object.assign(this);
    const result = await repository.save(userToSave);
    if (result.insertedCount) {
      return userToSave;
    }
    throw new Error('User not inserted.');
  }
}

module.exports = User;
