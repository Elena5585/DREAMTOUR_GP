const gulp = require('gulp');

//HTML
const htmlclean = require("gulp-htmlclean");
const webHTML = require("gulp-webp-html");

//SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const csso = require ('gulp-csso');

const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const groupMedia = require('gulp-group-css-media-queries');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const header = require('gulp-header');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

//IMAGES
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const changed = require('gulp-changed');

const fonter = require('gulp-fonter');


const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: "Error: <%= error.message %>",
			sound: false
		})
	}
};

gulp.task('htmlDocs', function(){
	return gulp.src('./assets/*.html')
	.pipe(changed('./docs/'))
	.pipe(plumber(plumberNotify('HTML')))
	.pipe(webHTML())
	.pipe(htmlclean())
	.pipe(gulp.dest('./docs/'))
});

gulp.task('sassDocs', function(){
	return gulp.src('./assets/scss/*.scss')
	.pipe(changed('./docs/css/'))
	.pipe(plumber(plumberNotify('SASS')))
	.pipe(sourceMaps.init())
	.pipe(autoprefixer())
	.pipe(sassGlob())
	.pipe(groupMedia())
	.pipe(sass())
	.pipe(csso())	
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./docs/css/'));
});

gulp.task('fontsDocs', function(){
	return gulp.src('./assets/css/fonts/**/*', {encoding: false})
	.pipe(changed('./docs/css/fonts/'))
	.pipe(plumber(plumberNotify('FONTS')))
	.pipe(fonter({
		subset: [66, 67, 68, 69, 70, 71],
		formats: ['woff', 'woff2']
	  }))
  
	.pipe(gulp.dest('./docs/css/fonts/'))
});

gulp.task('fontsFileDocs', function(){
	return gulp.src('./assets/css/fonts.css', {encoding: false})
	.pipe(changed('./docs/css/'))
	.pipe(plumber(plumberNotify('FONTSFILE')))
	.pipe(gulp.dest('./docs/css/'))
});

gulp.task('jsDocs', function(){
	return gulp.src('./assets/js/*.js')
	.pipe(changed('./docs/js/'))
	.pipe(plumber(plumberNotify('JS')))
	.pipe(babel())
	.pipe(webpack({output: {filename: 'app.min.js'}}))
	.pipe(gulp.dest('./docs/js/'))
})

gulp.task('imagesDocs', function(){
	return gulp.src('./assets/files/images/**/*', {encoding: false})
	.pipe(changed('./docs/files/images/'))
	.pipe(webp())
	.pipe(gulp.dest('./docs/files/images/'))
	.pipe(gulp.src('./assets/files/images/**/*', {encoding: false}))
	.pipe(changed('./docs/files/images/'))
	.pipe(imagemin({verbose: true}))	
	.pipe(gulp.dest('./docs/files/images/'))
});

gulp.task('videosDocs', function(){
	return gulp.src('./assets/files/videos/**/*', {encoding: false})
	.pipe(changed('./docs/files/videos/'))
	.pipe(plumber(plumberNotify('VIDEOS')))
	.pipe(gulp.dest('./docs/files/videos/'))
});

gulp.task('iconsDocs', function(){
	return gulp.src('./assets/files/icons/*', {encoding: false})
	.pipe(changed('./docs/files/icons/'))
	.pipe(plumber(plumberNotify('ICONS')))
	.pipe(gulp.dest('./docs/files/icons/'))
});

gulp.task('jsonDocs', function(){
	return gulp.src('./assets/content/*.json')
	.pipe(changed('./docs/content/'))
	.pipe(plumber(plumberNotify('JSON')))
	.pipe(gulp.dest('./docs/content/'))
});

gulp.task('serverDocs', function(){
	return gulp.src('./docs/')
	.pipe(plumber(plumberNotify('SERVER')))
	.pipe(server({
		livereload: true,
		open: true
	}))
});

gulp.task('cleanDocs', function(done){
	if(fs.existsSync('./docs/')){
		return gulp.src('./docs/', {read: false})
		.pipe(clean({force: true}));
	}
	done();	
});

