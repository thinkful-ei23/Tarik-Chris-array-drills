'use strict';

function URLify(urlString) {
  if (urlString.indexOf(' ') === -1) {
    return urlString;
  }

  const index = urlString.indexOf(' ');
  return urlString.slice(0, index) + '%20' + URLify(urlString.slice(index + 1));
}

console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));
// Runtime: O(n) - Linear


function lessThan(arr, num, minIndex = 0) {
  const sortedArr = arr.sort();
  if (sortedArr[0] >= num) {
    return arr;
  }

  if (sortedArr[0] < num) {
    minIndex ++;
  }
  return lessThan(arr.slice(minIndex), num);
}

console.log(lessThan([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// Runtime: O(n) - Linear




