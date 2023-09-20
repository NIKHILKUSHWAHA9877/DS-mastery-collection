 palindrom = (nums)=>{


var reversed = nums.split("").reverse().join("")

if(reversed === nums){
    console.log("true")
}else{
    console.log("false")
}
}
let result = palindrom("12321");
console.log(result)
    