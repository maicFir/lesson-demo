let webpack = require('webpack');
let defaults = require('./defaults');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

pluginsConfig = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'commons/commons',
		filename: 'commons/commons.js',
		minChunks: Infinity,
	}),
	new ExtractTextPlugin("[name].css"),
	// 压缩
	new webpack.optimize.UglifyJsPlugin(),
	new webpack.optimize.AggressiveMergingPlugin(),
	// webpack 3.x新特性
	new webpack.optimize.ModuleConcatenationPlugin()
]


module.exports = pluginsConfig;