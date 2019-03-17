const path= require("path")
const nodeExternals= require("webpack-node-externals")//不处理node的依赖包
const merge= require("webpack-merge")
const config= require("./webpack.base.js")

const serverConfig={
    target:"node",//告诉webpack，打包的是服务端代码，一些node模块不需要打包
    mode:"development",//打包的环境
    entry:"./src/server/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"build")
    },
    externals:[nodeExternals()]
}
module.exports=merge(config,serverConfig)