let defaults = require('./defaults');
let path = require('path');

const node_modules = path.join(__dirname, '/../node_modules/');


module.exports = {
	extensions: ['.js', '.jsx'],
	alias: {
		node_modules: path.join(__dirname, '/../node_modules/'),
		commons: `${defaults.srcPath}/commons/`,
		components: `${defaults.srcPath}/components/`,
		images: `${defaults.srcPath}/images/`,
		pages: `${defaults.srcPath}/pages/`,
		styles: `${defaults.srcPath}/styles/`,
		libs: `${defaults.srcPath}/libs/`,
		api: `${defaults.srcPath}/api/`,
	}
}