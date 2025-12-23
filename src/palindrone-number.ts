import { test } from './test';

/*Given an integer x, return true if x is a palindrome, and false otherwise. */
export function isPalindrome(x: number): boolean {
  let str = x.toString();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}


// prettier-ignore
test("palindrome-number: positive palindrome", isPalindrome(121), true);
// prettier-ignore
test("palindrome-number: negative number", isPalindrome(-121), false);
// prettier-ignore
test("palindrome-number: single digit", isPalindrome(5), true);
// prettier-ignore
test("palindrome-number: zero", isPalindrome(0), true);
// prettier-ignore
test("palindrome-number: non-palindrome", isPalindrome(10), false);
// prettier-ignore
test("palindrome-number: large palindrome", isPalindrome(12321), true);
