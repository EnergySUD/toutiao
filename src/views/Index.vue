<template>
	<div class="index">
		<su-top activeType='0'></su-top>
		<su-tab activeType='0'></su-tab>
		<su-tabbar active="0"></su-tabbar>
	</div>
</template>

<script>
	// @ is an alias to /src
	import suTop from '@/components/Top/index.vue'
	import suTab from '@/components/Tab/index.vue'
	import suTabbar from '@/components/Tabbar/index.vue'
	
	

	export default {
		name: 'index',
		components: {
			suTop,
			suTab,
			suTabbar,
			
		},
		data(){
			return {
				
			}
		},
		created() {
			this.getData();
		},
		methods: {
			getData(){
				this.$http.get('/posts').then(res =>{
					console.log(res);
				}).catch(err =>{ })
			}
		},

	}
</script>
<style scoped lang="scss">
	@import url("../assets/iconfont/iconfont.css");
	.index{
		margin:3.125rem 0 3.125rem;
	}
</style>