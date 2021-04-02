//palindrome->A string that doesn't change when reversed (it reads the same backward and forward).
function buildPalindrome(st) {
  stArray = Array.from(st); //convert the string to array for easier handling
  var subStringToAppend, newString;
  for (let i = 0; i < st.length; i++) {
    //Start taking substrings from the array
    subStringToAppend = stArray.slice(0, i);
    //reverse the substring and append it to the end of array
    newString = stArray.concat(subStringToAppend.reverse());
    //If we already have a palindrome return that 
    if (palindrome(newString)) {
      return newString.join("");//convert back to string
    }
  }
}
function palindrome(array) {
  var len = array.length;
  for (var i = 0; i < len / 2; i++) {
    if (array[i] !== array[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
