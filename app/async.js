exports = (typeof window === 'undefined') ? global : window;



exports.asyncAnswers = {
  async : function(value) {
    return {
      then: function (callback) {
        callback(value);
      }
    }
  },

  manipulateRemoteData : function(url) {
    var promise = new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = function () {
        var people = JSON.parse(this.response).people.map(function (i) {
          return i.name;
        })

        resolve(people.sort());
      };
      request.send();
    });

    return promise;
  }
};
