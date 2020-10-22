/**
 * Reverse provided string.
 *
 * @param {string} str String to be reversed
 * @returns number
 */
function reverseString(str) {
  let i = str.length - 1;
  let newStr = str.split('').reverse().join('');

  return newStr;
}

/**
 * Factorialize number
 *
 * // TODO: This can be optimized with memoization
 *
 * @param {number} num
 * @returns number
 */
function factorialize(num) {
  if (num <= 1) {
    return num;
  } else {
    return num * factorialize(num - 1);
  }
}

/**
 * Should checke sentence is pelindrome
 *
 * @param {string} str
 * @returns string
 */
function isPelindrome(str) {
  let newString = str.replace(/\s/gi, '').replace(/[^a-z0-9]/gim, '');
  let reversedString = newString.split('').reverse().join('');

  return newString.toLowerCase() === reversedString.toLowerCase();
}

/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {string} str
 * @returns number
 */
function findLongesWord(str) {
  if (!str || str.length === 0) {
    return 0;
  }

  let listOfWords = str.split(' ');
  let length = listOfWords[0].length;
  let i = 0;

  while (i < listOfWords.length) {
    if (length < listOfWords[i].length) {
      length = listOfWords[i].length;
    }
    i++;
  }

  return length;
}

function toTitleCase(str) {
  if (!str || str.length === 0) {
    return '';
  }

  return str
    .split(' ')
    .map(item => `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`)
    .join(' ');
}

/**
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 *
 * @param {array} arr
 */
function largestOfFour(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  return arr.map(item => {
    let i = 0;
    let largest = 0;

    while (i < item.length) {
      if (largest < item[i]) {
        largest = item[i];
      }

      i++;
    }

    return largest;
  });
}

/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *
 * @param {string} str
 * @param {string} target
 */
function confirmEnding(str, target) {
  if (!str || !target || str.length === 0 || target.length === 0) {
    return false;
  }

  // return str.endsWith(target);
  return str.slice(-target.length) === target;
}

/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 *
 * @param {*} str
 * @param {*} len
 */
function truncateString(str, len) {}

module.exports = {
  reverseString,
  factorialize,
  isPelindrome,
  findLongesWord,
  toTitleCase,
  largestOfFour,
  confirmEnding,
  truncateString,
};
