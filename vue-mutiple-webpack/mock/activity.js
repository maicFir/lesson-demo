const express = require('express');
const router = express.Router();
const Mock = require('mockjs');
const Random = Mock.Random;

router.all('/list', (req, res) => {
	let page = req.query.page || 1;
	let hasnext = page >= 5 ? false : true;
	let list = [];
	let id = (page-1) * 10;

	const statusPool = {
		1: '未开始',
		2: '报名中',
		3: '已结束'
	};

	for (let i=1; i<=10; i++) {

		let status_id = Random.integer(1, 3);
		let status = statusPool[status_id];

		list.push(Mock.mock({
			author: Random.cword(2, 3),
			detail_url: Random.url('http'),
			id: id + i,
			img: Random.image('105x105'),
			join_num: Random.integer(1, 10),
			status: status,
			status_id: status_id,
			title: Random.cword(10, 20),
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