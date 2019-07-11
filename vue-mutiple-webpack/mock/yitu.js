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
			id: id + i,
			title: Random.cword(10, 20),
			'status|1': [1, 2, 3],
			author: Random.cword(2, 3),
			count: Random.integer(1, 10),
			img: Random.image('105x105'),
			link: Random.url('http'),
			date: Random.datetime('yyyy-MM-dd A HH:mm')
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

module.exports = router;