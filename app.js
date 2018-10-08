var express = require('express');
var formidable = require('formidable');

var app = express();

//render home page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/uploadFiles', function (req, res) {
    //initiate formidable
    var form = new formidable.IncomingForm();

    //specify the file path
    form.on('fileBegin', function (name, file) {
        file.path = __dirname + '/uploads/' + file.name;
    });

    //store the file
    form.on('file', function (name, file) {
        console.log('Uploaded ' + file.name);
        res.redirect('/');    
    });
}); 

app.listen(3000);