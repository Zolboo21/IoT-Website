// express을 사용하기
const express = require('express');
//const { MongoClient } = require('mongodb');
const app = express();

// app.listen(5500, function(){
//     console.log('listening on 5500')
// })
var db;

const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb+srv://zolboo21:hallym@cluster0.dfimkyo.mongodb.net/?retryWrites=true&w=majority", function(err, client){
    if(err) return console.log(err)
    db = client.db('nodejs');
    db.collection('login').insertOne({email: "asd@gmail.com"},
        console.log("sace complete")
    )





    app.listen(5500, function(){
        console.log('listening on 5500')
    })
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})
