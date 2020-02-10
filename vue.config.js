module.exports = {
	// 基本路径
	publicPath: "./",
	// 构建时的输出目录
	outputDir: "dist",
	// 放置静态资源的目录
	assetsDir: "static",
	// html 的输出路径
	indexPath: "index.html",
	//文件名哈希
	filenameHashing: true,
	//警告提示
	lintOnSave:false,
	//取消map文件的生成
	productionSourceMap:false,
	
	runtimeCompiler:true,
	css:{
		requireModuleExtension:true,
	},
	chainWebpack: config => {
		// 移除 prefetch 插件
		config.plugins.delete('prefetch'),
		// 移除 preload 插件
		config.plugins.delete('preload'),
		// 压缩代码
		config.optimization.minimize(true);
		// 分割代码
		config.optimization.splitChunks({
			chunks: 'all'
		})
		
	}
}
