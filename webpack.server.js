const path= require("path")
const nodeExternals= require("webpack-node-externals")//不处理node的依赖包
module.exports={
    target:"node",//告诉webpack，打包的是服务端代码，一些node模块不需要打包
    mode:"development",//打包的环境
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"build")
    },
    externals:[nodeExternals()],
    module:{
        rules:[
            {
                test:/.js?$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                options:{
                    presets:['react','stage-0',['env',{
                        targets:{
                            browsers:['last 2 versions']
                        }
                    }]]
                }
            }
        ]
    }
}