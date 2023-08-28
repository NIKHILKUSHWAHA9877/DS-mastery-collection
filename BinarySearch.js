// 704. Binary Search

// this is proper binary search algorithm 
var Search = function(nums , target){
let left = 0;
let right = nums.length - 1;
while(left <= right){
let mid = Math.floor((left + right)/2);
if(nums[mid]=== target){
    return mid;
}else if(nums[mid] < target ){
    if(nums[mid + 1]===target){
        return mid + 1 
    }else{
        left = mid + 1
    }
}else{
    right = mid - 1 
}


}

return - 1
}

let result = Search([-1,4,6,7,8,9],9)
console.log(result)