(function() {
	var app = angular.module('shopApp', []);
	app.controller('ShopController', ['$http', function($http) {
		var shop = this;
		shop.items = [];
		$http.get('http://localhost:8080/shopping-grails/items').success(function(data) {
			shop.items = data;
		});
	}]);
})();
