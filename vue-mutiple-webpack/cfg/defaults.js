let path = require('path');
let defaultPort = 8010;

module.exports = {
	defaultPort: defaultPort,
	srcPath: path.join(__dirname, '/../src'),
	publicPath: '/dist/',
}