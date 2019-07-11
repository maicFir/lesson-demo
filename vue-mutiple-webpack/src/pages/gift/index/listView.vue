<template>
	<section class="gift-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		<a :href="item.detail_url" class="item" :key="item.id" v-for="item in list">
			<div class="pic">
				<img :src="item.img">
			</div>
			<div class="title">{{item.title}}</div>
			<div class="foot">
				<span><i>{{item.score}}</i>积分</span>
				<label>已兑换{{item.sell}}份</label>
			</div>
		</a>
	</section>
</template>

<script>
	
	import Vue from 'vue';
	import giftApi from 'api/gift';
	import { showTip } from 'commons/util';
	import infiniteScroll from 'vue-infinite-scroll';

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

		methods: {
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

				giftApi.getList(this.params).then((result) => {
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

	body {
		background: #f4f4f4;
	}

	.gift-list {
		width: px750(750);
		margin: 0 auto;
		padding-bottom: px750(108);
		overflow: hidden;
		.item {
			float: left;
			width: px750(360);
			height: px750(505);
			margin-top: px750(10);
			margin-left: px750(10);
			background: #fff;
			vendor(border-radius, 4px);
			overflow: hidden;
		}
		.pic {
			width: px750(360);
			height: px750(360);
			> img {
				width: 100%;
				height: 100%;
			}
		}
		.title {
			color: #333;
			font-size: px750(30);
			padding: 0 px750(20);
			height: px750(65);
			line-height: 1.3;
			margin-top: px750(8);
		}
		.foot {
			font-size: px750(20);
			color: #c2c2c2;
			padding: 0 px750(20);
			margin-top: px750(10);
			> span {
				> i {
					font-style: normal;
					color: #e14143;
					font-size: px750(36);
				}
			}
			> label {
				float: right;
				position: relative;
				top: px750(10);
			}
		}
		
	}
</style>