/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.*/
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const letterCount: { [key: string]: number } = {};
  for (const letter of magazine) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  for (const letter of ransomNote) {
    if (!letterCount[letter] || letterCount[letter] === 0) {
      return false;
    }
    letterCount[letter]--;
  }
  return true;
}

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
