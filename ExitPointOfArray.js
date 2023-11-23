 let arr =[
[0,0,0,0,1,0],
[0,1,0,0,1,0],
[0,0,0,0,1,0],
[0,1,0,0,1,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
]

 function exitpoint(arr){
let i = 0;
let j = 0;
let dir ="R";
while(i>=0 && j>=0 && i<arr.length && j<arr[0].length ){
if(arr[i][j] == 1 ){
    arr[i][j] == 0

//Change direction 
if( dir == "R") dir == "D"
else if(dir == "D") dir == "L"
else if(dir == "L") dir == "U"
else if(dir == "U") dir == "R"
}
// Now move 
if( dir == "R") j++
else if(dir == "D") i++
else if(dir == "L") j--
else if(dir == "U") i--

}
//if above while condition loop will break then this will run
//stopping going out of box
if( dir == "R") j--
else if(dir == "D") i--
else if(dir == "L") j++
else if(dir == "U") i++
console.log(i,j);
}

exitpoint(arr);