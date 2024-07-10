const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const header = require('gulp-header');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');




const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: "Error: <%= error.message %>",
			sound: false
		})
	}
};

gulp.task('htmlDev', function(){
	return gulp.src('./assets/*.html')
	.pipe(changed('./build/'))
	.pipe(plumber(plumberNotify('HTML')))
	.pipe(header('\ufeff'))
	.pipe(gulp.dest('./build/'))
});

gulp.task('sassDev', function(){
	return gulp.src('./assets/scss/*.scss')
	.pipe(changed('./build/css/'))
	.pipe(plumber(plumberNotify('SASS')))
	.pipe(header('\ufeff'))
	.pipe(sourceMaps.init())
	.pipe(sassGlob())
	.pipe(sass())
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./build/css/'));
});

gulp.task('fontsDev', function(){
	return gulp.src('./assets/css/fonts/**/*', {encoding: false})
	.pipe(changed('./build/css/fonts/'))
	.pipe(plumber(plumberNotify('FONTS')))
	.pipe(header('\ufeff'))
	.pipe(gulp.dest('./build/css/fonts/'))
});

gulp.task('fontsFileDev', function(){
	return gulp.src('./assets/css/fonts.css', {encoding: false})
	.pipe(changed('./build/css/'))
	.pipe(plumber(plumberNotify('FONTSFILE')))
	.pipe(header('\ufeff'))
	.pipe(gulp.dest('./build/css/'))
});

gulp.task('jsDev', function(){
	return gulp.src('./assets/js/*.js')
	.pipe(changed('./build/js/'))
	.pipe(plumber(plumberNotify('JS')))
	.pipe(babel())
	// .pipe(webpack(require('./webpack.config.js')))
	.pipe(webpack({output: {filename: 'app.min.js'}}))
	.pipe(gulp.dest('./build/js/'))
})

gulp.task('imagesDev', function(){
	return gulp.src('./assets/files/images/**/*', {encoding: false})
	.pipe(changed('./build/files/images/'))
	.pipe(imagemin({verbose: true}))
	.pipe(gulp.dest('./build/files/images/'))
});

gulp.task('videosDev', function(){
	return gulp.src('./assets/files/videos/**/*', {encoding: false})
	.pipe(changed('./build/files/videos/'))
	.pipe(plumber(plumberNotify('VIDEOS')))
	.pipe(gulp.dest('./build/files/videos/'))
});

gulp.task('iconsDev', function(){
	return gulp.src('./assets/files/icons/*', {encoding: false})
	.pipe(changed('./build/files/icons/'))
	.pipe(plumber(plumberNotify('ICONS')))
	.pipe(gulp.dest('./build/files/icons/'))
});

gulp.task('jsonDev', function(){
	return gulp.src('./assets/content/*.json')
	.pipe(changed('./build/content/'))
	.pipe(plumber(plumberNotify('JSON')))
	.pipe(gulp.dest('./build/content/'))
});

gulp.task('serverDev', function(){
	return gulp.src('./build/')
	.pipe(plumber(plumberNotify('SERVER')))
	.pipe(server({
		livereload: true,
		open: true
	}))
});

gulp.task('cleanDev', function(done){
	if(fs.existsSync('./build/')){
		return gulp.src('./build/', {read: false})
		.pipe(clean({force: true}));
	}
	done();	
});

gulp.task('watchDev', function(){
	gulp.watch('./assets/scss/*.scss', gulp.parallel('sassDev'));
	gulp.watch('./assets/*.html', gulp.parallel('htmlDev'));
	gulp.watch('./assets/css/fonts/**/*', gulp.parallel('fontsDev'))
	gulp.watch('./assets/css/fonts.css', gulp.parallel('fontsFileDev'))
	gulp.watch('./assets/js/*.js', gulp.parallel('jsDev'))
	gulp.watch('./assets/files/images/**/*', gulp.parallel('imagesDev'))
	gulp.watch('./assets/files/icons/*', gulp.parallel('iconsDev'))
	gulp.watch('./assets/files/videos/*', gulp.parallel('videosDev'))
	gulp.watch('./assets/content/*.json', gulp.parallel('jsonDev'))
});