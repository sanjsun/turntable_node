"use strict";var _require=require("mongodb"),MongoClient=_require.MongoClient,connect=function(n,o){MongoClient.connect("mongodb://localhost:27017/kfcdb",function(e,c){var t=c.collection(n);o(c,t)})};exports.insertOne=function(n,o,e){connect(n,function(n,c){c.insertOne(o,e(err,doc)),n.close()})},exports.findAll=function(n,o,e){connect(n,function(n,c){c.find(o).toArray(e(err,docs)),n.close()})},exports.getCount=function(n,o){connect(n,function(n,e){e.count(o(err,len)),n.close()})};