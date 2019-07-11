<template>
	<section class="info-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		<a :href="item.detail_url" class="item" :key="item.id" v-for="item in list">
			<div class="side">
				<div class="pic">
					<img :src="item.img">
				</div>
			</div>
			<div class="content">
				<h3>{{item.title}}</h3>
				<p>
					<span class="status" :class="{start: item.status_id==1, nostart:item.status_id==2, over:item.status_id==3}">{{item.status}}</span>
					<span class="author">发起人：{{item.author}}</span>
					<span class="num">已有<i>{{item.join_num}}</i>人已报名</span>
				</p>
			</div>
		</a>
	</section>
</template>

<script>

	import Vue from 'vue';
	import VueResource from 'vue-resource';
	import infiniteScroll from 'vue-infinite-scroll';
	import { showTip} from 'commons/util';
	import activityApi from 'api/activity';

	Vue.use(infiniteScroll);
	Vue.use(VueResource);

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
				activityApi.getList(this.params).then((result) => {
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
		padding-bottom: px750(98);
		.item {
			height: px750(178);
			background: #fff;
			display-flex();
			align-items(center);
		}
		.item + .item {
			border-top: 1px solid #ededed;
		}
		.side {
			width: px750(220);
			.pic {
				width: px750(160);
				height: px750(120);
				margin: 0 auto;
			}
		}
		.content {
			item-flex(1 1 auto);
			padding-right: px750(30);
			h3 {
				font-size: px750(33);
				line-height: 1.45;
				color: #333;
				width: px750(530);
			}
			> p {
				color: #c2c2c2;
				font-size: px750(20);
				margin-top: px750(15);
			}
			.status {
				width: px750(75);
				height: px750(24);
				color: #fff;
				text-align: center;
				vendor(border-radius, 4px);
				&.start {
					background: #fc6340;
				}
				&.nostart {
					background: #f2a813;
				}
				&.over {
					background: #c6c5c5;
				}
			}
			.author {
				margin-left: px750(5);
			}
			.num {
				float: right;
				i {
					color: #e14143;
					font-style: normal;
					margin: 0 px750(5);
				}
			}
		}
	}
</style>