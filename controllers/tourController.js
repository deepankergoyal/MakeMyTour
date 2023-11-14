const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
// );  //we dont need to have file opertions as we have stareted using mogodb

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   // results: tours.length,
  //   // data: {
  //   //   tours,
  //   // },
  // });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    console.log(newTour);
    res.status(201).json({
      status: 'success',

      data: {
        tours: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.addTour = (req, res) => {
  // res.status(201).json({
  //   status: 'success',
  //   // data: {
  //   //   tour: newTour,
  //   // },
  // });
};
exports.getTour = (req, res) => {
  // const id = req.params.id * 1; // converting string to int
  // const tour = tours.find((el) => el.id === id);
  // if (id >= tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.updateTour = (req, res) => {
  // const id = req.params.id * 1; // converting string to int
  // const tour = tours.find((el) => el.id === id);
  // if (id >= tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: 'Updated tour will come here.....',
  //   },
  // });
};

exports.deleteTour = (req, res) => {
  // const id = req.params.id * 1; // converting string to int
  // const tour = tours.find((el) => el.id === id);
  // if (id >= tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }
  // res.status(204).json({
  //   status: 'success',
  //   data: null,
  // });
};
