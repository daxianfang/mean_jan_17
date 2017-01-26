var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController() {
	this.index = function(req, res) {
		Friend.find({}, function(err, results) {
			res.json(results);
		})
	}

	this.show = function(req, res) {
		Friend.findById(req.params.id, function(err, friend) {
			res.json(friend);
		})
	}

	this.create = function(req, res) {
		var newFriend = new Friend(req.body);
		newFriend.save(function(err, newFriend) {
			if (err) {
				console.log(err);
			} else {
				res.json(newFriend);
			}
		})
	}

	this.update = function(req, res) {
		Friend.findById(req.params.id, function(err, friend) {
			if (err) {
				console.log(err);
			} else {
				friend.name = req.body.name || friend.name;
				friend.age = req.body.age || friend.age;
				friend.save(function(err, friend) {
					if (err) {
						console.log(err);
					} else {
						// console.log(friend);
						res.json(friend);
					}
				})
			}
		})
	}

	this.delete = function(req, res) {
		Friend.findByIdAndRemove(req.params.id, function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
}

module.exports = new FriendsController();