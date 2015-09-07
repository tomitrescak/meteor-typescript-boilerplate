var gulp = require("gulp");
var path = require("path");
var del = require("del");
var config = require("../config.json");

gulp.task("clean-temp", function(cb) {
  // delete javascript

  var files = [path.join(config.tmp)];
  del(files, cb);
});

gulp.task("clean-destination", function(cb) {
  // delete javascript

  var files = [path.join(config.destination)];
  del(files, cb);
});

gulp.task("clean", [], function(cb) {
  // delete javascript

  var files = [path.join(config.tmp), path.join(config.destination)];
  del(files, cb);
});
