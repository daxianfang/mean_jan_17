app.controller('singleFriendController', ['friendsFactory', '$location', '$routeParams', function(friendsFactory, $location, $routeParams) {
	var self = this;
	// var setFriends = function(friends) {
	// 	self.friends = friends;
	// }

	var setOneFriend = function(friend) {
		self.friend = friend;
	}

	// friendsFactory.getFriends(setFriends);

	// self.createFriend = function() {
	// 	friendsFactory.createFriend(self.friend, setFriends);
	// 	self.friend = {};
	// 	$location.url('/');
	// }

	friendsFactory.getOneFriend(setOneFriend);

	self.updateFriend = function() {
		friendsFactory.updateFriend($routeParams.id, self.friend, setFriends);
		self.friend = {};
		$location.url('/');
	}
}])