//MOVE ROBOT AND PRINT ALL POSSIBLE WAYS 

function moveRobot (n,m,i,j,psf){
if(i == n && j == m){
    console.log(psf)
    return;
}if(i > n || j > m){
    return;
}
moveRobot (n , m,i + 1, j, psf + "v");
moveRobot (n,m,i,j+1,psf + "h");
}
moveRobot (3,3,1,1,"")


//Move robot but this time give count of total number of moves only 
let count = 0
function moveRobot (n,m,i,j){
    if(i == n && j == m){
       count++
        return;
    }if(i > n || j > m){
        return;
    }
    moveRobot (n , m,i + 1, j);
    moveRobot (n,m,i,j+1);
    }
    moveRobot (3,3,1,1,"")
    console.log("Total count are:" , count)


