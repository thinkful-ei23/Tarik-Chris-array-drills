'use strict';

function URLify(urlString) {
  if (urlString.indexOf(' ') === -1) {
    return urlString;
  }
  const index = urlString.indexOf(' ')

  return urlString.slice(0, index) + '%20' + URLify(urlString.slice(index + 1));

}
let aString = 'www.thinkful.com /tauh ida parv een';
let secondString = 'tauhida parveen';
console.log(URLify(aString));
console.log(URLify(secondString));