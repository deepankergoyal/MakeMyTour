const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'limit', 'sort', 'fields'];

    excludedFields.forEach((el) => delete queryObj[el]);

    console.log(req.query);

    //filtering for >=,<=,<,>
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr)); //building the query

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(sortBy);
    } else {
      query = query.select('-__v');
    }

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numOfTours = await Tour.countDocuments();
      if (skip > numOfTours) {
        throw new error('This page doesnt exist ');
      }
    }

    const tours = await query; // executig thr query

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Failed',
      meesage: err,
    });
  }
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

// exports.addTour = (req, res) => {
//   // res.status(201).json({
//   //   status: 'success',
//   //   // data: {
//   //   //   tour: newTour,
//   //   // },
//   // });
// };
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Failed',
      meesage: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Failed',
      meesage: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Failed',
      meesage: err,
    });
  }
};
