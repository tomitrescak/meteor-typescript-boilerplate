var gulp = require("gulp");

var config = require("./../config.json");
var replace = require('gulp-replace');
var changed = require('gulp-changed');
var deleted = require('gulp-deleted');

gulp.task('modularize', function () {

  // remove "var ModuleName;" from all files"
  for (var i in config.modules) {
    console.log("Modularising: " + config.modules[i]);
    var regex = new RegExp("var " + config.modules[i] + ";", "g");
    gulp.src([config.destination + "/**/*.js"])
      .pipe(replace(regex, ""))
      .pipe(gulp.dest(config.destination));
  }
});


gulp.task('modularize-tmp', function () {

  // remove "var ModuleName;" from all files"
  for (var i in config.modules) {
    console.log("Modularising: " + config.modules[i]);
    var regex = new RegExp("var " + config.modules[i] + ";", "g");
    gulp.src([config.tmp + "/**/*.js"])
      .pipe(deleted(config.destination))
      .pipe(changed(config.destination))
      .pipe(replace(regex, ""))
      .pipe(gulp.dest(config.destination));
  }
});
