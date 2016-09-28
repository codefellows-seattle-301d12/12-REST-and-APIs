(function(module) {
  var followerView = {};
  var followerCompile = Handlebars.compile($('#follower-template').html());

  followerView.renderFollowers = function() {
    followers.allFollowers.map(function(follower) {
      return {
        login: follower.login,
        html_url: follower.html_url
      };
    }).forEach(function(follower) {
      $('.followers').append(followerCompile(follower));
    });
  };

  module.followerView = followerView;
})(window);
