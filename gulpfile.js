var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var includer = require('gulp-htmlincluder');

//Merge css
gulp.task('merge', function(){
    gulp.src('dev/css/*.css')
          .pipe(concatCSS('style.css'))
 .pipe(cleanCSS({compatibility:'ie8'}))
          .pipe(gulp.dest('build/'))
          })

// Include HTML
 
gulp.task('html', function() {
    gulp.src('dev/**/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('build/'));
});

