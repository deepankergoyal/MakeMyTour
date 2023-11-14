const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Mandtory Field'],
    unique: true,
  },
  rating: Number,
  price: Number,
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
