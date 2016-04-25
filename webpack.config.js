var webpack = require("webpack");
var paths = require("path");
var node_mod = __dirname + '/node_modules'

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  context:__dirname,
  entry: {
    app: ["./index.js"],
    vendor : ['bootstrap_js','jquery']
  },
  output: {
  	path: paths.join(__dirname, '/public/js/'),
    filename: "bundle.min.js",
    publicPath: "/public/js/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  },
   plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module:{
    noParse:[]

  },
  resolve:{
    alias: {},
  	extensions: ['','.js']
  },
   devtool: "sourcemap",
    debug: true
};

config.addVendor("jquery",node_mod+"/jquery/dist/jquery.min.js");
config.addVendor("bootstrap_js",node_mod+"/bootstrap/dist/js/bootstrap.min.js");

module.exports = config;
