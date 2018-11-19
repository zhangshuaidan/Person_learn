var path = require('path')
var Webpack = require('webpack')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var extractLess = new ExtractTextWebpackPlugin({
    filename: 'css/[name].bundle.css'
})
module.exports = {
    entry:{
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        // publicPath:'/dist/',
        filename: '[name]-bundle-[hash:5].js',
        // chunkFilename: '[name].bundle.js'
    },
    resolve:{
        alias:{
            jquery$:path.resolve(__dirname,'src/libs/jquery.min.js')
        }
    },
    module: {
        rules: [
            {
                test:/\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:{
                        loader: 'style-loader',
                        options:{
                            singleton:true

                        }
                    },
                    use:  [
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
                })

            },
            {
                test :/\.(png|jpg|jpeg|gif)$/,
                use:[
                    // {
                    //     loader:'file-loader',
                    //     options:{
                    //         publicPath:' ',
                    //         // outputPath:'dist/',
                    //         useRelativePath:true
                    //     }
                    // }
                    {
                        loader:'url-loader',
                        options:{
                            name:'[name]-[hash:5]min.[ext]',
                            limit:1000,
                            publicPath:'',
                            outputPath:'dist/',
                            useRelativePath:true
                        }
                    },
                    {
                    loader:'img-loader',
                        options:{
                            pngquant:{
                                quality:80 //压缩比例
                            }
                        }
                    }
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
                            outputPath:'dist/',
                            useRelativePath:true
                        }
                    }
                ]
            },
            {
                test:path.resolve(__dirname,'src/app.js'),
                use:[
                    {
                        loader:'imports-loader',
                        options:{
                            $:'jquery'
                        }
                    }
                ]
            }
            // {
            //     test:/\.js$/,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: {
            //                 presets:['env'],
            //                 plugins:['lodash']
            //             }
            //         }
            //     ]
            // },

        ]

    },

    plugins: [
        extractLess,
        new PurifyCSS({
            paths:glob.sync([
               './*.html',
               './src/*.js'
            ])

        }),
        // new webpack,ProvidePlugin({
        //     $:'jquery'
        // }),
        new Webpack.optimize.UglifyJsPlugin()
    ]
}