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
  const sortedArr = arr.sort((a,b) => a-b);
  if (sortedArr[0] >= num) {
    return arr;
  }

  if (sortedArr[0] < num) {
    minIndex ++;
  }
  return lessThan(arr.slice(minIndex), num);
}
console.log(lessThan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// Runtime: O(n) - Linear


// const maxSumOfArray = array => {
//   let maxSum = 0;

//   for (let i=0; i<array.length; i++) {
//     let tempSum = 0;
//     let endingIndex = i;
//     for (let j=endingIndex; j < array.length; j++) {
//       tempSum += array[j];
//       if (tempSum > maxSum) {
//         maxSum = tempSum;
//       }
//     }
//   }
//   return maxSum;
// };

// console.log(maxSumOfArray([4,6,-3,5,-2,1]));
//Runtime: o(n^2) - Polynomial


function mergeArray(arr1, arr2, arr3 = []) {
  if (arr1.length === 0 && arr2.length === 0) {
    return arr3;
  }

  if (arr1.length === 0 && arr2.length > 0) {
    arr2.forEach((num2) => {
      arr3.forEach((num3, index3) => {
        if (num2 < num3) {
          arr3.splice(index3, 0, num2);
        }
      });
    });
    return arr3;
  }

  if (arr2.length === 0 && arr1.length > 0) {
    arr1.forEach((num1) => {
      arr3.forEach((num3, index3) => {
        if (num1 < num3) {
          arr3.splice(index3, 0, num1);
        }
      });
    });
    return arr3;
  }

  if (arr1[0] < arr2[0]) {
    arr3.push(arr1[0]);
    arr3.push(arr2[0]);
  }

  if (arr2[0] < arr1[0]) {
    arr3.push(arr2[0]);
    arr3.push(arr1[0]);
  }

  if (arr1[0] === arr2[0]) {
    arr3.push(arr1[0]);
    arr3.push(arr2[0]);
  }

  console.log(arr3);
  return mergeArray(arr1.slice(1), arr2.slice(1), arr3);
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));






