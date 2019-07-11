let defaults = require('./cfg/defaults');
let baseConfig = require('./cfg/base.config.js')

// 开发环境配置
module.exports = Object.assign({}, baseConfig, {

	entry: require('./cfg/entry.config.js'),

	output: require('./cfg/output.config.js'),

	module: require('./cfg/module.config.js'),

	resolve: require('./cfg/resolve.config.js'),

	plugins: require('./cfg/plugins.config.js'),

	cache: true,

	devtool: '#source-map'

})