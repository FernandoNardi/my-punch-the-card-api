// const { create } = require('./hours-create');

const hoursController = (() => {
  
  
  const create = (req, res) => {
    
    // await create(req.body);
    res.status(201).send({ test: 'test' });
  };




  return {
    create
  };
})();

// exports.create = async (req, res) => {
//   await create(req.body);
//   res.status(201).send({ test: 'test' });
// };


module.exports = hoursController;