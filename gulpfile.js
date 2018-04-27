var gulp        = require('gulp');
var gutil       = require('gulp-util');
var cssmin      = require('gulp-cssmin');
var shell       = require('gulp-shell');
var connect     = require('gulp-connect');
var fs          = require('fs');
var http        = require('http');
var gravatar    = require('gravatar');
var runSequence = require('run-sequence');

// load environment variables
require('dotenv').config()

var paths = {
  source: '_site',
  deploy: 'dist'
};


// Minify and copy all CSS
gulp.task('styles', function() {
  return gulp.src(paths.source + '/assets/*.css')
    //.pipe(cssmin())
    .pipe(gulp.dest(paths.deploy + '/assets/'));
});


// build jekyll
gulp.task('jekyll', function() {
  return gulp.src('', {quiet: false})
    .pipe(shell([
      'rm -rf ' + paths.deploy,
      'jekyll build',
      'cp -R _site/ ' + paths.deploy
    ]));
});


// List the available tasks
gulp.task("tasks", function() {
  console.log("Available gulp tasks:");
  var t = Object.keys(gulp.tasks);
  for (var i = t.length - 1; i >= 0; i--) {
    console.log("  gulp", t[i]);
  }
});


// Get source data
gulp.task('getData', function() {

  console.log("Getting football data from api");

  var token = process.env.TOKEN;

  var options = {
    'method': 'GET',
    'hostname': 'api.football-data.org',
    'path': '/v1/soccerseasons/445/fixtures',
    'headers': {
      'X-Auth-Token': token
    }
  };

  http.get(options, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {

      // Try and write the result to a data file

      fs.writeFile('./_data/epl201718fix.json', body, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Comments data saved.");
        }
      });

    });
  //})
  //.on('error', function(e) {
  //  console.log("Got error: ", e);
  });

});



// Build and optimise the site and serve it locally.
gulp.task('build', function(callback) {
  runSequence(
    'getData',
    'jekyll',
    ['styles'],
    callback
  );
});


// run a local server
gulp.task('serve', ['build'], function() {
  connect.server({
  root: paths.deploy,
  port: 8000,
  });
});


// The default task.
gulp.task('default', ['build']);
