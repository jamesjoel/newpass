var express=require("express");
var app=express();
var passport=require("passport");
var LocalStrategy = require('passport-local').Strategy;
var bodyParser=require("body-parser");
var cookieParser = require('cookie-parser');
var session      = require('express-session');
app.engine('ejs', require('ejs').__express);
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(cookieParser());

app.listen(3000, function(){
	console.log("running");
	
});

/*--- for password requirement START------------------*/

app.use(session({ secret : 'jamesjoel'}));
app.use(passport.initialize());
app.use(passport.session());
require('./route')(app, passport);
/*--- for password requirement END------------------*/





app.get("/", function(req, res){
	res.render("login");
})
app.post('/',
  passport.authenticate('local', 
  	{	successRedirect: '/home',
    	failureRedirect: '/',
        failureFlash: true 
    })
);