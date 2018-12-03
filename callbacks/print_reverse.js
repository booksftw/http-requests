const getHTML = require('../http-functions');

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

function printReverse(html){

  var htmlReverse = html.split('').reverse();
  console.log(htmlReverse);
}

getHTML(requestOptions, printUpperCase);