module.exports = (req, res) => {
var data = new Date().toUTCString();
    req.send(data);
}
