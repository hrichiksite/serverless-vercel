
module.exports = async (req, res) => {
const cheerio = require('cheerio');
const got = require('got');
var uri = "https://apppro.in"
const fetch = async(uri, userArgs, callback) => {
    // Set defaults
    const options = {
        timeout: 5000,
        headers: {
            'User-Agent': 'request'
        }
    };

    // If no args are supplied, move callback
    if(typeof userArgs === 'function'){
        callback = userArgs;
    }

    // override supplied args
    if(typeof userArgs === 'object'){
        Object.keys(userArgs).forEach((arg) => {
            options[arg] = userArgs[arg];
        });
    }

    // Fetch the meta data
    let response;
    try{
        response = await got.get(uri, {
            options
        });
    }catch(ex){
        return respond({}, ex.code, callback);
    }

    // Parse the meta data
    const $ = cheerio.load(response.body);
    const meta = $('meta');
    const keys = Object.keys(meta);
    const metaData = {};
    keys.forEach((key) => {
        if(meta[key].attribs !== undefined){
            if(meta[key].attribs.property && meta[key].attribs.content){
                metaData[meta[key].attribs.property] = meta[key].attribs.content;
            }
            if(meta[key].attribs.name && meta[key].attribs.content){
                metaData[meta[key].attribs.name] = meta[key].attribs.content;
            }
        }
    });

    // Response
    return respond(metaData, null, callback);
};

// Allows for callback or promise response
const respond = (data, error, callback) => {
    if(!callback){
        if(error){
            return Promise.reject(error);
        }
        //return Promise.resolve(data);
          res.send(data);
    }
    return callback(error, data);
};




}
