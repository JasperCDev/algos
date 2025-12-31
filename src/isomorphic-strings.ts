/*Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. */

import { test } from "./test";

export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap: { [key: string]: string } = {};
  const tMap: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if ((sMap[sChar] && sMap[sChar] !== tChar) || (tMap[tChar] && tMap[tChar] !== sChar)) {
      return false;
    }
    sMap[sChar] = tChar;
    tMap[tChar] = sChar;
  }
  return true;
}

test("isIsomorphic: simple mapping", isIsomorphic("egg", "add"), true);
test("isIsomorphic: no mapping", isIsomorphic("foo", "bar"), false);
test("isIsomorphic: same characters", isIsomorphic("badc", "baba"), false);
test("isIsomorphic: identity mapping", isIsomorphic("hello", "hello"), true);
test("isIsomorphic: single character", isIsomorphic("a", "b"), true);
test("isIsomorphic: empty strings", isIsomorphic("", ""), true);
test("isIsomorphic: different lengths", isIsomorphic("ab", "a"), false);
