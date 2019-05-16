var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000
var mysql = require('mysql2')

var connection = mysql.createConnection 
({ 
    host: 'localhost',
    user: 'root',
    password:'root',
    database:'nodejs_login'

});

connection.connect(function(err)
{
  if (!err)
    console.log('Database is connected');
  else
    console.log('DB connection error.');
});

app.use(express.static(__dirname + '/register'));

app.get('/register.component.html', function(req,res)
{
  res.sendFile(__dirname + '/register' + 'register.component.html');
});

app.post('/register.component.html', function(req,res,next)
{
  var data = req.body;
  console.log('request received', data);

  connection.query('INSERT INTO users SET ?', data, function(err,res)
  {
       if(err) throw err;
       console.log('record inserted');
  });
})

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

app.