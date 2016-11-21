var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	concat 	= require('gulp-concat');

gulp.task('less', function() {
	gulp.src('app/**/*.less')
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('compile', function() {
	return gulp.watch('app/**/*.less', ['less']);
});