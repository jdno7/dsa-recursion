/** product: calculate the product of an array of numbers. */

function product (arr, i=0) {
    // BASE CASE
    if (i === arr.length) return 1
    // NORMAL CASE
    return arr[i] * product(arr,i+1)
    
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  // BASE CASE
  if (i === words.length) return 0
  // NORMAL CASE
  return Math.max(words[i].length, longest(words,i+1))
}

/** everyOther: return a string with every other letter. */

function everyOther(str,i=0) {
  // BASE CASE
  if (i >= str.length) return ''
  // NORMAL CASE
  return `${str[i]}${everyOther(str, i+2)}`
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  // BASE CASE
  let leftIdx = i
  let rightIdx = str.length -1 - i
  if (leftIdx >= rightIdx) return true
  if (str[leftIdx] != str[rightIdx]) return false
  
  // NORMAL CASE
  return isPalindrome(str, i+1)
}
 
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  // BASE CASE 
  if (i === arr.length) return -1
  if (arr[i] === val) return i
  // NORMAL CASE
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=1) {
  // BASE CASE 
  if(i > str.length) return ''
  // NORMAL CASE
  return `${str[str.length-i]}`+`${revString(str,i+1)}`
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i=0, vals=[]) {
  // BASE CASE
  if (i === Object.values(obj).length) return vals
  if (typeof(Object.values(obj)[i]) === 'string') vals.push(Object.values(obj)[i])
  if (typeof(Object.values(obj)[i]) === 'object') gatherStrings(Object.values(obj)[i],0,vals)
  // NORMAL CASE
  return gatherStrings(obj, i+1, vals)

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

 function binarySearch(arr, val, left=0, right=arr.length) {
  // BASE CASE
  if (left > right) return -1

  let mid = Math.floor((right + left)/2)
  if (arr[mid] === val) return mid
  console.log(arr[left], arr[mid], arr[right])
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid-1)
  }
  else {
    return binarySearch(arr, val, mid+1, right)
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

