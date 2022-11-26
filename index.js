// express을 사용하기
const express = require('express');
const app = express();

app.listen(5500, function(){
    console.log('listening on 8080')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})