var apiKey = require('./../.env').apiKey;
var getGit = require('./../js/githubAPI.js').getGit;

$(document).ready(function() {
  var currentUserObject = new getGit();
  currentUserObject.getUser();


  $('#submit').click(function() {
    var username = $('#username').val();




  });
});
