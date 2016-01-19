var gulp = require('gulp');
var coffee = require('gulp-coffee');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var browserSync = require('browser-sync').create();


var paths = {
  scripts: './coffee/**/*.coffee',
  sass: './sass/**/*.scss',
  html: '../*.html'
};


gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del.sync(['../js', '../css'], { force:true });
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      // .pipe(uglify())
      // .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../js'));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "../"
    });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['scripts']).on('change', browserSync.reload);
  gulp.watch(paths.html).on('change', browserSync.reload);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve', 'watch', 'sass', 'scripts']);