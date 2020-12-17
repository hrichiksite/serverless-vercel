module.exports = (req, res) => {
var data = new Date().toUTCString();
    res.send(data);
}
