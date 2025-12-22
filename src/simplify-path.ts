import { test } from "./test";

/*You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

The rules of a Unix-style file system are as follows:

A single period '.' represents the current directory.
A double period '..' represents the previous/parent directory.
Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
The simplified canonical path should follow these rules:

The path must start with a single slash '/'.
Directories within the path must be separated by exactly one slash '/'.
The path must not end with a slash '/', unless it is the root directory.
The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
Return the simplified canonical path. */
export function simplifyPath(path: string): string {
  let stack: string[] = [];
  let components = path.split("/");
  for (let i = 0; i < components.length; i++) {
    let component = components[i];
    if (component === "") {
      continue;
    }
    if (component === "..") {
      stack.pop();
      continue;
    }
    if (component === ".") {
      continue;
    }
    stack.push(component);
  }
  return "/" + stack.join("/");
}
// prettier-ignore
test("simplify-path: root only", simplifyPath("/"), "/");
// prettier-ignore
test("simplify-path: single directory", simplifyPath("/a"), "/a");
// prettier-ignore
test("simplify-path: multiple directories", simplifyPath("/a/b/c"), "/a/b/c");
// prettier-ignore
test("simplify-path: current directory reference", simplifyPath("/a/./b"), "/a/b");
// prettier-ignore
test("simplify-path: parent directory reference", simplifyPath("/a/b/.."), "/a");
// prettier-ignore
test("simplify-path: multiple slashes", simplifyPath("/a//b"), "/a/b");
// prettier-ignore
test("simplify-path: trailing slash", simplifyPath("/a/b/"), "/a/b");
// prettier-ignore
test("simplify-path: parent at root", simplifyPath("/../"), "/");
// prettier-ignore
test("simplify-path: complex path", simplifyPath("/a/../../b/./c"), "/b/c");
// prettier-ignore
test("simplify-path: dots as filename", simplifyPath("/a/..."), "/a/...");
// prettier-ignore
test("simplify-path: trailing slash removal", simplifyPath("/home/"), "/home");
// prettier-ignore
test("simplify-path: multiple consecutive slashes", simplifyPath("/home//foo/"), "/home/foo");
// prettier-ignore
test("simplify-path: parent directory traversal", simplifyPath("/home/user/Documents/../Pictures"), "/home/user/Pictures");
// prettier-ignore
test("simplify-path: parent at root level", simplifyPath("/../"), "/");
// prettier-ignore
test("simplify-path: dots directory with traversal", simplifyPath("/.../a/../b/c/../d/./"), "/.../b/d");
