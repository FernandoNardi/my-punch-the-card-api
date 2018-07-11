const ROOT_PATH = process.cwd();

const Hour = require('./hour');
const status = require(`${ROOT_PATH}/src/commons/status-code`);

module.exports = {
  async create(req, res) {
    const { body, headers, user } = req;

    // console.log(JSON.stringify(body, null, 2));
    // console.log(JSON.stringify(headers, null, 2));
  
    // res.status(200).send({
    //   text: ';)'
    // });
    try {
      const hour = await new Hour()
        .setPoint(body.point)
        .setTimezone(body.timezone)
        .setUser(user.uid)
        .setCompany(body.company)
        .save();

      res.status(status.created).send(hour);
    } catch (err) {
      res.status(status.badRequest).send(err);
    }
  }
};
