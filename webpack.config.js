/**
 * Created by Bely Oleg on 28.11.2017.
 */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
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
        new UglifyJsPlugin({
            sourceMap: true,

            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false
                }
            }
        })
    ]
};