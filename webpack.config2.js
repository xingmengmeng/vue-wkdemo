var webpack = require('webpack');
module.exports = {
    entry: {
        index:'./public/js/index.js',
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module:{
        //加载器配置
        loaders:[
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {// 如果引用了png|jpg|svg图片,则会用 image-webpack 进行压缩 (wrapper around imagemin)
                // 并转化成 data64 URL 格式
                test: /\.(png|jpe?g|svg|gif)$/i,
                loaders: [
                    'url-loader?limit=8192&name=img/[name].[hash].[ext]',
                    'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
        ]
    },

}
