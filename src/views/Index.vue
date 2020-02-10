<template>
	<div class="home">
		<div> 我不知打 a </div>
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App 122" />
		<div> 你知道吗？ </div>
		<i class="iconfont el-icon-third-people"></i>
		<div>
			<i class="iconfont el-icon-third-createtask"></i>
			<i class="iconfont el-icon-third-barrage"></i>
			<i class="iconfont el-icon-third-createtask"></i>
			<i class="iconfont el-icon-third-people"></i>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'index',
		components: {
			HelloWorld
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
<style scoped>
	@import url("../assets/iconfont/iconfont.css");
	
</style>