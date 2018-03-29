$(document).ready(function() {
  var game = new GameNumber();

  $('#button1').one('click', function() {
    game.clickOption(1);
    $('#clicked').text("Clicked");
    console.log(game.history);
  });

  $('#button2').one('click', function() {
    game.clickOption(2);
    console.log(game.history);
  });

});
