function cielPrint(nums,target){
let l = 0;
let r = nums.length-1;
let ciel = -1;
while(l<=r){
    let mid= Math.floor((l+r)/2);
if(nums[mid]==target)
    return target;

else if(nums[mid]>target){
ciel = nums[mid]
r = mid-1;

}else {
    l = mid+1;
}

}
return ciel;
}
let nums = [10, 12, 23, 34, 39, 40, 45, 52, 59, 63, 70, 90,101]
let value = cielPrint(nums,31)
console.log(value);
