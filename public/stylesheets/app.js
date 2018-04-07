var app=angular.module("myApp", []);
app.controller("myCtrl", function($scope){
	$http({
		method : "GET",
		url : "/"
	}).then(function(res){
		console.log(res);
	});
});