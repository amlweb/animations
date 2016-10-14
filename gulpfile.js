'use strict';

const
    fs = require('fs'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream'),
    argv = require('argv'),
    clc = require('cli-color');

class Tasks {
    compileSass() {
        return gulp.src(['scss/*'])
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer())
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest('css/'));
    }

    watch() {
        gulp.watch('scss/**/*', () => {
            this.compileSass();
        });
    }
}

const tasks = new Tasks();

gulp.task('default', function() {
    tasks.compileSass();
    tasks.watch();
});