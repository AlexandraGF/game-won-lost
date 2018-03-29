var GameNumber = function () {
  this.inputNumber = 0;
  this.history = [];
};

GameNumber.prototype.submitData = function (number) {
  this.inputNumber = number;
};

GameNumber.prototype.clickOption = function (number) {
  this.history.push(number);
};
