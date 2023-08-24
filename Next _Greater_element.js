var nextGreatherElement = function (array, n) {
    let stack = [];  // here taking empty stack and it this values of array will come according to iteration
    let ans = new Array(n)  // here ans contains all the elements of n like [1,3,2,4] and after iterating ans on below code these values will get change accordengly
    for (let i = n - 1; i >= 0; i--) {
        let num = array[i]  // here array[i] is because i will iterate to whole array

        while (stack.length > 0 && array[stack[stack.length - 1]] <= num){  // <=num is because if top element (stack.length -1) is smaller then next number in array then we had to pop it out 
            stack.pop()
        }
     if (stack.length == 0) {
        ans[i] = -1    
    } 
    else {
        ans[i] = array[stack[stack.length - 1]];  // if greather value is found then it will push into ans[i]   
        stack.push(i)     
    }
}
    return ans;
}



let result = nextGreatherElement([1, 3, 2, 4], 4)
console.log(result);
