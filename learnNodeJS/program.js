const http = require('http');
const url = require('url');
const portArg = process.argv[2]


http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'})
  if (req.method == 'GET') {
    let qryReq = url.parse(req.url, true)

    if (qryReq.pathname === '/api/parsetime'){
      let qryPars = new Date(qryReq.query.iso)
      let qryHour = qryPars.getHours()
      let qryMin = qryPars.getMinutes()
      let qrySec = qryPars.getSeconds()
      let qryRes = {hour: qryHour, minute: qryMin, second: qrySec}
      let qryResJSON = JSON.stringify(qryRes)
      res.end( qryResJSON)
    } 
    else if (qryReq.pathname === '/api/unixtime'){
      let qryPars = new Date(qryReq.query.iso)
      let qryMilli = qryPars.getTime()
      let qryRes = {unixtime: qryMilli}
      let qryResJSON = JSON.stringify(qryRes)
      res.end( qryResJSON)
    }

  }
}).listen(portArg)

