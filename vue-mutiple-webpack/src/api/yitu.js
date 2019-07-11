import Vue from 'vue';
import ajax from 'api/ajax';
import config from 'commons/config';

const webroot = config.webroot;

export default {
	// 首页列表数据
	getList(params) {
		params = params || {};
		return new Promise((resolve, reject) => {
			ajax(webroot + '/api/yitu/list', {
				type: 'GET',
				params: params
			}).then(resolve, reject)
		})
	}
}