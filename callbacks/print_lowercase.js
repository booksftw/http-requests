const getHTML = require('../http-functions');

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

function printLowerCase(html){

  var htmlLowerCase = html.toLowerCase();
  console.log(htmlLowerCase);
}

getHTML(requestOptions, printLowerCase);