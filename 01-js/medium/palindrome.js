/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');;
  let i= str.length, rstr= '';
  while(i>0){
    rstr+=str.charAt(i-1);
    i--;
  }
  if(str.localeCompare(rstr) == 0)
     return true;
  else
     return false;
}

module.exports = isPalindrome;
