exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var count = start;

    var funktion = function () {
      console.log(count);
      count += 1;

      if (count <= end) {
        setTimeout(funktion, 100);
      }
    }

    funktion();
  }
};
