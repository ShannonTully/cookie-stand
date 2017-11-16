'use strict';

var stores = [];
var k = 5;
var dayTotal = 0;

function Store(storeLoc, minCust, maxCust, avgCookieBought) {
  this.storeLoc = storeLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  stores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function calculateCookies(j) {
  var cookies = [];
  for(var i = 0; i <= 14; i++) {
    cookies[i] = Math.round(getRandom(stores[j].minCust, stores[j].maxCust) * stores[j].avgCookieBought);
    dayTotal += cookies[i];
    console.log(stores[j].minCust, stores[j].maxCust, stores[j].avgCookieBought);
  }
  console.log(cookies);
  return cookies;
}
/*
function tableHours() {
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
}*/

function createRow(first, main, last) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = first;
  trEl.appendChild(tdEl);
  for(var j = 0; j < main.length; j++) {
    tdEl = document.createElement('td');
    tdEl.textContent = main[j];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = last;
  trEl.appendChild(tdEl);
  return trEl;
}

function createTable() {
  var tblEl = document.getElementById('tbl');
  tblEl.appendChild(createHead());
  tblEl.appendChild(createBody());
}

function createHead() {
  var theadEl = document.createElement('thead');
  var row = createRow('', createTime(), 'Total');
  theadEl.appendChild(row);
  return theadEl;
}

function createTime() {
  var array = [];
  for(var i = 0; i <= 14; i++) {
    array[i] = (i + 6) * 100;
  }
  return array;
}

function createBody() {
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbod';
  for(var i = 0; i < stores.length; i++) {
    var row = createRow(stores[i].storeLoc, calculateCookies(i), dayTotal);
    dayTotal = 0;
    tbodyEl.appendChild(row);
  }
  return tbodyEl;
}

function addRow(j) {
  var tbodyEl = document.getElementById('tbod');
  var row = createRow(stores[j].storeLoc, calculateCookies(j), dayTotal);
  dayTotal = 0;
  tbodyEl.appendChild(row);
}

createTable();

/*
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
    var cookies = this.calculateCookies()[i];
    dayTotal += cookies;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = dayTotal;
  trEl.appendChild(tdEl);
};*/


var formEl = document.getElementById('frm');

function onSubmit(event) {
  event.preventDefault();
  var formData = {
    storeName: event.target.storeName.value,
    minCust: parseInt(event.target.minCust.value),
    maxCust: parseInt(event.target.maxCust.value),
    avgCookieBought: parseFloat(event.target.avgCookieBought.value),
  };
  console.log(formData.storeName, formData.minCust, formData.maxCust, formData.avgCookieBought);
  new Store(formData.storeName, formData.minCust, formData.maxCust, formData.avgCookieBought);

  addRow(k);
  k++;
}

formEl.addEventListener('submit', onSubmit);

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
