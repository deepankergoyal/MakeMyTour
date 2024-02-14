const express = require('express');
const morgan = require('morgan');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//mioddlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.json()); // app.use is used to a midddleware in the middleware stack

app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// app.get('/', (req, res) => {
//   res.send('Hello, world!'); // Sends "Hello, world!" as the response when someone accesses the root route
// });

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
