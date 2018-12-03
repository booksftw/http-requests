const getHTML = require('../http-functions');

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

function printUpperCase(html){

  var htmlUpperCase = html.toUpperCase();
  console.log(htmlUpperCase);
}

getHTML(requestOptions, printUpperCase);