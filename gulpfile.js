var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var includer = require('gulp-htmlincluder');
var connect = require('gulp-connect');
var livereload = require('livereload');

//Merge and clean css
gulp.task('mergeFile', function(){
    gulp.src('dev/css/*.css')
          .pipe(concatCSS('style.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest('build/'))
          })

//Include HTML files into one file
gulp.task('html', function(){
      gulp.src('dev/**/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/'))
})

//Gulp connect
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});