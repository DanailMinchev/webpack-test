import gulp from 'gulp'
import del from 'del'

export const clean = () => {
  return del(['dist'])
}

gulp.task('default', defaultTask)

function defaultTask (done) {
  // place code for your default task here
  console.log('processing defaultTask here ...')
  done()
}
