/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestelement = numbers[0],i=1;
    while(i<numbers.length){
        if(largestelement<numbers[i])
           largestelement = numbers[i];
        i++;
    }
   return largestelement;
}

module.exports = findLargestElement;