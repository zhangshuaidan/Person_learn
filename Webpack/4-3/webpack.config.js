
var Webpack = require('webpack')
var PurifyWebpack = require('purifycss-webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlInlinkChunkPlugin = require('html-webpack-inline-chunk-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var path = require('path')
var glob = require('glob-all')

var extractLess = new ExtractTextWebpackPlugin({
    filename: 'css/[name]-bundle-[hash:5].css'
})

module.exports = {
    entry:{
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename: '[name]-bundle-[hash:5].js'
    },
    devtool:'source-map',
    // devtool:'cheap-module-source-map',
    devServer:{
        inline:false, //inline 模式
        proxy:{
            '/':{
                target:"https://weibo.api...",
                changeOrigin:true,
                logLevel:'debug',
                pathRewrite:{
                    '^/comments':'/api/comments'
                },
                headers:{
                    'Cookie':'balabalabalaba'
                }
            }
        },
        hot:true,
        hotOnly:true,
        port: 9001,
        overlay:true,
        historyApiFallback:{
            rewrites:[
                {
                    from: /^\/([a-zA-z0-9]+\/?)([])/,
                    to:function (context) {
                        return '/'+context.match[1]+context.match[2]+'.html'
                    }
                }
            ]
        }

    },
    resolve:{
        alias:{
            jquery$:path.resolve(__dirname,'src/libs/jquery.min.js')
        }
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                include:[path.resolve(__dirname,'src')],
                exclude:[path.resolve(__dirname,'src/libs')]
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env']
                        }
                    },
                    {
                        loader:'eslint-loader',
                        options:{
                            formatter:require('eslint-friendly-formatter')
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options:{
                            singleton:true,
                            sourceMap:true
                        }
                    },
                        {
                            loader:'css-loader',
                            options: {
                                importLoaders:2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins:[
                                    require('postcss-sprites')({
                                        spritePath:'dist/assets/imgs/sprites',  //生产雪碧图地址
                                        retina:true //开始视网膜屏幕处理
                                    }),
                                    // require('autoprefixer')(),
                                    require('postcss-cssnext')()

                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                ]

            },
            {
                test :/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            publicPath:' ',
                            // outputPath:'dist/',
                            useRelativePath:true
                        }
                    }
                    // {
                    //     loader:'url-loader',
                    //     options:{
                    //         name:'[name]-[hash:5]min.[ext]',
                    //         limit:1000,
                    //         outputPath:'assets/imgs/',
                    //         // useRelativePath:true
                    //     }
                    // },
                    // {
                    // loader:'img-loader',
                    //     options:{
                    //         pngquant:{
                    //             quality:80 //压缩比例
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test:/\.(rot|woff2|woff|ttf|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:5000,
                            publicPath:'',
                            // outputPath:'dist/',
                            useRelativePath:true
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{
                            attrs:['img:src','img:data-src']
                        }
                    }
                ]
            }
        ]

    },

    plugins: [
        extractLess,
        new PurifyWebpack({
            paths:glob.sync([
               './*.html',
               './src/*.js'
            ])

        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'manifest'
        }),
        new HtmlInlinkChunkPlugin({
            inlineChunks: ['manifest']
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
            chunks: ['app'],
            minify: {
                collapseWhitespace:true
            }
        }),

        // new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NameModulesPlugin(),
        new Webpack.ProviderPlugin({
            $:'jquery'
        })
    ]
}