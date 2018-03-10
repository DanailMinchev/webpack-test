import gulp from 'gulp';

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  console.log('processing defaultTask here ...');
  done();
}
