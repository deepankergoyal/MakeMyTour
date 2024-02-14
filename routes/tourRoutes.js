const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();
const authController = require('./../controllers/authController');

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
