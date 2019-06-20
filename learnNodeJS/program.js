let url = process.argv[2]
const http = require('http')
let str = ""

http.get(url, function(response){
    response.setEncoding('utf8')
    response.on('error', function(err){
        console.log('Sorry, there was an error')
    })
    response.on('data', function(data){
        if (data != undefined){
            
            str += data
        }
        
    })
    response.on('end', function(){
        console.log(str.length)
        console.log(str)
    })
})


