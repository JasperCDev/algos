import { test } from "./test";

/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. */
export function removeElement(nums: number[], val: number): number {
  // let indexes: number[] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let n = nums[i];
  //   if (n === val) {
  //     indexes.push(i);
  //   }
  // }
  let count = 0;
  let lastValidIndex: null | number = null;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      if (lastValidIndex !== null) {
        nums[i] = nums[lastValidIndex];
        lastValidIndex = null;
      }
      continue;
    }
    count++;
    lastValidIndex = i;
  }
  return count;
}

let nums1 = [3, 2, 2, 3];

console.log(removeElement(nums1, 3), nums1);

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
