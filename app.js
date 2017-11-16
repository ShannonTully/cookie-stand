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

Store.tableHours();

for(var i = 0; i < stores.length; i++) {
  stores[i].tableObjects();
}
