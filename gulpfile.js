var gulp = require('gulp');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');


var allTasks = [
  'clientscripts', 
  'serverscripts', 
  'vendorstyle', 
  'copy',
  'watch'
];

gulp.task('vendorstyle', function() {
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('serverscripts', function () {
  return gulp.src('src/js/server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app/scripts/'));
});

gulp.task('clientscripts', function () {
  return gulp.src('src/js/client/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('copy', function() {
  gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('./public/css/fonts'));

  gulp.src([
    './node_modules/requirejs/require.js',
    './node_modules/underscore/underscore.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/backbone/backbone.js'
  ]).pipe(gulp.dest('./public/js/vendor'));

});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.js'], allTasks);
});


gulp.task('default', allTasks);