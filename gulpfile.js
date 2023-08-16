//We have to import everything from gulp
const { src, dest, watch, series } = require("gulp");
//import sass compiler and tell it to compile sass element
const sass = require("gulp-sass")(require("sass"));

//Take where our scss file is, the relative path, might CHANGE!
function buildStyles() {
  return (
    src("Kin/**/*.scss")
      .pipe(sass())
      //Destination where the scss is gonna be compiled to css
      .pipe(dest("css"))
  );
}

//Watching function
function watchTask() {
  watch(["Kin/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
