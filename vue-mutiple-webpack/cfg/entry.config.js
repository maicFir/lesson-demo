let defaults = require('./defaults');
let path = require('path');
let glob = require('glob');
let commonsDir = defaults.srcPath + '/commons';
let pagesDir = defaults.srcPath + '/pages';

let commonsInstance = new glob.Glob('**/*.js', {
	// 在commons目录里找
	cwd: commonsDir,
	// 这里不能异步，只能同步
	sync: true
})
let pagesInstance = new glob.Glob('*/*', {
	// 在pages目录里找
	cwd: pagesDir,
	// 这里不能异步，只能同步
	sync: true
})

let commonsArr = commonsInstance.found;
let pageArr = pagesInstance.found; 


let configEntry = {
	'commons/commons': commonsArr.map((page) => {
		return path.resolve(commonsDir) + '/' + page
	})
};

pageArr.forEach((page) => {
  	configEntry[page] = [path.resolve(pagesDir, page + '/index.js')];
});


module.exports = configEntry;