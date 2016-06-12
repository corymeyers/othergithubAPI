var apiKey = require('./../.env').apiKey;
var getGit = require('./../js/githubAPI.js').getGit;

$(document).ready(function() {
  var currentUserObject = new getGit();


  $('#submit').submit(function(event) {
    $("ul").empty();
    var username = $('#username').val();
    currentUserObject.getUser(username);
    event.preventDefault();
  });

});
