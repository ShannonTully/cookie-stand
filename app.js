'use strict';

var stores = [];

function Store(storeLoc, minCust, maxCust, avgCookieBought) {
  this.storeLoc = storeLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  stores.push(this);
}

Store.prototype.test = function() {
  console.log('\'stores\' array', stores);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

stores[0].test();

Store.prototype.getRandom = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Store.prototype.calculate = function() {
  var cookies = [];
  for(var i = 0; i <= 14; i++) {
    cookies[i] = Math.round(this.getRandom() * this.avgCookieBought);
    /*
    var parent = document.getElementById('1');
    var child = document.createElement('li');
    var time = (i + 6) * 100;
    child.textContent = 'Hour: ' + time + ' Cookies:' + cookies[i];
    parent.appendChild(child); */
  } /*
  var totalParent = document.getElementById('1');
  var totalChild = document.createElement('li');
  totalChild.textContent = 'Total: ' + dayTotal;
  totalParent.appendChild(totalChild); */
  return cookies;
};

Store.tableHours = function() {
  var tblEl = document.getElementById('tbl');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbod';
  tblEl.appendChild(tbodyEl);
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 14; i++) {
    tdEl = document.createElement('td');
    var time = (i + 6) * 100;
    tdEl.textContent = time;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
};

Store.prototype.tableObjects = function() {
  var tbodyEl = document.getElementById('tbod');
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeLoc;
  trEl.appendChild(tdEl);
  console.log(tdEl.textContent, ' and ', this.storeLoc);
  var dayTotal = 0;
  for(var i = 0; i <= 14; i++) {
    tdEl = document.createElement('td');
    var cookies = this.calculate()[i];
    dayTotal += cookies;
    //console.log(cookies);
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = dayTotal;
  trEl.appendChild(tdEl);
};

/*for(var i = 0; i < stores.length; i++){
  stores[i].calculate();
}*/

Store.tableHours();

for(var i = 0; i < stores.length; i++) {
  stores[i].tableObjects();
}

/*for(var j = 0; j < stores.length; j++){
  stores[j].tableObjects();
}*/


/*var firstAndPike = {
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

alki.calulate();*/
