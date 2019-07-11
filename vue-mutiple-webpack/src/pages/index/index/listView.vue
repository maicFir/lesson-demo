<template>
	<section class="info-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
	<a :href="item.detail_url" class="item" :key="item.id" v-for="item in list">
		<div class="side">
			<div class="pic">
				<img :src="item.user_avatar">
			</div>
		</div>
		<div class="content">
			<h3>{{item.title}}</h3>
			<span :class="{'seek-help': item.type_id==1, 'help-people': item.type_id==2}"></span>
			<p>
				<span class="author">发起人：{{item.username}}</span>
				<span class="date">{{item.create_time}}</span>
			</p>
		</div>
	</a>
</section>
</template>

<script>
	import Vue from 'vue';
	import infiniteScroll from 'vue-infinite-scroll';
	import config from 'commons/config';
	import { showTip } from 'commons/util';
	import indexApi from 'api/index';

	Vue.use(infiniteScroll);

	export default {
		data() {
			return {
				list: [],
				busy: false,
				hasnext: true,
				curpage: 0,
				params: {
					page: 1
				}
			}
		},

		mounted() {
			this.params.type_id = this.$route.params.id;
			this.busy = false;
			this.loadMore();
		},

		watch: {
			'$route'(to, form) {
				this.reset();
				this.params.type_id = to.params.id;
				this.loadMore();
			}
		},

		methods: {

			reset() {
				this.list = [],
				this.curpage = 0;
				this.hasnext = true,
				this.params.page = 1;
			},

			loadMore() {

				if (this.busy) {
					return;
				}
				
				if (!this.hasnext) {
					showTip('没有更多了');
					return;
				}
				showTip('努力加载中...');
				this.busy = true;
				this.params.page = this.curpage*1 + 1;
				console.log(this.params.page)
				indexApi.getList(this.params).then((result) => {
					if (result.success) {
						this.list.splice(this.list.length, 0, ...result.list);
						this.hasnext = result.hasnext;
						this.curpage = result.curpage;
					}
					this.busy = false;
				})
			}
		}
	}
</script>

<style lang="stylus">
		
	@import "../../../styles/mixins.styl";

	.info-list {
		width: px750(750);
		margin: 0 auto;
		padding-top: px750(93);
		padding-bottom: px750(98);
		.item {
			height: px750(165);
			background: #fff;
			display-flex();
			align-items(center);
			border-top: 1px solid #ededed;
			border-bottom: 1px solid #ededed;
		}
		.item + .item {
			margin-top: px750(10);
		}
		.side {
			width: px750(165);
			.pic {
				width: px750(105);
				height: px750(105);
				margin: 0 auto;
			}
		}
		.content {
			item-flex(1 1 auto);
			padding-right: px750(30);
			h3 {
				font-size: px750(33);
				color: #333;
				width: px750(560);
				text-ellipsis();
			}
			> span {
				display: inline-block;
				width: px750(75);
				height: px750(24);
				margin: px750(14) 0;
				background-position: center center;
				background-repeat: no-repeat;
				background-size: 100%;
				&.seek-help {
					background-image: url("./img/seek-help.png");
				}
				&.help-people {
					background-image: url("./img/help-people.png");
				}
			}
			> p {
				color: #c2c2c2;
				font-size: px750(20);
			}
			.date {
				float: right;
			}
		}
	}
</style>