const express = require('express');
const router = express.Router();
const Mock = require('mockjs');
const Random = Mock.Random;

router.all('/list', (req, res) => {
	let page = req.query.page || 1;
	let hasnext = page >= 5 ? false : true;
	let list = [];
	let id = (page-1) * 10;

	for (let i=1; i<=10; i++) {
		list.push(Mock.mock({
			create_time: Random.datetime('yyyy-MM-dd A HH:mm'),
			detail_url: Random.url('http'),
			id: id + i,
			title: Random.cword(10, 20),
			'type_id|1': [1, 2],
			user_avatar: Random.image('105x105'),
			username: Random.cword(2, 3),

		}))
	}

	let result = {
		curpage: page,
		hasnext: hasnext,
		list: list,
		success: true
	};

	res.json(result)
})


router.all('/type', (req, res) => {

	let result = {
		success: true,
		msg: '',
		data: [
			{ id: 1, name: '求助信息' }, 
			{ id: 2, name: '助人信息' },
			{ id: 3, name: '生活服务' }
		]
	};

	res.json(result)
})

module.exports = router;