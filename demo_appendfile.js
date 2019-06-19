
var fs = require('fs')


fs.appendFile('mynewfile1.docx', 'Hi, what is up homie', function (err){
    if (err) throw err;
    console.log('Saved!');
})
    