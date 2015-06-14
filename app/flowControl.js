exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    if (!Number.isInteger(num)) {
      return false;
    }

    str = "";

    if (num % 3 == 0) {
      str += "fizz";
    }

    if (num % 5 == 0) {
      str += "buzz";
    }

    return str ? str : num;
  }
};
