/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var hashmap = {};
  for (let i = 0; i < transactions.length; i++) {
    category = transactions[i]["category"];
    price = transactions[i]["price"];
    if (category in hashmap) {
      hashmap[category] += price;
    }
    else {
      hashmap[category] = price;
    }
  }

  var result = [];
  for (let key in hashmap) {
    category = key;
    price = hashmap[key];
    result.push({ "category": category, "totalSpent": price });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
