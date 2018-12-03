const https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(res) => {

    response.setEncoding('utf8');
  });
}