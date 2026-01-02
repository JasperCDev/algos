import { test } from "./test";

/*Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.*/
export function wordPattern(pattern: string, s: string) {
  // const pMap: { [key: string]: string } = {};
  //  const sMap: { [key: string]: string } = {};

  // for (let i = 0; i < s.length; i++) {
  //   const val = s[i];

  //   sMap[s[i]]
  //   sMap[sChar] = tChar;
  //   tMap[tChar] = sChar;
  // }
}

test("word-pattern: single match", wordPattern("a", "dog"), true);
test("word-pattern: simple pattern", wordPattern("ab", "dog cat"), true);
test("word-pattern: repeated pattern", wordPattern("abb", "dog cat cat"), true);
test("word-pattern: different words same letter", wordPattern("aa", "dog cat"), false);
test("word-pattern: same word different letters", wordPattern("ab", "dog dog"), false);
test("word-pattern: longer pattern", wordPattern("abba", "dog cat cat dog"), true);
test("word-pattern: wrong order", wordPattern("abba", "dog cat dog cat"), false);
test("word-pattern: pattern too short", wordPattern("ab", "dog"), false);
test("word-pattern: pattern too long", wordPattern("abc", "dog cat"), false);
test("word-pattern: single letter pattern", wordPattern("a", "dog"), true);