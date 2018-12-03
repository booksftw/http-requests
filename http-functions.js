const https = require('https');
// getHTML(requestOptions);

module.exports = function getHTML(options, callback){
    https.get(options, function(res){
    res.setEncoding('utf8');

    var fullData = '';
    res.on('data', function(data){
      fullData += data;
    })

    res.on('end', function(){
      // console.log('the full data', fullData);
      return callback(fullData)
    })
  })
}