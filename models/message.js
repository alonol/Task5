/**
 * Created by Alon on 11/07/2017.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const MessageSchema = mongoose.Schema({

  name: {
    type: String,validate: /[a-zA-Z]/,
    required: true
  },
  text: {
    type: [String],validate: /[a-zA-Z]/,
    required: false
  },
  pictures: {
    type: [String],
    required: false
  },
  template: {
    type: String,
    required: true
  },
  screens: {
    type: [String],
    required: true
  },
  timeSeconds: {
    type: String,
    required: true
  },
  timesToShow: [
    {
      dates: [
        {
          startTime: {type: String},
          endTime: {type: String}
        }
      ],

      daysInWeek: {
        type: [String]
      }
      ,

      hoursInDay: [
        {
          start: {type: String},
          end: {type: String}
        }
      ]
    }]
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getAllMessages = function({},callback) {
  console.log("in get all messages")
  Message.find({},function (err, messages) {
    console.log("in find")
    if (err) {
      console.log("cant find");
    } else {
      console.log("success")
      console.log()
      return callback(false,messages);
    }
  });
}
