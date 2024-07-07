function recur(n , currentStair, asf){
if(currentStair == n){
console.log(asf);
return
}
if(currentStair > n){ 
    return
}
recur(n,currentStair+1,asf+"1")
recur(n,currentStair+2,asf+"2")
recur(n,currentStair+3,asf+"3")
}
recur(4,0,"");
//not pushed