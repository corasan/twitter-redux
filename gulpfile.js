var gulp = require('gulp'),
    // nodemon = require('nodemon'),
    // browserify = require('browserify'),
    // watchify = require('watchify'),
    // gutil = require('gulp-util'),
    // babelify = require('babelify'),
    // source = require('vinyl-source-stream'),
    webpack = require('webpack-stream');


// var bundler = watchify(browserify('./app/components/App.jsx', {
//     debug: true,
//     cache: {},
//     packageCache: {},
//     fullPaths: true
// }));
//
// function bundle(file) {
//   if (file) gutil.log('Recompiling' + file);
//   return bundler
//     .bundle()
//     .on('error', gutil.log.bind(gutil, "Browserify Error"))
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('dist'))
// }
// bundler.on('update', bundle)
//
// gulp.task('build', function() {
//     bundle();
// });

gulp.task('build', function() {
    gulp.src('./app/components/index.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});

// gulp.task('serve', function() {
//     nodemon({
//         script: 'server.js'
//     }).on('change', function() {
//         console.log('Restarting app...');
//     })
// });

gulp.task('default', ['build']);
