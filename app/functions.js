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

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
