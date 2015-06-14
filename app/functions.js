exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    var greeting    = arr[0];
    var name        = arr[1];
    var punctuation = arr[2]

    return fn(greeting, name, punctuation)
  },

  speak : function(fn, obj) {
    obj.speak = fn;
    return obj.speak();
  },

  functionFunction : function(str) {
    var strings = [str];

    var concat = function (str) {
      strings.push(str);
      return strings.join(", ")
    }

    return concat
  },

  makeClosures : function(arr, fn) {
    return arr.map(function (i) {
      return function () {
        return fn(i);
      }
    });
  },

  partial : function(fn, str1, str2) {
    return function (punctuation) {
      return fn(str1, str2, punctuation);
    };
  },

  useArguments : function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i += 1) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt : function(fn) {
    if (arguments.length === 3) {
      fn(arguments[1], arguments[2]);
    } else {
      fn(arguments[1], arguments[2], arguments[3]);
    }
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
