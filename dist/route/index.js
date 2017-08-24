"use strict";var express=require("express"),router=express.Router(),_require=require("path"),join=_require.join,mainCtrl=require(join(__dirname,"../controller/manCtrl.js")),viewCtrl=require(join(__dirname),"../controller/viewCtrl.js");router.get("/userinfo",mainCtrl.getUserInfo),router.post("/userinfo",mainCtrl.postUserInfo),router.get("/seat",mainCtrl.getSeatInfo),router.post("/seat",mainCtrl.postSeatInfo),router.get("/",viewCtrl.indexView),router.get("/clear",viewCtrl.clearView),router.get("/result",viewCtrl.resultView),module.exports=router;