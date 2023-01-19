"use strict";

var _mongodb = require("mongodb");
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.STRING_URI;
var DATABASE = "tools";
var _client = new _mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: _mongodb.ServerApiVersion.v1
});
module.exports = {
  client: function client(callback) {
    _client.connect(function (err, db) {
      console.log("connecter à la db");
      if (err || !db) {
        return false;
      }
      callback(db.db(DATABASE));
    });
  }
};