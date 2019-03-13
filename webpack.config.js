let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports={
    module:{
        rules:[
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
    }),
    ],
    mode: 'development',
    devServer: {
        compress: true,
        port: 9000,
        open:true,
        hot:true
    }
}