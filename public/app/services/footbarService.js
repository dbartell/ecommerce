angular.module('corApp')
.service('userService', function($http, $q) {

	this.newUserService=function(user) {
		$http({
			method:'POST',
			url: constants.baseURL + 'user',
			data:user
		}).then(function(err, res){
			if (err) { return err;}
			else {return res;}
		});
	};

	this.loginSubmit=function(user){
		return $http({
			method:"POST",
			url: constants.baseURL + 'login',
			data:user
		}).then(function(res,err){
			return res;
		});
	};

	this.getUserName=function(){
		var deferred=$q.defer();
		$http({
			method:"GET",
			url: constants.baseURL + 'user',
		}).then(function(res){
			var userName=res;
			deferred.resolve(userName);
		},function(err){
			deferred.reject(err);
		});
		return deferred.promise	;
  };

});
