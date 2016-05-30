var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#submit').click(function() {
    var username = $('#username').val();
  
    // exports.getRepos = function(){
      $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
        $('.showUser').text(response);

        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    // };






  });
});
