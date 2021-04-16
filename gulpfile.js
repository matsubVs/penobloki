const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const babel = require('gulp-babel'); 
const imagemin = require('gulp-imagemin'); 
const plumber = require('gulp-plumber'); 
const shorthand = require('gulp-shorthand');
const gcmq = require('gulp-group-css-media-queries'); 
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');


const path = {
    build: {
        js: 'build/js',
        css: 'build/css/',
        assets: 'build/assets'
    },

    src: {
        js: 'src/js/index.js',
        scss: 'src/scss/main.scss',
        assets: 'src/assets/*.*'
    },

    watch: {
        js: 'src/js/**/*.js',
        scss: 'src/scss/**/*.scss'
    }
}

const minImg = (cb) => {
    return gulp.src(path.src.assets)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.assets))
}

const compileStyle = (cb) => {
    return gulp.src(path.src.scss)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css))
}

const watch = (cb) => {
    return gulp.watch(path.watch.scss, compileStyle);
}

exports.watch = watch;
exports.img = minImg;