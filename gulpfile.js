var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var htmlIncluder = require('gulp-htmlincluder');

//Merge css
gulp.task('merge', function(){
    gulp.src('dev/css/*.css')
          .pipe(concatCSS('style.css'))
          .pipe(gulp.dest('build/'))
          })