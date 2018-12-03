const getHTML = require('./http-functions');

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

function printHTML (html) {
  console.log(html, 'the full data from the print html function');
}

getHTML(requestOptions, printHTML);