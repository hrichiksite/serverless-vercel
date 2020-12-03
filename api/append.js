module.exports = async (req, res) => {
var https = require('https');

/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host : 'script.google.com', // here only the domain name
    port : 443,
    path : '/macros/s/AKfycbznvGSPRcCSI92QKM-Ol8nwnooXgW7zkwkzDveCIFwdqcxgMKgp/exec?shid=1wa3RIo6kbNXiL03qUxp-HQO8OOQFMRZYY3UVL_2Pq_c&sn=Sheet1&d1=John&d2=39', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};


// do the GET request
var reqGet = https.request(optionsget, function(res) {
res.send({"done": "true"});
});


}


