function pushArr(t,o){for(var n=0;n<o;n++)arr.push(t)}function randomDeg(){var t=arr[Math.floor(100*Math.random())];console.log("tp:"+t);var o=Math.floor(90*Math.random());return 1==t?0+o:2==t?90+o:3==t?180+o:4==t?270+o:void 0}!function(t,o,n){function r(t){this.opts=n.extend(!0,{},e,t),this.doing=!1,this.init()}var e={rotateNum:5,body:"",disabledHandler:function(){},clickCallback:function(){},KinerLotteryHandler:function(t){}};r.prototype.setOpts=function(t){this.opts=n.extend(!0,{},e,t),this.init()},r.prototype.init=function(){var t=this;this.defNum=360*this.opts.rotateNum,n("body").on("tap",".KinerLotteryBtn",function(){if(n(this).hasClass("start")&&!t.doing)console.log("点击"),t.opts.clickCallback.call(t);else{var o=n(this).hasClass("no-start")?"noStart":n(this).hasClass("completed")?"completed":"illegal";t.opts.disabledHandler(o)}}),n(this.opts.body).find(".KinerLotteryContent").get(0).addEventListener("webkitTransitionEnd",function(){t.doing=!1;var o=n(t.opts.body).attr("data-deg");0==t.opts.direction?(n(t.opts.body).attr("data-deg",360-o),n(t.opts.body).find(".KinerLotteryContent").css({"-webkit-transition":"none",transition:"none","-webkit-transform":"rotate("+o+"deg)",transform:"rotate("+o+"deg)"}),t.opts.KinerLotteryHandler(360-o)):(n(t.opts.body).attr("data-deg",o),n(t.opts.body).find(".KinerLotteryContent").css({"-webkit-transition":"none",transition:"none","-webkit-transform":"rotate("+-o+"deg)",transform:"rotate("+-o+"deg)"}),t.opts.KinerLotteryHandler(o))})},r.prototype.goKinerLottery=function(t){if(!this.doing){var o=t+this.defNum,r=0==this.opts.direction?o:-o;this.doing=!0,n(this.opts.body).find(".KinerLotteryBtn").addClass("doing"),n(this.opts.body).find(".KinerLotteryContent").css({"-webkit-transition":"all 5s",transition:"all 5s","-webkit-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"}),n(this.opts.body).attr("data-deg",t)}},t.KinerLottery=r}(window,document,$);var arr=[];pushArr(1,10),pushArr(2,20),pushArr(3,30),pushArr(4,40);var whichAward=function(t){return t>=0&&t<90?"one":t>=90&&t<180?"tow":t>=180&&t<270?"three":"four"},KinerLottery=new KinerLottery({rotateNum:8,body:"#box",direction:0,disabledHandler:function(t){switch(t){case"noStart":alert("活动尚未开始");break;case"completed":alert("活动已结束")}},clickCallback:function(){this.goKinerLottery(randomDeg())},KinerLotteryHandler:function(t){whichAward(t)}});