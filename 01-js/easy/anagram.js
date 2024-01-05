/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();   
  let i=0;
  if(str1.length == str2.length){
     while(i<str1.length){
           if(str1.search(str2.charAt(i)) == -1){
            return false;
           }
           i++;
     }
     return true;
    }
  else
    return false;

}

module.exports = isAnagram;
