var GameNumber = function () {
  this.inputNumber = 0;
  this.history = [];
  this.error = "";
};

GameNumber.prototype.submitData = function (number) {
  this.inputNumber = number;
  // if (this.history != 6) {
  //   return this.error = "You must click on all the options from 1-6";
  // };
};

GameNumber.prototype.clickOption = function (number) {
  this.history.push(number);
};

GameNumber.prototype.resultGame = function () {
  if (this.history.length != 6) {
    return this.error = "You must click on all the options from 1-6";
  }

  if (this.inputNumber == "") {
    return "Please write a number between 10-60 (inclusive)!"
  }

  if ((this.inputNumber / 10).toFixed(0) == this.history[0]) {
    return "You won!";
  }
  else {
    return "You lost!";
  }
};
