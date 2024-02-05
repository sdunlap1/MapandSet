/*
==============================
=== Maps and Sets Exercise ===
==============================
*/

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

//vowelCount
function vowelCount(str) {
  const vowelMap = new Map();
  const vowels = 'aeiou';
  const inputStr = str.toLowerCase();

  for(const char of inputStr) {
    if(vowels.includes(char)) {
      if(vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
    return vowelMap;
}
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }