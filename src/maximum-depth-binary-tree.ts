import { test } from "./test";

/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */
type TreeNode = {
  left: TreeNode | null;
  right: TreeNode | null;
  val: number;
} | null;

export function maxDepth(root: TreeNode): number {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// prettier-ignore
test("maximum-depth-binary-tree: root only", maxDepth({ val: 1, left: null, right: null }), 1);
// prettier-ignore
test("maximum-depth-binary-tree: left child", maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: null }), 2);
// prettier-ignore
test("maximum-depth-binary-tree: right child", maxDepth({ val: 1, left: null, right: { val: 2, left: null, right: null } }), 2);
// prettier-ignore
test("maximum-depth-binary-tree: both children", maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }), 2);
// prettier-ignore
test("maximum-depth-binary-tree: left skewed tree", maxDepth({ val: 1, left: { val: 2, left: { val: 3, left: null, right: null }, right: null }, right: null }), 3);
// prettier-ignore
test("maximum-depth-binary-tree: right skewed tree", maxDepth({ val: 1, left: null, right: { val: 2, left: null, right: { val: 3, left: null, right: null } } }), 3);
// prettier-ignore
test("maximum-depth-binary-tree: balanced tree", maxDepth({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }), 2);
// prettier-ignore
test("maximum-depth-binary-tree: deep left tree", maxDepth({ val: 1, left: { val: 2, left: null, right: { val: 3, left: { val: 4, left: null, right: null }, right: null } }, right: null }), 4);
