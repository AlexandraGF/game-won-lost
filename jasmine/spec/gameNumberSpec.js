describe('GameNumber', function (){

  describe('The user can ', function(){
    it('input a number between 10 and 60', function() {
      game = new GameNumber();
      game.submitData(12);
      expect(game.inputNumber).toEqual(12);
    });

    it('choose an option from the screen (1-6) in any order', function() {
      game = new GameNumber();
      game.submitData(12);
      game.clickOption(1);
      expect(game.history).toEqual([1]);
    });

    it('must choose all options from screen (1-6) in any order', function() {
      game = new GameNumber();
      game.submitData(12);
      game.clickOption(1);
      game.clickOption(3);
      game.clickOption(5);
      game.clickOption(2);
      game.clickOption(4);
      expect(game.error).toEqual("You must click on all the options from 1-6");
    });

  });
});
