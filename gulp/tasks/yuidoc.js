var gulp = require("gulp");

var config = require("./../config.json");
var yuidoc = require("gulp-yuidoc");

gulp.task('yuidoc', function () {
  console.log("yes")
  gulp.src("./src/**/*.ts")
    .pipe(yuidoc())
    .pipe(gulp.dest(config.docs));
});
