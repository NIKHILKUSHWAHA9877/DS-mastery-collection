function reverseInrange(nums,l,r){
while(l<r){
let temp = nums[l];
nums[l] = nums[r];
nums[r] = temp;
l++;
r--;
}
}
var rotate = function(nums,k){
let n = nums.length;
k = k%n;
reverseInrange(nums,n-k,n-1)
reverseInrange(nums,0,n-k-1)
reverseInrange(nums,0,n-1)
}
