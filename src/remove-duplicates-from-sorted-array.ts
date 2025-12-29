/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored. */

import { test } from "./test";

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[index - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}
const nums1 = [1, 1, 2];
console.log("before: ", nums1);
// prettier-ignore
test("remove-duplicates: basic case", removeDuplicates(nums1), 2);
console.log("after: ", nums1);

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("before: ", nums2);
// prettier-ignore
test("remove-duplicates: all duplicates", removeDuplicates(nums2), 5);
console.log("after: ", nums2);

const nums3 = [1, 2, 3, 4, 5];
console.log("before: ", nums3);
// prettier-ignore
test("remove-duplicates: no duplicates", removeDuplicates(nums3), 5);
console.log("after: ", nums3);

const nums4: number[] = [];
console.log("before: ", nums4);
// prettier-ignore
test("remove-duplicates: empty array", removeDuplicates(nums4), 0);
console.log("after: ", nums4);

const nums5 = [1];
console.log("before: ", nums5);
// prettier-ignore
test("remove-duplicates: single element", removeDuplicates(nums5), 1);
console.log("after: ", nums5);
