var gulp = require('gulp');
var sass = require('gulp-sass');


// gulp.task('hola', function () {
//   console.log('Hola');
// });

// gulp.task('hola', function (cb) {
//   setTimeout(function () {
//     console.log('Hola');
//     cb();
//   }, 5000);

// })

//En la version 3 para esperar que se ejecute primer una funcion antes que la otra

// gulp.task('mundo', ['hola'], function () {
//   console.log('Mundo');
// });

// gulp.task('mundo', function () {
//   console.log('Mundo');
// });

//en la version 3
// gulp.task('default', ['hola', 'mundo']);

//En la version 4

gulp.task('sass', function () {
  return gulp.src('src/style.sass') //Leer el archivo
    .pipe(sass()) //compilar sass
    .pipe(gulp.dest('.tmp')); //guardar el archivo, crea un archivo style.css listo para el navegador
});

gulp.task('watch', function () {
  //espera que haya cambios en el archivo style,sass y corre la tarea sass
  gulp.watch('src/style.sass', ['sass']);
});


gulp.task('default', ['sass']);


