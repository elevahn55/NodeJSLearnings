const fs = require('fs')
let store

module.exports = function(path, ext, callback) {
    fs.readdir(path, function(err, data){
        if (err){
            return callback(err)
        }
        store = data.filter( function(name){
            return name.toString().includes("." + ext)
        })
        return callback(null, store)
    })
    
}