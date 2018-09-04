const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const expressValidator = require('express-validator');
const flash = require('connect-flash');

const errorHandlers = require('./handlers/errorHandlers');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/student');
const classRouter = require('./routes/class');
const teacherRouter = require('./routes/teacher');

const app = express();

//mongobd connection
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongobd connect');
  
});
mongoose.Promise = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public')));


// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  // res.locals.user = req.user || null;
  // res.locals.currentPath = req.path;
  next();
});






app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/class', classRouter);
app.use('/teacher', teacherRouter);
// catch 404 and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
