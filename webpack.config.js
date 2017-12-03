/**
 * Created by Bely Oleg on 28.11.2017.
 */
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context:  __dirname + '/src/js',
    entry: {
        pageA: './pageA',
        pageB: './pageB',
        vendor: ['jquery']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'vendor']
        })
        // new UglifyJsPlugin({
        //     sourceMap: true,
        //
        //     uglifyOptions: {
        //         output: {
        //             comments: false,
        //             beautify: false
        //         }
        //     }
        // })
    ]
};