var gulp = require('gulp');

gulp.task('hola', function () {
  console.log('Hola');
});

gulp.task('hola', function (cb) {
  setTimeout(function () {
    console.log('Hola');
    cb();
  }, 5000);

})

//En la version 3 para esperar que se ejecute primer una funcion antes que la otra

// gulp.task('mundo', ['hola'], function () {
//   console.log('Mundo');
// });

gulp.task('mundo', function () {
  console.log('Mundo');
});

//en la version 3
// gulp.task('default', ['hola', 'mundo']);

//En la version 4
gulp.task('default', gulp.series('hola', 'mundo'));