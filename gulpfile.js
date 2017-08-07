// Gulp

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
})
