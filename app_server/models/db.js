var mongoose = require('mongoose');
var gracefulShutdown;


// Detect environment and define database connection string and use it to open Mongoose connection
var dbURI = 'mongodb://localhost/www-michaelmallari-com';
if(process.env.NODE_ENV === 'production') {
	dbURI = process.env.MLAB_URI;
}
mongoose.connect(dbURI);


// Listen for Mongoose connection events and output statuses to console
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});


// Reusable function to close Mongoose connection
gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
}


// For nodemon restarts
process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});


// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});


// For Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});
