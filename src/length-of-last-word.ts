import { test } from "./test";

/*Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only. */
export function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").at(-1)?.length || 0;
}


test("lengthOfLastWord: single word", lengthOfLastWord("Hello"), 5);
test("lengthOfLastWord: multiple words", lengthOfLastWord("Hello World"), 5);
test("lengthOfLastWord: trailing spaces", lengthOfLastWord("Hello World   "), 5);
test("lengthOfLastWord: leading spaces", lengthOfLastWord("   Hello World"), 5);
test("lengthOfLastWord: single letter", lengthOfLastWord("a"), 1);
test("lengthOfLastWord: empty string", lengthOfLastWord(""), 0);
test("lengthOfLastWord: only spaces", lengthOfLastWord("   "), 0);
