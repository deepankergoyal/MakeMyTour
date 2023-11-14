const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// console.log(process.env);

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected');
  });

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

const testData = new Tour({
  name: 'Leh Ladakh',
  rating: 4.7,
  price: 45,
});

testData.save().then((alldata) => {
  console.log(alldata);
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
