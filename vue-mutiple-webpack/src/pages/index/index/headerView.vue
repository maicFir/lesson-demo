<template>
	<header class="header">
		<div class="inner" id="J_headerTab">
			<a href="#/" :class="{active:$route.path=='/'}">全部信息</a>
			<template v-for="item in typeList">
				<a :href="'#/type/'+item.id" :class="{active:$route.params.id==item.id}">{{item.name}}</a>
			</template>
		</div>
	</header>
</template>

<script>
	import Vue from 'vue';
	import indexApi from 'api/index';

	export default {
		
		data() {
			return {
				typeList: []
			}
		},

		mounted() {
			indexApi.getTypes().then(result => {
				this.typeList = result.data;
			})
		}
	}
</script>

<style lang="stylus">
	
</style>