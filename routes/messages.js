/**
 * Created by Alon on 12/07/2017.
 */
const express = require('express');
const router = express.Router();
//const passport = require('passport');
const config = require('../config/database');
const Message = require('../models/message');

var Db = require('mongodb').Db,
  MongoClient = require('mongodb').MongoClient,
  Server = require('mongodb').Server;

router.get('/list', (req, res, next) => {
  console.log("In Router");
  Message.getAllMessages({}, function (err, callback) {
    if (err) {
      console.log(callback)
      res.json({success: false, msg: 'Failed fetching all messages'});
    } else {
      console.log("inSuccess");
      res.json({callback, success: true, msg: 'Listing messages '});
    }
  });
});

module.exports = router;
