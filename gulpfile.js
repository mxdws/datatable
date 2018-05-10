var gulp        = require('gulp');
var gutil       = require('gulp-util');
var cssmin      = require('gulp-cssmin');
var shell       = require('gulp-shell');
var connect     = require('gulp-connect');
var fs          = require('fs');
var http        = require('http');
var gravatar    = require('gravatar');
var runSequence = require('run-sequence');
var request     = require('request');

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
      './bashbuild.sh',
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
/*gulp.task('getData', function(callback) {

  console.log("Getting football data from api");

  // Send out a call for Repeater, which is a recursive callback
  // function to populate data tables one by one
  // That solution came from this article
  // http://www.richardrodger.com/2011/04/21/node-js-how-to-write-a-for-loop-with-callbacks/#.WuzE6y-ZPVr

  repeater(0)
  repeater(1)
  repeater(2)
  repeater(3)
  repeater(4)
  repeater(5)
  repeater(6)
  repeater(7)
  repeater(8)
  repeater(9)
  repeater(10)
  repeater(11)
  repeater(12)
  repeater(13)
  repeater(14)
  repeater(15)
  repeater(16)
  repeater(17)
  repeater(18)
  repeater(19)
  repeater(20)
  repeater(21)
  repeater(22)
  repeater(23)
  repeater(24)
  repeater(25)
  repeater(26)
  repeater(27)
  repeater(28)
  repeater(29)
  repeater(30)
  repeater(31)
  repeater(32)
  repeater(33)
  repeater(34)
  repeater(35)
  callback();
});

function repeater(counter) {
  var metrics = ["fixtures","leagueTable","teams"];
  var datasuffix = ["fixtures","standings","teams"];
  var token = process.env.TOKEN;
  var competitions = ['445','446','447','448','450','451','452','453','455','456','459','464'];
  var leaguecodes= ['epl','elc','el1','el2','fl1','fl2','bl1','bl2','pd','sa','sb','cl'];
  var season = '201718';

  //if ( counter < ( competitions.length * metrics.length )) {
    var a = Math.floor(counter / 3);
    var b = counter % 3;
    console.log("Competition: " + a + ", Metric: " + b)
    console.log("Getting competition " + competitions[a] + metrics[b] + " data from api");

    var options = {
      'url': 'https://api.football-data.org/v1/competitions/' + competitions[a] + '/' + metrics[b],
      'headers': {
        'X-Auth-Token': token
      }
    };

    request(options, function(err, response, body){
      if(!err && response.statusCode === 200){
        //var body = JSON.parse(body);
        //var comments = {};
        // write our data to a file where our site generator can get it.
        fs.writeFile('./_data/' + leaguecodes[a] + '-' + season + '-' + datasuffix[b] + '.json', body, function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log('External data saved - ' + leaguecodes[a] + '-' + season + '-' + datasuffix[b] + '.json');
            //repeater( counter + 1 );
          }
        });

      } else {
        console.log(err);
        console.log("Couldn't get data :-(");
      }
    });
  //}
}*/


// Build and optimise the site and serve it locally.
gulp.task('build', function(callback) {
  runSequence(
    //'getData',
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
