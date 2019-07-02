const net = require('net');
const arg = process.argv[2]
let server = net.createServer(function(socket){
  const dteNow = new Date();
  let strDate = ""
  strDate = strDate + dteNow.getFullYear() + "-0" + (dteNow.getMonth()+1) + "-0" + dteNow.getDate() + " " + dteNow.getHours() + ":0" + dteNow.getMinutes() +"\n"
  socket.end(strDate)})
server.listen(arg)

