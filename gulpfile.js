var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// Connect to server, with livereload enabled
gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// Keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

// Livereload the page
gulp.task('livereload', function (){
  gulp.src('./public/**/*').pipe( // Send all files to server
    connect.reload() // Which should then reload the files
  );
});

// Which files should we be watching? 
gulp.task('watch', function () {
  // Watch all sass files for change, 
  // and recompile them when needed
  gulp.watch('./sass/**/*.scss', ['sass']);

  // Watch all files for change, 
  //   and do a livereload of the page
  //   whenever ANY of them change
  gulp.watch('./public/**/*', ['livereload']);
});

// When running just gulp, do the following gulp-tasks
gulp.task('default', [
  'connect', //  connect to server, 
  'watch', //  watch for changes, 
  'sass' //  and compile sass
]);
// Notice how these correspond to the tasks we just created!