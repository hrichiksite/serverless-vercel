const fetch = require('node-fetch');

module.exports = async (request, response) => {
  
  var sid = request.query.sid;
  var sh  = request.query.sh;
  
  var url = "https://script.google.com/macros/s/AKfycbznvGSPRcCSI92QKM-Ol8nwnooXgW7zkwkzDveCIFwdqcxgMKgp/exec?shid="+sid+"&sn="+sh+"&action=read"
    var req = await fetch(url);
    var res = await req.json();
    response.status(200).json(res);

  
}
