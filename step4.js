const https = require('https');


function getAndPrintHTML(options) {



  https.get(requestOptions, function(res){
    res.setEncoding('utf8');

    var fullData = '';
    res.on('data', function(data){
      fullData += data;
    })

    res.on('end', function(){
      console.log('the full data', fullData);
    })
  })
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);