module.exports = async (req, res) => {
const fetch = require('node-fetch');


var response = fetch("https://script.google.com/macros/s/AKfycbznvGSPRcCSI92QKM-Ol8nwnooXgW7zkwkzDveCIFwdqcxgMKgp/exec?shid=1wa3RIo6kbNXiL03qUxp-HQO8OOQFMRZYY3UVL_2Pq_c&sn=Sheet1&d1=John&d2=39");
var data = response.body();
res.send({"done": "true"});
}


