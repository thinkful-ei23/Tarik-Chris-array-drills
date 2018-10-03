'use strict';

const arrayClass = require('./array');
const Array = new arrayClass();

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new arrayClass();
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();

  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));
}

main();

// 1. length = 1, capacity = 3, this.ptr = 0
// 2. length = 6, capacity = 12, this.ptr = 3
// 3. length = 3, capacity = 12, this.ptr = 3
//    We called arr.pop() three times, removing 3 items from the array. Every time we call
//    arr.pop() we decrease the length property by 1 (this happens 3 times), which is why
//    the length = 3. arr.pop() does not mutate the capacity or this.ptr properties.
// 4. When we print the value of the item 'tauhida', the console prints NaN. We believe
//    that the current memory class stores all values as NaN when the value's data type isn't
//    'number'.
// 5. The _resize() function, if there is available memory, moves (copies) the array data to a new
//    section in memory. During this process, we increase the capacity (the amount of memory allocated
//    to the array) by the array's size ratio.

