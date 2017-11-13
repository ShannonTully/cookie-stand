'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookies: [],
  getRandom: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calulate: function() {
    for(var i = 0; i < 14; i++) {
      this.cookies[i] = this.getRandom() * this.avgCookieBought;
    }
    return this.cookies;
  },
};
