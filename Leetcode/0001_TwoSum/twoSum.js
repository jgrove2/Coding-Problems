// O(n^2)
var twoSumBasic = (nums, target) => {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i != j && nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
// O(n)
var twoSumEmptyObject = (nums, target) => {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var temp = nums[i];
    var tempComp = target - temp;
    if (map[tempComp] != undefined) {
      return [map[tempComp], i]
    }
    map[temp] = i;
  }
}
// O(n)
// Uses ES6 data structure map 
var twoSum = (nums, target) => {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var temp = nums[i];
    var tempComp = target - temp;
    if (map.has(tempComp)) {
      return [map.get(tempComp), i]
    }
    map.set(temp, i);
  }
}

exports.twoSum = twoSum;