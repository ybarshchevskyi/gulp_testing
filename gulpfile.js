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
          .pipe(connect.reload())
          })

//Include HTML files into one file
gulp.task('html', function(){
      gulp.src('dev/**/*.html')
    	  .pipe(includer())
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload())
})

//Gulp connect
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

//Automative page refreshing
gulp.task('default', function(){
    gulp.start('connect', 'html', 'mergeFile');
    
    gulp.watch(['dev/**/*.html'], function(event){
        gulp.start('html');
                                            });
    gulp.watch(['dev/css/**/*.css'], function(event){
        gulp.start('mergeFile');
    });
});