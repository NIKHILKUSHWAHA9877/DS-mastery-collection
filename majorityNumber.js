// 169. Majority Element
// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function(nums) {
let currentNum = nums[0];
let count = 0;
for(let i = 0;i<nums.length;i++){
if(currentNum === nums[i]){
count++;
}else{
    count--;
    if(count == 0){

    currentNum = nums[i];
count = 1
}
}
}
return currentNum;
}

let result = majorityElement([3,3,4])
console.log(result)
