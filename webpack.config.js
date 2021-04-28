const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//引入clean-webpack-plugin，这个在打包之前清除打包生成的文件 （dist）
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'app.js'
    },
    devServer: {
        contentBase: './build',
        compress: true,
        open:true,
        port: 8080
    },
    //打包规则
    module:{
        rules:[{
            test:/\.vue$/, //遇到与vue结尾的文件，使用vue-loader来打包
            loader:'vue-loader'
        }]
    },
    // 插件

    plugins:[
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('http://www.baidu.com.com')
        }),
        new HtmlWebpackPlugin({
            template:'./index.html'

        }),
        new CleanWebpackPlugin(), // 打包之前先清空生成的打包文件（dist）
    ],
    mode:"development",
    target: "web",
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }

}
