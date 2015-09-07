var gulp = require("gulp");

var config = require("./gulp/config.json");
var run = require("./gulp/jobs/run.js");

//require("./gulp/tasks/ts.js");
//require("./gulp/tasks/lint.js");
//require("./gulp/tasks/tests.js");
require("./gulp/tasks/clean.js");
//require("./gulp/tasks/meteor.js");
require("./gulp/tasks/modularize.js");
//require("./gulp/tasks/order.js");
//require("./gulp/tasks/yuidoc.js");

var src = config.src;

gulp.task("prepare", ["clean-destination"], run(["order"]))
//gulp.task("order-and-modularize", ["prepare"], run(["modularize"]));
//gulp.task("build-destination", [], run(["order-and-modularize"]));
//gulp.task("build-temp", ["tslint", "clean", "ts-modules-debug"], run(["order-and-modularize"]));
//gulp.task("documentation", [], run(["yuidoc"]));
gulp.task('watch', function() {
    gulp.watch([".tmp/**/*.js"], ['modularize-tmp']);
});

gulp.task("default", ["watch"]);
