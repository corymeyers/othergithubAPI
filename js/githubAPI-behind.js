exports.getGit = function(){}

exports.getGit = function() {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('.showUser').text(response.login);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repo) {
      console.log(repo.name);
      $(".showRepos").append("<li><span>" + repo.name + " - " + repo.description + "</span></li>");
    });

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
