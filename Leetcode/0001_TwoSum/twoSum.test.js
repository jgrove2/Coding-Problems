const twoSum = require("./twoSum");

test('finds two indices in [2,7,11,15] that add to the 9', () => {
  expect(twoSum.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('finds two indices in [3,2,4] that add to the 6', () => {
  expect(twoSum.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('finds two indices in [3,3] that add to the 6', () => {
  expect(twoSum.twoSum([3, 3], 6)).toEqual([0, 1]);
});