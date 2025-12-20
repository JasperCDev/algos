import { test } from "./test";

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

test("ransom-note: single letter not in magazine", canConstruct("a", "b"), false);
test("ransom-note: need two of same letter but only have one", canConstruct("aa", "ab"), false);
test("ransom-note: exact match with extra letters", canConstruct("aa", "aab"), true);
test("ransom-note: empty ransom note", canConstruct("", "abc"), true);
test("ransom-note: empty magazine", canConstruct("a", ""), false);
test("ransom-note: multiple different letters available", canConstruct("abc", "aabbcc"), true);
test("ransom-note: magazine too small", canConstruct("aab", "ab"), false);
test("ransom-note: identical strings", canConstruct("hello", "hello"), true);
test("ransom-note: ransom longer than magazine", canConstruct("abcdef", "abc"), false);
test("ransom-note: all letters available with extras", canConstruct("cat", "catdog"), true);
