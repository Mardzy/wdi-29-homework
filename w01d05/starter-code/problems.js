/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(mike) {
  if(!mike) return 'Hello World!';
  else return 'Hello Mike!';
}
// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  const area = Math.PI * radius * radius;
  return area;
}
// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  const farenheight = celcius * 1.8 + 32;
  return farenheight;
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const reverse = Number(number
    .toString()
    .split('')
    .reverse()
    .join(''));
  return parseFloat(reverse);
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  // const re = /[^A-Za-z0-9]/g;
  // string = string.toLowerCase().replace(re, '');
  // const len = string.length;
  // for (var i = 0; i < len/2; i++) {
  //   if (string[i] !== string[len - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
  //
  var re = /[\W_]/g;
  var lowRegStr = string.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
//order phrases alphabetical case insensitive
function orderStringAlphabetically(string) {
  const lower = string.toLowerCase();
  const sort = lower.split('');
  return sort.sort().join('').replace(' ', '').trim();
}
// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  const splitWord = string.toLowerCase().split('');
  const letters = {};
  for(const i in splitWord){
    const letter = splitWord[i];
    if(letter === ' ') continue;
    if(typeof letters[letter] === 'undefined'){
      letters[letter] = 0;
    }
    letters[letter]++;
  }
  return(letters);
}
// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  return string.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  return string.replace(/[^aeiou]/ig, '').length;
}

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array!== undefined & isNaN & Boolean & {} & [];
}


// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {

}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {

}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
// function coins(price) {
//   const coins = [100, 50, 20, 10, 5, 2, 1];
//   let remainingPrice = price * 100;
//   const answer = [];
//   for (let i = 0; i < coins.length; i++) {
//     if (coins[i] <= remainingPrice) {
//       const count = parseInt(remainingPrice / coins[i]);
//       for (let j = 1; j <= count; j++) {
//         answer.push(coins[i]);
//       }
//       remainingPrice = remainingPrice - (coins[i] * count);
//     }
//   }
//   return answer;
// }

//biggest coins first
//next size
//refactor

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  const noSpace = string.replace(/`* \s+ */g,  '\n');
  const stars = noSpace.replace(/./g, '*');
  return `**${stars}**\n* ${string} *\n**${stars}**`;
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
// function mergeUnique(arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   const inputArray = arr.filter( function( item, index, inputArray) {
//     return inputArray.indexOf(item) === index;
//   });
//   return inputArray;
// }
function mergeUnique(arr1, arr2) {
  const newSet = new Set(arr1.concat(arr2));
  return [...newSet];
}
// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  var arr = array.reduce();
  return `${key},:,${array}`;
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
// function objectToArray(arr) {
//   var piece1 = Object.keys(arr);
//   var piece2 = Object.values(arr);
//   var result = [];
//   for (var i = 0; i < piece1.length; i++) {
//     result.push([piece1[i], piece2[i]]);
//   }
//   return result;
// }
//}
// function objectToArray(object){
//   return Object.keys(object).map(key=>[key, object[key]]);
// }
function objectToArray(object) {
  return Object.entries(object);
}



// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {

}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {

}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

}
