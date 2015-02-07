
var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');

gulp.task('html', function(){
	return gulp.src('templates/jade/*.jade').
		pipe(jade({
			pretty:true
		})).
		pipe(gulp.dest(''));
});

gulp.task('css', function(){
	return gulp.src('styles/stylus/*.styl').
		pipe(stylus({
			pretty:true
		})).
		pipe(gulp.dest('styles/'));
});

gulp.task('reload', function(){
	browserSync({
		server:{
			baseDir:'./'
		}
	});
});

gulp.task('frontend', ['reload'], function(){
	gulp.watch("styles/stylus/*.styl", ['css', browserSync.reload]);
	gulp.watch('templates/jade/*.jade',['html', browserSync.reload]);
})