function isPalindrome(word) {
  // Write your algorithm here
  // Iterate from the beginning to the middle of the word
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++){
  // Check each letter to the corresponding letter from the end
  const endIndex = word.length - 1 - startIndex;
  // If any letters don't match, return false
  if (word[startIndex] !== word[endIndex]) {
    return false;
  }
}
  // If they all match, return true. 
return true;
}

/* 
  Add your pseudocode here
  Iterate from the beginning to the middle of the word
  Check each letter to the corresponding letter from the end
  If any letters don't match, return false
  If they all match, return true. 
*/

/*
  Add written explanation of your solution here
Make a function that returns true if a word is a palindrome. This means if the first
  letter is the same as the last letter and the second letter is the same as the second
  to last letter, etc. Until we reach the middle, return true. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"))
}

module.exports = isPalindrome;
