describe('GameNumber', function (){

  describe('The user can ', function(){
    it('input a number between 10 and 60', function() {
      game = new GameNumber();
      game.submitData(12);
      expect(game.inputNumber).toEqual(12);
    });
  });
});
