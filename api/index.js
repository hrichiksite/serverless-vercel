module.exports = async (req, res) => {
  res.send({
      status: "ok",
      info: "This Is Random Names API, call /name to get names",
    })
}

