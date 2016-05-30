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

//this code will loop through the array of repositories, and push the name and description of each array into a new object, which is then placed into an array.

//This will loop through that new array, and print out "repositoryName + repositoryDescription" as list items.



  });
});
