const https = require('https');


function getHTML(options, callback) {



  https.get(requestOptions, function(res){
    res.setEncoding('utf8');

    var fullData = '';
    res.on('data', function(data){
      fullData += data;
    })

    res.on('end', function(){
      // console.log('the full data', fullData);
      printHTML(fullData)
    })
  })
}

function printHTML (html) {
  console.log(html, 'the full data from the print html function');
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions);