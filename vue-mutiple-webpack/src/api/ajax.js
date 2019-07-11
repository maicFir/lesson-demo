import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default function(url, options) {
	options = options || {};
	const type = options.type || 'GET'; 
	return new Promise((resolve, reject) => {
		switch (type) {
		  case 'get':
		  case 'GET':
		    Vue.http.get(url, options).then((res) => {
		      const data = res.body
		      if (!data.errorCode || data.errorCode === 0) {
		        resolve(data)
		      } else {
		        reject(data)
		      }
		    }, reject)
		    break
		  case 'post':
		  case 'POST':
		    Vue.http.post(url, options).then((res) => {
		      const data = res.body
		      if (!data.errorCode || data.errorCode === 0) {
		        resolve(data)
		      } else {
		        reject(data)
		      }
		    }, reject)
		    break
		}
	})

}