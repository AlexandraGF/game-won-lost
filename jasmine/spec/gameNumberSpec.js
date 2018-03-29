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

  });
});
