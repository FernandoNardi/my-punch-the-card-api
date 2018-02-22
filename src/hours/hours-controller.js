const hoursController = (() => {
  const create = (req, res) => {
    res.status(200).send({ test: 'test' });
  };

  return {
    create
  };
})();

module.exports = hoursController;