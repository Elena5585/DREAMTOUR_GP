'use strict';

const gulp = require('gulp');
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task('default', 
gulp.series('cleanDev', gulp.parallel('htmlDev', 'sassDev', 'fontsDev', 'fontsFileDev', 'jsDev', 'imagesDev', 'iconsDev', 'videosDev', 'jsonDev'), 
gulp.parallel('serverDev', 'watchDev')));

gulp.task('docs', 
gulp.series('cleanDocs', gulp.parallel('htmlDocs', 'sassDocs', 'fontsDocs', 'fontsFileDocs', 'jsDocs', 'imagesDocs', 'iconsDocs', 'videosDocs', 'jsonDocs'), 
gulp.parallel('serverDocs')));