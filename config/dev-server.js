const express = require('express');
const sysConfig = require('./sys.config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev'); 

const app = express();

var port = sysConfig.port;
var compiler = webpack(webpackConfig);
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: false,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
})
app.use(devMiddleware);
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('==> Listening at http://localhost:' + port);
})