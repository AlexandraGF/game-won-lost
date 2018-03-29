var GameNumber = function () {
  this.inputNumber = 0;
  this.history = [];
  this.error = "You must click on all the options from 1-6"
};

GameNumber.prototype.submitData = function (number) {
  this.inputNumber = number;
};

GameNumber.prototype.clickOption = function (number) {
  this.history.push(number);
};
