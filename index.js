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
    
    app.listen(5500, function(){
        console.log('listening on 5500')
    })
})
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html')
        
    })
    app.post('/submit', function(req, res){
        res.send("complete..")
        db.collection('submit').insertOne({email:req.body.Pemail}, function(err, result){
        console.log("save complete")
        console.log(req.body.Pemail);
        })
        
        
    })
    app.post('/add', function(req, res){
        res.send("complete..")
        db.collection('login').insertOne({email:req.body.email}, function(err, result){
        console.log("save complete")
        console.log(req.body.email);
        })
        
    })