let Palindrom = function(string , l , r){
 l = 0;
 r = string.length - 1;
while(l<r){
if(string[l] != string[r])
    return false
    l++
    r--
}
return true
}

let output = Palindrom("madam")
console.log(output);