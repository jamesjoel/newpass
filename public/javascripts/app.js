var app=angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	
	$scope.data={};
	$scope.get_all=function(){
		console.log("calling");
		$http({
			method : "GET",
			url : "/get"
		}).then(function(res){
			console.log(res);
		});
	}
	// $scope.show=function(){
	// 	$http({
	// 		method : 'POST',
	// 		url : '/product/getData'
	// 	}).then(function(res){
	// 		console.log(res);
	// 		$scope.data=res.data.products;
	// 	});
	
});