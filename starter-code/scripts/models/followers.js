(function(module) {
  var followers = {};
  followers.allFollowers = [];
  followersController.getFollowers();
  module.followers = followers;
})(window);
