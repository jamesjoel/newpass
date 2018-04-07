var express=require("express");
var app=express();

var bodyParser=require("body-parser");
var request=require("request");
app.engine('ejs', require('ejs').__express);
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.get("/", function(req, res){
	res.render('home');
});
app.get("/get", function(req, res){
	console.log("hello world");
	request('http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.9.0&SECURITY-APPNAME=jamesjoe-mytestin-PRD-c5d7504c4-7bdf1a15&paginationInput.entriesPerPage=2&RESPONSE-DATA-FORMAT=JSON&keywords=i-phone&itemFilter(0)', function(err, result, body){
		//console.log(JSON.stringify(body));
		var data=JSON.parse(body);
		//res.send(data);
		res.send(data);
		//res.render('home', data.findItemsAdvancedResponse[0].searchResult);
	});
	
})





// function get(){

// 	http.request('http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.9.0&SECURITY-APPNAME=jamesjoe-mytestin-PRD-c5d7504c4-7bdf1a15&paginationInput.entriesPerPage=1&RESPONSE-DATA-FORMAT=JSON&keywords=i-phone&itemFilter(0)', function(data){
// 		// console.log(JSON.stringify(res));
// 		console.log(JSON.stringify(data));

// 				// res.send(JSON.stringify(data));

// 	}).end();
// }
// get();


app.use(bodyParser());
// app.use(bodyParser.json());
app.listen(3000, function(){
	console.log("running");
	

});
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/w3c";
// MongoClient.connect(url, function(err, db){
// 	// db.collection('order').aggregate([{ $match : { name : 'jaya' }}, { $skip : 1}], function(err, col){
// 	// 	console.log(col);
// 	// });
// 	db.collection("order").aggregate([{
// 		$group : {
// 			_id : "$item_id",
// 			total : { $sum : "$amount" }

// 			}
// 		},{
// 			$match : { name : "jaya" }
// 		}
// 		], function(err, col){
// 			console.log(col);
// 		});
// });

// app.get("/", function(req, res){
// 	console.log("Hello world");
// 	res.sendFile(__dirname+"/index.html");
// });

// app.post("/", function(req, res){
// 	console.log("POST......");
// 	var data=req.body;
// 	console.log(data);
// 	res.send("hello world");
// });





// MongoClient.connect(url, function(err, db){
// 	if(err)
// 		return;
// 	db.collection('demo').drop(function(err, res){
// 		if(err)
// 			return;
// 		console.log('deleted-----', res);
// 	});
// });


// function getValueForNextSequence(sequenceOfName){
// 	MongoClient.connect(url, function(err, db){
// 	    var sequenceDoc = db.collection('counter').findAndModify({
// 	       query:{_id: sequenceOfName },
// 	       update: {$inc:{sequence_value:1}},
// 	       new:true
// 	    });

// 	    return sequenceDoc.sequence_value;

// 	})

// }

// MongoClient.connect(url, function(err, db){
// 	//console.log(db.collection('user').find());
// 	// var obj={ "_id" : db.collection('user').find(). }
// 	// db.collection("user").insert({ "_id" : db.collection('user').find().Count()+1, "name" : "Sony" }, function(err, res){
// 	// 	if(err)
// 	// 		console.log(err);
// 	// 	console.log(res);
// 	// });
// });

// function MyInsert(obj, col)
// {
// 	MongoClient.connect(url, function(err, db){
// 		// var sequenceDoc=db.collection('counter').findAndModify({
// 		// 	query:{_id: "itemid" },
// 		// 	update: {$inc:{seq:1}},
// 		// 	upsert : true,
// 		// 	new:true
// 		// });
		
// 		var cursor=db.collection(col).find( {}, { _id: 1 } ).sort( { _id: -1 } ).limit(1);
// 		var seq = cursor.hasNext() ? cursor.next()._id + 1 : 1;
// 		console.log(seq);
// 		//obj._id=seq;
// 		// collection.insert(obj, function(err, res){
// 		// 	console.log("inserted");
// 		// });

// 	});
// }
// function counter(colName, callback)
// {
// 	MongoClient.connect(url, function(err, db){
// 		db.collection(colName).find().count(callback);
// 	});
	
// }
// function myInsert(obj, colName)
// {
// 	MongoClient.connect(url, function(err, db){
// 		counter(colName, function(err, data){
// 			obj._id=data+1;
// 			console.log(obj);
// 			db.collection(colName).insert(obj, function(err, res){
// 				console.log("Inserted");
// 			});	
// 		});
		
// 	});
	
// }




//myInsert({ "name" : "India" }, "hello");
// MongoClient.connect(url, function(err, db){
// 	db.collection('users').remove({"id" : 3}, function(err, res){
// 		if(err)
// 			console.log(err);
// 		console.log("data deleted ------", res);
// 		});
// 	});
// MongoClient.connect(url, function(err, db){
// 	db.collection("order").aggregate([{ $group : { '_id' : '$item_id', total : { $sum : 1 } } }], function(err, res){
// 		if(err)
// 			console.log(err);
// 		console.log("-------------", res);
// 	})	
// });

// MongoClient.connect(url, function(err, db){
// 	db.collection("order").aggregate([{ $group : { '_id' : '$item_id', total : { $sum : 1 } } }], function(err, res){
// 		if(err)
// 			console.log(err);
// 		console.log("-------------", res);
// 	})	
// });





//[{ id: 1, name: 'John', favorite_product: 154},{ id: 2, name: 'Peter', favorite_product: 154},{ id: 3, name: 'Amy', favorite_product: 155},{ id: 4, name: 'Hannah', favorite_product: },{ id: 5, name: 'Michael', favorite_product: }]
// [{ id: 154, name: 'Chocolate Heaven' },  { id: 155, name: 'Tasty Lemons' }, { id: 156, name: 'Vanilla Dreams' }]


