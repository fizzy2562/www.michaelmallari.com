var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_server/models/db');

var mainRoutes = require('./app_server/routes/main');
var businessRoutes = require('./app_server/routes/business');
var computationalRoutes = require('./app_server/routes/computational');
var dataRoutes = require('./app_server/routes/data');
var designRoutes = require('./app_server/routes/design');

if(process.env.NODE_ENV === 'production') {
	url_base = 'http://www.michaelmallari.com';
} else {
	url_base = 'http://localhost:3000';
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);
app.use('/business', businessRoutes);
app.use('/computational', computationalRoutes);
app.use('/data', dataRoutes);
app.use('/design', designRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
