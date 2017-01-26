app.controller('friendsController', ['friendsFactory', '$location', '$routeParams', function(friendsFactory, $location, $routeParams) {
	var self = this;
	var setFriends = function(friends) {
		self.friends = friends;
	}

	var setOneFriend = function(friend) {
		self.friend = friend;
	}

	friendsFactory.getFriends(setFriends);

	self.createFriend = function() {
		friendsFactory.createFriend(self.friend, function() {
			self.friend = {};
			$location.url('/');	
		});

	}

	self.showFriend = function() {
		friendsFactory.showFriend($routeParams.id, setOneFriend);
	}

	self.updateFriend = function() {
		friendsFactory.updateFriend($routeParams.id, self.friend, setFriends);
		friendsFactory.getFriends(setFriends);
		self.friend = {};
		$location.url('/');
	}

	self.deleteFriend = function(id) {
		friendsFactory.deleteFriend(id, setFriends);
	}
}])