"use strict";


// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  
  const result = [];

  for (const idx in items) {
    if (idx % 2 !== 0) {
      result.push(items[idx]);
    }
  }

  return result;
}



// 3. smallestNItems

function compare(a, b) {
  return a - b;
}

function smallestNItems(items, n) {
  const sorted_items = items.sort(compare);
  let result = [];

  for (let i = 0; i < n; i+=1) {
    result.push(items[i]);
  }

  return result;
  
}



