import { test } from "./test";

/*Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.*/
export function wordPattern(pattern: string, s: string): boolean {
  const words =s.split(' ').filter(Boolean)

  const pMap = pattern.split("").reduce((acc, curr) => {
    if (curr === "") {
      return acc;
    }
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {} as { [key: string]: number });
  const sMap = s.split(" ").reduce((acc, curr) => {
    if (curr === "") {
      return acc;
    }
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {} as { [key: string]: number });
  for (let i = 0; i < words.length; i++) {
    let sChar = words[i];
    let pChar  = pattern[i];
    
  }
}

test("word-pattern: single match", wordPattern("a", "dog"), true);
test("word-pattern: simple pattern", wordPattern("ab", "dog cat"), true);
test("word-pattern: repeated pattern", wordPattern("abb", "dog cat cat"), true);
test(
  "word-pattern: different words same letter",
  wordPattern("aa", "dog cat"),
  false
);
test(
  "word-pattern: same word different letters",
  wordPattern("ab", "dog dog"),
  false
);
test(
  "word-pattern: longer pattern",
  wordPattern("abba", "dog cat cat dog"),
  true
);
test(
  "word-pattern: wrong order",
  wordPattern("abba", "dog cat dog cat"),
  false
);
test("word-pattern: pattern too short", wordPattern("ab", "dog"), false);
test("word-pattern: pattern too long", wordPattern("abc", "dog cat"), false);
test("word-pattern: single letter pattern", wordPattern("a", "dog"), true);
