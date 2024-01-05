/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let i=0, count =0;
    while(i< str.length){
      if('aAeEiIoOuU'.includes(str[i]))
         count++;
      i++;
    }

    return count;
}

module.exports = countVowels;