'use strict';

var stores = [];
var k = 5;
var dayTotal = 0;
var arrTotals = [];

function Store(storeLoc, minCust, maxCust, avgCookieBought) {
  this.storeLoc = storeLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.hourCookies = [];
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
    arrTotals[j] = dayTotal;
    console.log('e', stores[j].minCust, stores[j].maxCust, stores[j].avgCookieBought, cookies[i], 'arrTotals', arrTotals);
    stores[j].hourCookies[i] = cookies[i];
    console.log(stores[j].hourCookies[i]);
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
  tblEl.appendChild(createFoot());
}

function createHead() {
  var theadEl = document.createElement('thead');
  var row = createRow('', createTime(), 'Total');
  theadEl.appendChild(row);
  return theadEl;
}

function createFoot() {
  var i = 0;
  var tfootEl = document.createElement('tfoot');
  tfootEl.id = 'tfoo';
  var row = createRow('Total', getHourTotals(i), arraySum(arrTotals));
  i++;
  tfootEl.appendChild(row);
  return tfootEl;
}

function getHourTotals(j) {
  var totals = [];
  var hour = [];
  console.log('hour', hour);
  for(var i = 0; i <= 14; i++) {
    for(var l = 0; l < stores.length; l++) {
      hour[l] = stores[l].hourCookies[i];
      console.log('hour', hour, 'stores[j].hourCookies[i]', stores[j].hourCookies[i]);
    }
    totals[i] = arraySum(hour);
    console.log('totals', totals);
    //totals.push(add);
  }
  return totals;
}

function arraySum(array){
  var total = 0;
  for (var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
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

  var tblEl = document.getElementById('tbl');
  var tfootEl = document.getElementById('tfoo');
  tblEl.removeChild(tfootEl);

  addRow(k);
  k++;

  tblEl.appendChild(createFoot());
}

formEl.addEventListener('submit', onSubmit);
