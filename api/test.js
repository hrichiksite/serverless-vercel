var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    ip: ip,
  })
}
