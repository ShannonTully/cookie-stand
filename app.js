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
    for(var i = 0; i <= 14; i++) {
      this.cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
      this.dayTotal += this.cookies[i];
      var parent = document.getElementById('1');
      var child = document.createElement('li');
      var time = (i + 6) * 100;
      child.textContent = 'Hour: ' + time + ' Cookies:' + this.cookies[i];
      parent.appendChild(child);
    }
    var totalParent = document.getElementById('1');
    var totalChild = document.createElement('li');
    totalChild.textContent = 'Total: ' + this.dayTotal;
    totalParent.appendChild(totalChild);
    return this.cookies;
  },
};

firstAndPike.calulate();

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
      var parent = document.getElementById('2');
      var child = document.createElement('li');
      var time = (i + 6) * 100;
      child.textContent = 'Hour: ' + time + ' Cookies:' + this.cookies[i];
      parent.appendChild(child);
    }
    var totalParent = document.getElementById('2');
    var totalChild = document.createElement('li');
    totalChild.textContent = 'Total: ' + this.dayTotal;
    totalParent.appendChild(totalChild);
    return this.cookies;
  },
};

seatac.calulate();

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
      var parent = document.getElementById('3');
      var child = document.createElement('li');
      var time = (i + 6) * 100;
      child.textContent = 'Hour: ' + time + ' Cookies:' + this.cookies[i];
      parent.appendChild(child);
    }
    var totalParent = document.getElementById('3');
    var totalChild = document.createElement('li');
    totalChild.textContent = 'Total: ' + this.dayTotal;
    totalParent.appendChild(totalChild);
    return this.cookies;
  },
};

seattleCenter.calulate();

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
      var parent = document.getElementById('4');
      var child = document.createElement('li');
      var time = (i + 6) * 100;
      child.textContent = 'Hour: ' + time + ' Cookies:' + this.cookies[i];
      parent.appendChild(child);
    }
    var totalParent = document.getElementById('4');
    var totalChild = document.createElement('li');
    totalChild.textContent = 'Total: ' + this.dayTotal;
    totalParent.appendChild(totalChild);
    return this.cookies;
  },
};

capHill.calulate();

var alki = {
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
      var parent = document.getElementById('5');
      var child = document.createElement('li');
      var time = (i + 6) * 100;
      child.textContent = 'Hour: ' + time + ' Cookies:' + this.cookies[i];
      parent.appendChild(child);
    }
    var totalParent = document.getElementById('5');
    var totalChild = document.createElement('li');
    totalChild.textContent = 'Total: ' + this.dayTotal;
    totalParent.appendChild(totalChild);
    return this.cookies;
  },
};

alki.calulate();
