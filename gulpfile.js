'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var	prefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var replace = require('gulp-replace-path');

var historyApiFallback = require('connect-history-api-fallback');

// MyAddings Start
var uglify = require("gulp-uglify"),            // minificates piped files
    browserSync = require("browser-sync");
var	reload = browserSync.reload;
// MyAddings END

var path = {
    testBuild: "./www",
    project: './src',
    //vendor: './source/bower_components'
};

var config = {
    server: {
        baseDir: "./www",
        middleware: [ historyApiFallback() ]
    },
    //tunnel: true,
    notify: false,
    host: 'localhost',
    port: 9000
};

gulp.task('inject', function () {
    var sources = gulp.src([
        path.testBuild + '/scripts/*.js',
        path.testBuild + '/stylesheets/*.css'
    ], {read: false});

    return gulp.src(path.project + '/index.html')
        .pipe(inject(sources, {ignorePath: '/www'}))
        .pipe(gulp.dest(path.testBuild))
        .pipe(debug({
            title: 'inject'
        }))
        .pipe(reload({stream: true}));
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function () {
    return gulp.src('www', {read: false})
        .pipe(clean());
});

gulp.task('stylesheets', function() {
    return gulp.src(path.project + '/app/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'})) //'compact', //'compressed', //'nested'
        .pipe(prefixer())
        .pipe(debug())
        //.on('error', gutil.log)
        .pipe(concat('custom.css'))
        .pipe(gulp.dest(path.testBuild + '/stylesheets'))
        .pipe(reload({stream: true}));
});

gulp.task('minAppJs', function() {
    return gulp.src([
            path.project + '/app/**/*.js',
        ])
        .pipe(debug())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(path.testBuild + '/scripts'))
        .pipe(reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src(path.project + '/images/**/**.*')
        .pipe(debug())
        .on('error', gutil.log)
        .pipe(gulp.dest(path.testBuild + '/images'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('html', function() {
    return gulp.src([
            path.project + '/*.html', path.project + '/*.xml'
        ])
        .pipe(debug())
        .on('error', gutil.log)
        .pipe(gulp.dest(path.testBuild))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('templates', function() {
    return gulp.src([
            path.project + '/app/**/*.html'
        ])
        .pipe(debug())
        .on('error', gutil.log)
        .pipe(gulp.dest(path.testBuild + '/templates'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task("bower_components", function() {
    return gulp.src('bower_components/**/*.*')
        .pipe(gulp.dest(path.testBuild + '/bower_components'));
});

gulp.task("fonts", function() {
    return gulp.src(path.project + '/fonts/**/**.*')
        .pipe(debug())
        .pipe(gulp.dest(path.testBuild + '/fonts'));
});



//  - - - - - - - - - - - - - - - - - - - - -
gulp.task('watch', function() {
    gulp.watch(path.project + '/*.html', ['html']);
    gulp.watch(path.project + '/app/**/**/*.html', ['templates', 'stylesheets']);
    gulp.watch(path.project + '/app/**/**/*.scss', ['stylesheets']);
    gulp.watch(path.project + '/app/*.scss', ['stylesheets']);
    gulp.watch(path.project + '/app/**/*.js', ['minAppJs']);
    gulp.watch('/bower_components', ['bower_components']);
});

gulp.task('build', [
    'minAppJs',
    'stylesheets',
    'html',
    'bower_components',
    'img',
    'fonts',
    'templates',
    'inject'
]);

gulp.task('build-and-watch', [
    'build',
    'watch'
]);

//gulp.task('build-inject', [
//    'build',
//    'inject'
//]);

gulp.task('default', [
    'build',
    'webserver',
    'watch'
]);
