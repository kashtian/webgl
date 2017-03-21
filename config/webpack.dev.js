const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
var baseConfig = require('./webpack.common');

baseConfig.entry.app.push('webpack-hot-middleware/client?reload=true');
baseConfig.output.filename = '[name].js';

module.exports = Object.assign({}, baseConfig, {
    devtool: '#source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HTMLPlugin({
            template: 'src/index.html'
        })
    ]
})