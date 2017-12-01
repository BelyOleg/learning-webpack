/**
 * Created by Bely Oleg on 28.11.2017.
 */
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
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
   }
};