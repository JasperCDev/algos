import { test } from "./test";

/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. */
export function removeElement(nums: number[], val: number): number {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

// prettier-ignore
test("remove-element: basic case", removeElement([3,2,2,3], 3), 2);
// prettier-ignore
test("remove-element: all elements match", removeElement([1], 1), 0);
// prettier-ignore
test("remove-element: no elements match", removeElement([0,1,2,2,3,0,4,2], 2), 5);
// prettier-ignore
test("remove-element: empty array", removeElement([], 0), 0);
// prettier-ignore
test("remove-element: single non-matching", removeElement([5], 3), 1);
