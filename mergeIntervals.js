// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

var merge = function(intervals){
intervals = intervals.sort((a,b)=> a[0] - b[0]);
let FirstPair = intervals[0];
let result = [];
for(let i of intervals){
if(FirstPair[1] > i[0]){
FirstPair[1] = Math.max(FirstPair[1] , i[1])

}else{
result.push(FirstPair)
FirstPair = i;
}




}
result.push(FirstPair);
return result





}



let Output = merge([[1,3],[2,6],[8,10],[15,18]])
console.log(Output);