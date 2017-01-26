app.factory('friendsFactory', ['$http', function($http) {
	var friends = [];
	var friend;

	var factory = {};

	factory.getFriends = function(callback) {
		$http.get('/friends').then(function(response) {
			friends = response.data;
			callback(friends);
		})
	}

	factory.createFriend = function(friend, callback) {
		$http.post('/friends', friend).then(function(response) {
		});
		callback();
	}

	factory.showFriend = function(id, callback) {
		$http.get('/friends/' + id).then(function(response) {
			friend = response.data;
			callback(friend);
		});
	}

	factory.updateFriend = function(id, friend, callback) {
		$http.put('/friends/' + id, friend).then(function(response) {
			friend = response.data;
			callback(friend);
		});
	}

	factory.deleteFriend = function(id, callback) {
		$http.delete('/friends/' + id).then(function() {
			callback(friends);
		})
	}

	return factory;
}])