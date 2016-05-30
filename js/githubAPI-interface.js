var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#submit').click(function() {
    var username = $('#username').val();

      $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
        $('.showUser').text(response.login);
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });

      $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
        $('.showRepos').text(response);
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });





  });
});
