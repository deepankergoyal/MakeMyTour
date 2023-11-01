const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route is not Defined yet!',
  });
};
exports.addUser = (req, res) => {
  resstatus(500).json({
    status: 'error',
    message: 'Route is not Defined yet!',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route is not Defined yet!',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route is not Defined yet!',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route is not Defined yet!',
  });
};
