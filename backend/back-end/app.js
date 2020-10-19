var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/test_api');
var planetsRouter = require('./routes/planets');
var peopleRouter = require('./routes/people');
var starshipsRouter = require('./routes/starships')
var app = express();

//  <--------------------------------------------  Je declare api_url global
api_url = "https://swapi.dev/api/";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//  <--------------------------------------------  Ajoute cors origin
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  <--------------------------------------------  Mes url's
app.use('/users', usersRouter);
app.use('/planetes', planetsRouter);
app.use('/personnages', peopleRouter);
app.use('/vesau', starshipsRouter);
app.use('/test_api', testAPIRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
