<template>
	<footer class="nav-tabs">
		<div class="inner">
			<a :href="webroot+'/pages/index'" :class="{active: activeTab=='index'}">
				<i class="icon-home"></i>
				<label>首页</label>
			</a>
			<a :href="webroot+'/pages/activity'" :class="{active: activeTab=='activity'}">
				<i class="icon-activity"></i>
				<label>活动</label>
			</a>
			<a :href="webroot+'/pages/gift'" :class="{active: activeTab=='gift'}">
				<i class="icon-gift"></i>
				<label>礼品</label>
			</a>
			<a :href="webroot+'/pages/center'" :class="{active: activeTab=='center'}">
				<i class="icon-mine"></i>
				<label>我的</label>
			</a>
		</div>
	</footer>
</template>

<script>
	import { webroot } from 'commons/config';

	export default {

		data() {
			return {
				webroot
			}
		},

		props: ['activeTab'],
	}
</script>

<style lang="stylus">
	@import "../../styles/mixins.styl";
	// 底部导航
	.nav-tabs {
		position: fixed;
		bottom: 0;
		width: 100%;
		.inner {
			width: px750(750);
			height: px750(98);
			margin: 0 auto;
			background: #f9f9f9;
			border-top: 1px solid #f0f0f0;
			display-flex();
			align-items(center);
			a {
				font-size: px750(20);
				color: #666;
				item-flex(1)
				text-align: center;
				> i {
					display: inline-block;
					width: px750(44);
					height: px750(40);
					background-repeat: no-repeat;
					background-position: center center;
					background-size: 100%;
				}
				> label {
					display: block;
					margin-top: px750(10);
				}
				.icon-home {
					background-image: url("./img/home.png");
				}
				.icon-activity {
					background-image: url("./img/activity.png");
				}
				.icon-gift {
					background-image: url("./img/gift.png");
				}
				.icon-mine {
					background-image: url("./img/mine.png");
				}
				&.active {
					color: #e14143;
					.icon-home {
						background-image: url("./img/home-active.png");
					}
					.icon-activity {
						background-image: url("./img/activity-active.png");
					}
					.icon-gift {
						background-image: url("./img/gift-active.png"); 
					}
					.icon-mine {
						background-image: url("./img/mine-active.png");
					}
				}
			}
		}
	}
</style>