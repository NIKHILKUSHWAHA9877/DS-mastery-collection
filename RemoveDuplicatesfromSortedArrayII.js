// 80. Remove Duplicates from Sorted Array II


// [1,1,1,2,2,3]


var removeDuplicates = function(nums) {
let output = 0
for(let i = 0;i<nums.length;i++){
if(nums[i] !== nums[i+2]){
nums[output] = nums[i]
output++

}

}
return output;
}

let result = removeDuplicates([1,1,1,2,2,3])
console.log(result)