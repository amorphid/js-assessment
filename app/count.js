exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var count     = start;
    var timeout;

    var funktion = function () {
      console.log(count);
      count += 1;

      if (count <= end) {
        timeout = setTimeout(funktion, 100);
      }
    }

    funktion();

    return {
      cancel: function () {
        timeout && clearTimeout(timeout);
      }
    }
  }
};
