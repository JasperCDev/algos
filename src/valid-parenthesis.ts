import { test } from "./test"; // Adjust path as needed

/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in map) {
      const closing = stack.pop();
      if (closing !== map[char]) {
        return false;
      }
      continue;
    }
    stack.push(char);
  }
  if (stack.length) {
    return false;
  }
  return true;
}

test("valid-parenthesis: empty string", isValid(""), true);
test("valid-parenthesis: single pair", isValid("()"), true);
test("valid-parenthesis: multiple pairs", isValid("()[]{}"), true);
test("valid-parenthesis: nested brackets", isValid("([{}])"), true);
test("valid-parenthesis: unmatched closing", isValid(")"), false);
test("valid-parenthesis: unmatched opening", isValid("("), false);
test("valid-parenthesis: wrong order", isValid("(]"), false);
test("valid-parenthesis: interleaved wrong", isValid("([)]"), false);
test("valid-parenthesis: multiple nested", isValid("{[()]}"), true);
test("valid-parenthesis: unmatched pairs", isValid("([)]{}"), false);
