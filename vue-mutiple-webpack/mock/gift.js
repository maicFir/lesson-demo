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
			detail_url: Random.url('http'),
			id: id + i,
			img: Random.image('360x360'),
			sell: Random.integer(1, 10),
			score: Random.integer(10, 30),
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