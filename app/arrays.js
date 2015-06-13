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
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count : function(arr, item) {
    var count = 0;

    arr.forEach(function (i) {
      if (i === item) {
        count += 1;
      }
    });

    return count;
  },

  duplicates : function(arr) {
    var obj  = {};
    var dups = [];

    arr.forEach(function (i) {
      if (obj[i] === 1 ) {
        obj[i] += 1;
        dups.push(i);
      } else {
        obj[i] = 1;
      }
    });

    return dups;
  },

  square : function(arr) {
    return arr.map(function (i) {
      return i * i;
    });
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        indexes.push(i);
      }
    }

    return indexes;
  }
};
