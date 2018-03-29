$(document).ready(function() {
  var game = new GameNumber();

  $('#button1').one('click', function() {
    game.clickOption(1);
    console.log(game.history);
  });
});
