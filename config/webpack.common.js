const path = require('path');

module.exports = {
    entry: {
        app: ['./src/index.js']
    },

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[chunkhash:7].js',
        publicPath: ''
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[hash:7].[ext]'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.json']
    }
}