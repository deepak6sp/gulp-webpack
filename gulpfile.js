var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');

gulp.task('webpack',[],function(){
    return gulp.src('./app/*.js')
    .pipe (stream(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('webpack-dev-server', function(callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;
    // Start a webpack-dev-server

    new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        stats: {
            colors: true
        }
        // server and middleware options
        }).listen(8080, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            // Server listening
            gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/public/views/index.html");

            // keep the server alive or continue?
            // callback();
    });
});

gulp.task('watch', function() {
    gulp.watch('./app/*.js', ['webpack']);
});
gulp.task("default",['webpack-dev-server','watch']);