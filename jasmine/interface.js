$(document).ready(function() {
  var game = new GameNumber();

  $('#button1').one('click', function() {
    game.clickOption(1);
    $('#clicked1').attr('src', 'https://temporarytattoos.com/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/n/u/number-1-temporary-tattoo_5035.jpg');
    console.log(game.history);
  });

  $('#button2').one('click', function() {
    game.clickOption(2);
    $('#clicked2').attr('src', 'http://www.wilko.com/content/ebiz/wilkinsonplus/invt/0344534/0344534_l.jpg');
    console.log(game.history);
  });

  $('#button3').one('click', function() {
    game.clickOption(3);
    $('#clicked3').attr('src', 'https://www.johnbrownhardware.co.uk/ekmps/shops/513a47/images/classic-designs-3-black-number-3-digit-pack-5-54617-p.jpg');
    console.log(game.history);
  });

  $('#button4').one('click', function() {
    game.clickOption(4);
    $('#clicked4').attr('src', 'http://www.wilko.com/content/ebiz/wilkinsonplus/invt/0344542/0344542_l.jpg');
    console.log(game.history);
  });

  $('#button5').one('click', function() {
    game.clickOption(5);
    $('#clicked5').attr('src', 'http://www.wilko.com/content/ebiz/wilkinsonplus/invt/0344543/0344543_l.jpg');
    console.log(game.history);
  });

  $('#button6').one('click', function() {
    game.clickOption(6);
    $('#clicked6').attr('src', 'http://www.wilko.com/content/ebiz/wilkinsonplus/invt/0344545/0344545_l.jpg');
    console.log(game.history);
  });

  $('#submit_button').on('click', function() {
    game.submitData($('#input_number').val());
    game.resultGame();
    $('#result').text(game.resultGame());
    console.log(game.resultGame());
  });

});
