function MaximumSubbarray(arr){
let train = 0;
let maxi = 0;
for(let i = 0;i<arr.length;i++){
let newTrain = arr[i];
let previousTrain = train + arr[i];
train = Math.max(newTrain,previousTrain);
maxi = Math.max(maxi,train)

}

return maxi
}
let arr = [5,-2, -7,3,-4,-2,6,7,-2,8,-1,10, -2, -4,2];
let result = MaximumSubbarray(arr)
console.log(result)