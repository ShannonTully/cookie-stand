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
