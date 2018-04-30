// Get source data
gulp.task('getData', function() {

  console.log("Getting football data from api");
  var metrics = ["fixtures","leagueTable","teams"];
  var datasuffix = ["fixtures","standings","teams"];
  var token = process.env.TOKEN;
  var competitions = ['445','446','447','448','450','451','452','453','455','456','459','464'];
  var leaguecodes= ['epl','elc','el1','el2','fl1','fl2','bl1','bl2','pd','sa','sb','cl'];
  var season = '201718';
  
  for (b = 0; b < competitions.length; b++) { 
    for (a = 0; a < metrics.length; a++) {
      console.log("Getting competition " + competitions[b] + metrics[a] + " data from api");
      var options = {
        'method': 'GET',
        'hostname': 'api.football-data.org',
        'path': '/v1/competitions/' + competitions[b] + '/' + metrics[a],
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
  
          fs.writeFile('./_data/' + leaguecodes[b] + "-" + season + "-" + datasuffix[a] + '.json', body, function(err) {
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
    }
  }

});


