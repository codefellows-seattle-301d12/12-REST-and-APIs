(function(module) {
  followersController = {};

  followersController.getFollowers = function() {
    $.ajax({
      url: 'https://api.github.com/users/iamrobinhood12345/followers',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        followers.allFollowers = data;
        followerView.renderFollowers();
      }
    });
  };

  module.followersController = followersController;
})(window);
