/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_', ' ']
  str = str.toLowerCase();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!punctuation.includes(str[i])) {
      result += str[i];
    }
  }

  n = result.length;
  m = parseInt(n / 2);
  for (let i = 0; i <= m; i++) {
    if (result[i] != result[n - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
