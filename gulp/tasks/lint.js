var gulp = require("gulp");

var config = require("./../config.json");
var tslint = require("./../jobs/tslint.js");

var src = config.src;

gulp.task("tslint", tslint([src + "/src/**/*.ts", "!" + src + "typings/**/*.ts"]));
