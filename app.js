/**
 * Created by Alon on 12/07/2017.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose= require('mongoose');
const config= require('./config/database');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Connect to DB using config file
mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
  console.log('Connected to database '+ config.database);
});

mongoose.connection.on('error',(err)=>{
  console.log('Database error '+ err);
  // exit
  process.exit(1);
});

const messages = require('./routes/messages');

//Port Number
const port = 8080;

// app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.static('out'));
// app.use('/src', express.static(path.join(__dirname, 'src')))

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/messages', messages);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

http.listen(port, function () {
  console.log('Server listening at port %d', port);
});

