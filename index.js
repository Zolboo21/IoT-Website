const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
var db;
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs');
const alert = console.log.bind(console);




MongoClient.connect("mongodb+srv://zolboo21:hallym@cluster0.dfimkyo.mongodb.net/?retryWrites=true&w=majority", function(err, client){
    if(err) return console.log(err)
    db = client.db('nodejs');

    console.log('DB connected')
    
    app.listen(5500, function(){
        console.log('listening on 5500')
    })
})
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html')
        
    })



    app.get('/list', function(req, res) {
        db.collection('login').find().toArray(function(err, result){
          console.log(result);
          res.render('list.ejs', {loginfo : result})
        })
      })

      app.post('add', function(req, res){
        db.collection('config').findOne({name: 'totalcount'}, function(err, result){
          var mycount = result.count;
          db.collection('login').insertOne( { _id : (mycount +1), email : req.body.Pemail} , function(){
            db.collection('config').updateOne({name: 'totalcount'},{ $inc:{count:1} },function(err, result){
              if(err) return console.log(err)
              res.sendFile(__dirname +'alert.html')
            })  
          });
        });
      });
      app.post('/sub', function(req, res){
        db.collection('config').findOne({name: 'totalcount2'}, function(err, result){
          var mycount2 = result.count2;
          db.collection('sign').insertOne( { _id : (mycount2 +1), name : req.body.FirstName, school : req.body.School, FirstEmail : req.body.FirstEmail, PhoneNumber : req.body.PhoneNumber} , function(){
            db.collection('config').updateOne({name: 'totalcount2'},{ $inc:{count2:1} },function(err, result){
              if(err) return console.log(err)
              res.sendFile(__dirname +'alert.html')
            })  
          });
        });
      });
      app.post('/zoom', function(req, res){
        db.collection('config').findOne({name: 'totalcount3'}, function(err, result){
          var mycount3 = result.count3;
          db.collection('zoom').insertOne( { _id : (mycount3 +1), name : req.body.zoomname, email : req.body.Pemail} , function(){
            db.collection('config').updateOne({name: 'totalcount3'},{ $inc:{count:1} },function(err, result){
              if(err) return console.log(err)
              res.sendFile(__dirname +'/alert.html')
            })  
          });
        });
      });
      