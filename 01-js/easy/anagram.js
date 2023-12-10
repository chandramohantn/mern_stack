/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var sorted_str1 = str1.toLowerCase().split("").sort().join("");
  var sorted_str2 = str2.toLowerCase().split("").sort().join("");
  return sorted_str1 === sorted_str2;
}

module.exports = isAnagram;
