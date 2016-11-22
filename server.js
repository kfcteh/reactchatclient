var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  })
  .listen(process.env.PORT || 3000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Server Running',process.env.PORT);
  });
