const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

function buildStyle() {
	return src('assets/scss/index.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		.pipe(purgecss({ content: ['*.html'] }))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('assets/css'));
}

function watchSass() {
	watch(['assets/scss/index.scss', '*.html'], buildStyle);
}

exports.default = series(buildStyle, watchSass);
