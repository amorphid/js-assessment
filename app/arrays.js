exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;

    arr.forEach(function(i) {
      sum += i;
    });

    return sum;
  },

  remove : function(arr, item) {
    return arr.filter(function (i) {
      return i !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);

    if (index !== -1) {
      arr.splice(index, 1);
      return this.removeWithoutCopy(arr, item);
    }

    return arr
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
