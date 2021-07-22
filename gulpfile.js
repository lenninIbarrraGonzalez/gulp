var gulp = require('gulp');

gulp.task('hola', function () {
  console.log('Hola');
});

gulp.task('mundo', function () {
  console.log('Mundo');
})

//en la version 3
// gulp.task('default', ['hola', 'mundo']);

//En la version 4
gulp.task('default', gulp.series('hola', 'mundo'));