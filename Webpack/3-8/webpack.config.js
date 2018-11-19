var path = require('path')
var Webpack = require('webpack')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry:{
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath:'/dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader: 'style-loader',
                        options:{
                            // insertInto: '#app',
                            singleton:true,
                            // transform: './css.tranform.js'
                        }
                    },
                    use:  [
                        // 'style-loader','common-loader'

                        {
                            loader:'css-loader',
                            options: {
                                // minimize: true,
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]'  // 设置标签名称
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins:[
                                    // require('autoprefixer')(),
                                    require('postcss-cssnext')()

                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })

            },
            {
                test:/\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:['env'],
                            plugins:['lodash']
                        }
                    }
                ]
            }
        ]

    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false  // 设置css提取范围 false 表示提取初始化的，不提取异步加载
        }),
        new PurifyCSS({
            paths:glob.sync([
                path.join(__dirname,'./*.html'),
                path.join(__dirname,'./src/*.js')
            ])

        }),
        new Webpack.optimize.UglifyJsPlugin()
    ]
}