let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printarray(arr){
  
 let s = "";
for(let i = 0;i<array.length;i++){
for(let j = arr[i].length-1; j>=0; j--){
s += arr[i][j]+" ";

}
}
console.log(s);

}

printarray(array)