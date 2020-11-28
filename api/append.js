module.exports = async (req, res) => {
const fetch = require('node-fetch');


var response = fetch("https://example.com");
var data = response.body();
res.send(data);
}


