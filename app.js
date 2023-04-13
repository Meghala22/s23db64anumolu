var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Good code 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nutritionRouter = require('./routes/nutrition');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var nutrition = require('./models/nutrition');
var resourceRouter = require("./routes/resource");


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nutrition', nutritionRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


// first code added
require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// Second code added after connection
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

//Added thrid code after var nutrition = require("./models/nutrition");
// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await nutrition.deleteMany();

  let instance1 = new nutrition({
    nutrition_protein: "Vitamin A", nutrition_calories: '100', nutrition_price: 10000
  });

  await instance1.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("First object saved")
  //});

  let instance2 = new nutrition({
    nutrition_protein: "Vitamin B", nutrition_calories: '200', nutrition_price: 20000
  });

  await instance2.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("second object saved")
  //});

  let instance3 = new nutrition({
    nutrition_protein: "Vitamin c", nutrition_calories: '300', nutrition_price: 30000
  });

  await instance3.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("Third object saved")
  //});
}
let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;