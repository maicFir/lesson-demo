module.exports = function(app) {
	app.use('/api/index', require('./index'));
	app.use('/api/activity', require('./activity'));
	app.use('/api/gift', require('./gift'));
	app.use('/api/yitu', require('./yitu'));
	app.use('/api/user', require('./user'));
}