module.exports = (req, res) => {
var data = new Date(new Date().toUTCString());
    req.send(data);
}
