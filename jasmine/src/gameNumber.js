var GameNumber = function () {
  this.inputNumber = 0;
  this.history = [];
  this.error = "";
};

GameNumber.prototype.submitData = function (number) {
  this.inputNumber = number;
  if (this.history != 6) {
    return this.error = "You must click on all the options from 1-6";
  };
};

GameNumber.prototype.clickOption = function (number) {
  this.history.push(number);
};
