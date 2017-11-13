'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookies: [],
  dayTotal: null,
  getRandom: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calulate: function() {
    for(var i = 0; i < 14; i++) {
      this.cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
      this.dayTotal += this.cookies[i];
    }
    return this.cookies;
  },
};

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookies: [],
  dayTotal: null,
  getRandom: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calulate: function() {
    for(var i = 0; i < 14; i++) {
      this.cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
      this.dayTotal += this.cookies[i];
    }
    return this.cookies;
  },
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookies: [],
  dayTotal: null,
  getRandom: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calulate: function() {
    for(var i = 0; i < 14; i++) {
      this.cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
      this.dayTotal += this.cookies[i];
    }
    return this.cookies;
  },
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookies: [],
  dayTotal: null,
  getRandom: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calulate: function() {
    for(var i = 0; i < 14; i++) {
      this.cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
      this.dayTotal += this.cookies[i];
    }
    return this.cookies;
  },
};

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookies: [],
  dayTotal: null,
  getRandom: function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  calulate: function() {
    for(var i = 0; i < 14; i++) {
      this.cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
      this.dayTotal += this.cookies[i];
    }
    return this.cookies;
  },
};
